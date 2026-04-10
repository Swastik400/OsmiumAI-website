"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { Headphones, Loader2 } from "lucide-react";
import { LearnContent } from "./LearnContent";
import { QuizContent } from "./QuizContent";
import { QuizResult } from "./QuizResult";
import { FlashcardContent } from "./FlashcardContent";
import { QBankContent } from "./QBankContent";

interface Segment {
  speaker: string;
  gender: "male" | "female";
  text: string;
}

const SEGMENTS: Segment[] = [
  {
    speaker: "Ishaan",
    gender: "male",
    text: "Today we are discussing a concept that quietly defines whether a product succeeds or fails. User-Centric Design. It is a term that is often used but rarely understood in its full depth.",
  },
  {
    speaker: "Neha",
    gender: "female",
    text: "That is true. Many people assume user-centric design is about making interfaces look clean or visually appealing. In reality it is far more fundamental. It is about designing products around human behavior not assumptions.",
  },
  {
    speaker: "Ishaan",
    gender: "male",
    text: "Exactly. At its core user-centric design asks a very simple question. What is the user trying to achieve and what stands in their way?",
  },
  {
    speaker: "Neha",
    gender: "female",
    text: "And answering that requires shifting perspective. Instead of asking what features can we add, we need to ask what problems can we solve.",
  },
];

export function PodcastPlayer({ externalTab }: { externalTab?: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "playing" | "paused">("idle");
  const [activeIdx, setActiveIdx] = useState(-1);
  const [progress, setProgress] = useState(0);
  const [activeTab, setActiveTab] = useState("Podcast");
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const sessionRef = useRef(0);
  const transcriptRef = useRef<HTMLDivElement>(null);
  const cacheRef = useRef<Map<number, string>>(new Map());

  // Sync with external tab prop
  useEffect(() => {
    if (externalTab) setActiveTab(externalTab);
  }, [externalTab]);

  const killAudio = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.onended = null;
      audioRef.current.onerror = null;
      audioRef.current.pause();
      audioRef.current = null;
    }
  }, []);

  const fetchSegmentAudio = useCallback(async (idx: number): Promise<string | null> => {
    if (idx >= SEGMENTS.length) return null;
    const cached = cacheRef.current.get(idx);
    if (cached) return cached;
    try {
      const res = await fetch("/api/tts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: SEGMENTS[idx].text, speaker: SEGMENTS[idx].gender }),
      });
      if (!res.ok) return null;
      const data = await res.json();
      if (data.audio) cacheRef.current.set(idx, data.audio);
      return data.audio || null;
    } catch {
      return null;
    }
  }, []);

  const prefetch = useCallback((idx: number) => {
    if (idx < SEGMENTS.length && !cacheRef.current.has(idx)) {
      fetchSegmentAudio(idx);
    }
  }, [fetchSegmentAudio]);

  const loadAndPlay = useCallback(async (idx: number, session: number) => {
    if (idx >= SEGMENTS.length) {
      setStatus("idle");
      setActiveIdx(-1);
      setProgress(100);
      return;
    }

    setActiveIdx(idx);
    setProgress((idx / SEGMENTS.length) * 100);
    setStatus("loading");

    // Prefetch next segment while current one loads/plays
    prefetch(idx + 1);

    const audioBase64 = await fetchSegmentAudio(idx);
    if (session !== sessionRef.current || !audioBase64) {
      if (session === sessionRef.current) setStatus("idle");
      return;
    }

    killAudio();
    const audio = new Audio(`data:audio/wav;base64,${audioBase64}`);
    audioRef.current = audio;

    audio.onended = () => {
      if (session !== sessionRef.current) return;
      setProgress(((idx + 1) / SEGMENTS.length) * 100);
      loadAndPlay(idx + 1, session);
    };
    audio.onerror = () => {
      if (session !== sessionRef.current) return;
      setStatus("idle");
    };

    setStatus("playing");
    await audio.play();
  }, [killAudio, fetchSegmentAudio, prefetch]);

  const startFrom = useCallback((idx: number) => {
    killAudio();
    const session = ++sessionRef.current;
    loadAndPlay(idx, session);
  }, [killAudio, loadAndPlay]);

  const handlePlayPause = useCallback(() => {
    if (status === "playing") {
      audioRef.current?.pause();
      setStatus("paused");
    } else if (status === "paused" && audioRef.current) {
      audioRef.current.play();
      setStatus("playing");
    } else if (status === "loading") {
      // cancel the in-flight fetch
      sessionRef.current++;
      killAudio();
      setStatus("idle");
      setActiveIdx(-1);
      setProgress(0);
    } else {
      startFrom(activeIdx >= 0 ? activeIdx : 0);
    }
  }, [status, activeIdx, startFrom, killAudio]);

  const handleSkip = useCallback((dir: number) => {
    const cur = activeIdx < 0 ? 0 : activeIdx;
    const next = Math.max(0, Math.min(SEGMENTS.length - 1, cur + dir));
    if (next === cur && dir !== 0) return;
    startFrom(next);
  }, [activeIdx, startFrom]);

  // Auto-scroll to active segment
  useEffect(() => {
    if (activeIdx >= 0 && transcriptRef.current) {
      const el = transcriptRef.current.children[0]?.children[activeIdx * 2] as HTMLElement;
      el?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [activeIdx]);

  const isActive = status === "playing" || status === "paused" || status === "loading";

  const [quizResult, setQuizResult] = useState<{ score: number; total: number; time: number; answers: (boolean | null)[] } | null>(null);
  const [quizKey, setQuizKey] = useState(0);

  return (
    <div className="relative mx-auto w-full max-w-[45rem] rounded-3xl bg-white ring-[0.5px] ring-inset ring-black/[0.075] flex flex-col overflow-hidden">
      {/* Header tabs */}
      <div className="flex items-center gap-6 px-6 pt-6 pb-5 border-b border-black/5 overflow-x-auto scrollbar-none">
        {["Learn", "Podcast", "Quiz", "Flashcards", "Q. Bank"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-base whitespace-nowrap pb-2 transition-all duration-150 ${activeTab === tab
              ? "text-black font-semibold border-b-2 border-black"
              : "text-warm-400 hover:text-black"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content based on active tab */}
      {activeTab === "Podcast" ? (
        <>
          {/* Transcript */}
          <div ref={transcriptRef} className="flex-auto overflow-y-auto px-5 py-4" style={{ maxHeight: "16rem" }}>
            <div className="space-y-0">
              {SEGMENTS.map((seg, i) => (
                <div key={i}>
                  <div
                    className="py-2 px-2 -mx-2 rounded-lg transition-colors duration-300"
                    style={{ backgroundColor: activeIdx === i ? "rgba(253,224,71,0.15)" : "transparent" }}
                  >
                    <p className="type-xs font-medium mb-1" style={{ color: seg.gender === "male" ? "#7d4835" : "#a94bd2" }}>
                      {seg.speaker}
                    </p>
                    <p className={`type-xs leading-relaxed transition-colors duration-300 ${activeIdx === i ? "text-black font-medium" : activeIdx > i ? "text-black/50" : "text-black/70"
                      }`}>
                      {seg.text}
                    </p>
                  </div>
                  {i < SEGMENTS.length - 1 && <div className="h-px bg-black/[0.06] my-1" />}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom player */}
          <div className="flex-none border-t border-black/5">
            {/* Progress bar */}
            <div className="h-[2px] w-full bg-warm-200">
              <div
                className="h-full bg-black rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex items-center gap-3 px-4 py-3">
              {/* Icon */}
              <div className="flex-none size-9 rounded-lg bg-gradient-to-br from-brand to-orange-400 flex items-center justify-center">
                <Headphones className="size-4 text-white" />
              </div>

              {/* Title + status */}
              <div className="flex-auto min-w-0">
                <p className="type-xs font-medium text-black truncate">User Centric Design</p>
                <p className="type-2xs text-warm-400">
                  {status === "loading" ? "Generating audio..." : status === "paused" ? "Paused" : status === "playing" ? `Segment ${activeIdx + 1}/${SEGMENTS.length}` : "Ready to play"}
                </p>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-1">
                {/* Back */}
                <button
                  onClick={() => handleSkip(-1)}
                  disabled={!isActive || activeIdx <= 0}
                  className="flex-none size-8 flex items-center justify-center text-warm-500 rounded-full hover:bg-black/5 disabled:opacity-30"
                >
                  <svg viewBox="0 0 24 24" fill="none" className="size-4 rotate-180">
                    <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {/* Play/Pause */}
                <button
                  onClick={handlePlayPause}
                  className="flex-none size-9 rounded-full bg-black flex items-center justify-center"
                >
                  {status === "loading" ? (
                    <Loader2 className="size-4 text-white animate-spin" />
                  ) : status === "playing" ? (
                    <svg viewBox="0 0 24 24" className="size-4 text-white">
                      <rect x="6" y="4" width="4" height="16" rx="1" fill="currentColor" />
                      <rect x="14" y="4" width="4" height="16" rx="1" fill="currentColor" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" className="size-4 text-white">
                      <path fill="currentColor" d="M9.244 2.368C7.414 1.184 5 2.497 5 4.676v14.648c0 2.18 2.414 3.493 4.244 2.309l11.318-7.324c1.675-1.084 1.675-3.534 0-4.618z" />
                    </svg>
                  )}
                </button>

                {/* Forward */}
                <button
                  onClick={() => handleSkip(1)}
                  disabled={!isActive || activeIdx >= SEGMENTS.length - 1}
                  className="flex-none size-8 flex items-center justify-center text-warm-500 rounded-full hover:bg-black/5 disabled:opacity-30"
                >
                  <svg viewBox="0 0 24 24" fill="none" className="size-4">
                    <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </>
      ) : activeTab === "Learn" ? (
        <LearnContent />
      ) : activeTab === "Quiz" ? (
        quizResult ? (
          <QuizResult
            score={quizResult.score}
            total={quizResult.total}
            timeSeconds={quizResult.time}
            answers={quizResult.answers}
            onRestart={() => { setQuizResult(null); setQuizKey((k) => k + 1); }}
            onViewSolution={() => { }}
          />
        ) : (
          <QuizContent
            key={quizKey}
            onComplete={(score, total, time, answers) => setQuizResult({ score, total, time, answers })}
          />
        )
      ) : activeTab === "Flashcards" ? (
        <FlashcardContent />
      ) : activeTab === "Q. Bank" ? (
        <QBankContent />
      ) : (
        <div className="flex-auto flex items-center justify-center px-5 py-8">
          <div className="text-center">
            <p className="type-sm font-medium text-black mb-2">{activeTab} Section</p>
            <p className="type-xs text-warm-400">Content for {activeTab} will be available soon.</p>
          </div>
        </div>
      )}
    </div>
  );
}
