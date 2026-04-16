"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Headphones,
  HelpCircle,
  Layers,
  FileQuestion,
} from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { PodcastPlayer } from "@/components/ui/PodcastPlayer";

const smallCards = [
  {
    icon: Headphones,
    title: "AI Podcasts",
    desc: "AI-generated audio lessons with multi-speaker voices, word-by-word highlights synced with playback, and full controls.",
    href: "/#features",
  },
  {
    icon: HelpCircle,
    title: "Interactive Quizzes",
    desc: "10-question MCQs with progress tracking, instant check/cross feedback, and detailed solution breakdowns.",
    href: "/#features",
  },
  {
    icon: Layers,
    title: "Flashcards",
    desc: "Animated flip-cards with question on front, answer on back. Navigate between cards to reinforce memory.",
    href: "/#features",
  },
  {
    icon: FileQuestion,
    title: "Question Bank",
    desc: "Expandable question cards with detailed answers. Browse the full Q-Bank for any lesson or topic.",
    href: "/#features",
  },
];

export function BentoGrid() {
  const [podcastTab, setPodcastTab] = useState("Podcast");

  const tabMap: Record<string, string> = {
    "AI Podcasts": "Podcast",
    "Interactive Quizzes": "Quiz",
    "Flashcards": "Flashcards",
    "Question Bank": "Q. Bank",
  };

  const cardInfo: Record<string, { title: string; desc: string }> = {
    Podcast: {
      title: "AI-Powered Podcasts",
      desc: "AI-generated podcasts with multi-speaker voices, word-by-word highlights, and full playback controls.",
    },
    Quiz: {
      title: "Interactive Quizzes",
      desc: "10-question MCQs with real-time progress tracking, instant check/cross feedback, and detailed solution breakdowns for every question.",
    },
    Flashcards: {
      title: "Flip Flashcards",
      desc: "Animated flip-cards showing question on front, answer on back. Swipe through cards to reinforce memory and master concepts.",
    },
    "Q. Bank": {
      title: "Question Bank",
      desc: "Expandable question cards with detailed answers. Browse the full Q-Bank for any lesson, topic, or subject.",
    },
    Learn: {
      title: "Video Lessons",
      desc: "Structured video lessons with embedded YouTube player. Watch, pause, and learn at your own pace with lesson content alongside.",
    },
  };

  const currentInfo = cardInfo[podcastTab] || cardInfo.Podcast;

  return (
    <section className="pb-16 md:pb-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-12 gap-4">
          {/* ── Large card 1: Mock Tests  with reference bg image ── */}
          <ScrollReveal className="col-span-full lg:col-span-6">
            <div className="group relative isolate h-full overflow-hidden rounded-[1.25rem]">
              <div className="relative flex h-full flex-col px-5 pb-6 sm:px-7 sm:pb-8">
                {/* Background image from reference */}
                <div className="absolute inset-0 -z-10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/ref/redchdw2op-bento-orange-blue-2@3x.jpeg"
                    alt=""
                    className="absolute inset-0 size-full object-cover"
                  />
                </div>
                <div
                  className="absolute inset-0 -z-10"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.15) 40%, transparent 100%)",
                  }}
                />

                {/* Mock UI preview */}
                <div className="relative z-20 h-[34rem] pt-6">
                  <div className="flex h-full items-center">
                    <div className="relative w-full rounded-2xl overflow-hidden shadow-lg">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/learn.png"
                        alt="Osmium Learning Platform"
                        className="w-full h-auto object-contain rounded-2xl"
                      />
                    </div>
                  </div>
                </div>

                <h3 className="mt-auto font-semibold tracking-wide" style={{ fontSize: "1.1rem", textShadow: "0 1px 8px rgba(0,0,0,0.3)", color: "#ffffff" }}>
                  Interactive course learning
                </h3>
                <p className="mt-4 type-sm text-pretty text-white">
                  5 learning modes in every lesson  video lectures, AI podcasts, quizzes, flashcards, and question banks. Learn any way that works for you.
                </p>
                <div className="pointer-events-none absolute inset-0 z-30 rounded-[1.25rem] ring-[0.5px] ring-inset ring-black/[0.075]" />
              </div>
            </div>
          </ScrollReveal>

          {/* ── Large card 2: AI Podcast Player ── */}
          <ScrollReveal className="col-span-full lg:col-span-6" delay={100}>
            <div className="group relative isolate h-full overflow-hidden rounded-[1.25rem]" style={{ backgroundColor: "#f5f3f1" }}>
              <div className="relative flex h-full flex-col px-5 pb-6 sm:px-7 sm:pb-8">
                {/* Podcast UI */}
                <div className="relative z-20 h-[34rem] pt-6">
                  <div className="flex h-full flex-col">
                    <PodcastPlayer externalTab={podcastTab} />
                  </div>
                </div>

                <h3 className="type-sm font-medium text-warm-500">
                  <Link href="/#features" className="inline-flex items-center gap-1.5 outline-none">
                    {currentInfo.title}
                    <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3 flex-none opacity-0 transition-opacity group-hover:opacity-100">
                      <path d="M18.25 15.25V5.75M18.25 5.75H8.75M18.25 5.75L6 18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                    </svg>
                  </Link>
                </h3>
                <p className="mt-4 type-sm text-pretty text-black">
                  {currentInfo.desc}
                </p>
                <div className="pointer-events-none absolute inset-0 z-30 rounded-[1.25rem] ring-[0.5px] ring-inset ring-black/[0.075]" />
              </div>
            </div>
          </ScrollReveal>

          {/* ── 4 Small icon cards  clickable, switches podcast tab ── */}
          {smallCards.map((card, i) => (
            <ScrollReveal
              key={card.title}
              className="col-span-full sm:col-span-6 lg:col-span-3"
              delay={i * 80}
            >
              <div
                className={`group rounded-2xl relative overflow-hidden h-full isolate border cursor-pointer transition-all duration-200 ${
                  podcastTab === tabMap[card.title]
                    ? "border-black/20 shadow-md"
                    : "border-black/[0.08] hover:border-black/15"
                }`}
                style={{ backgroundColor: "#f5f3f1" }}
                onClick={() => setPodcastTab(tabMap[card.title])}
              >
                <div className="h-full relative pointer-events-none px-5 pb-6 pt-5 sm:px-7 sm:pb-8 sm:pt-7 flex flex-col">
                  <div className={`mb-16 flex items-center justify-center size-10 rounded-xl border transition-colors duration-200 ${
                    podcastTab === tabMap[card.title]
                      ? "border-black bg-black"
                      : "border-black/[0.08] bg-white"
                  }`}>
                    <card.icon className={`h-5 w-5 transition-colors duration-200 ${
                      podcastTab === tabMap[card.title] ? "text-white" : "text-black"
                    }`} />
                  </div>
                  <h3 className="pointer-events-auto mt-auto type-sm font-medium text-warm-500">
                    <span className="inline-flex items-center gap-1.5">
                      {card.title}
                      {podcastTab === tabMap[card.title] && (
                        <span className="size-1.5 rounded-full bg-brand" />
                      )}
                    </span>
                  </h3>
                  <p className="pointer-events-auto mt-4 type-sm text-pretty text-black">{card.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
