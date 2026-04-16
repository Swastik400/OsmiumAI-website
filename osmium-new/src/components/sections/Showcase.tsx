"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const features = [
  {
    title: "Smart Mock Tests",
    desc: "AI-generated tests trained on thousands of past papers. Adaptive difficulty, real exam patterns, and instant scoring.",
    color: "#E8D5C4",
    mockUI: {
      heading: "Physics  JEE Mains 2025",
      items: [
        { label: "Q1. A particle moves in a circle...", status: "Correct", color: "#22c55e" },
        { label: "Q2. The electric field due to...", status: "Incorrect", color: "#ef4444" },
        { label: "Q3. A block of mass 2kg is...", status: "Correct", color: "#22c55e" },
        { label: "Q4. In Young's double slit...", status: "Skipped", color: "#a3a3a3" },
      ],
      score: "72%",
      time: "45:12",
    },
  },
  {
    title: "AI Career Mapping",
    desc: "Crystal-clear roadmaps showing where to begin, what to learn next, and how to reach your goals  step by step.",
    color: "#D5E0E8",
    mockUI: {
      heading: "Your Career Roadmap",
      items: [
        { label: "Class 12  PCM", status: "Completed", color: "#22c55e" },
        { label: "JEE Mains Preparation", status: "In Progress", color: "#f59e0b" },
        { label: "JEE Advanced Target", status: "Upcoming", color: "#a3a3a3" },
        { label: "B.Tech  Computer Science", status: "Goal", color: "#8b5cf6" },
      ],
      score: "Stage 2/4",
      time: "On Track",
    },
  },
];

export function Showcase() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(1);

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section heading */}
        <ScrollReveal>
          <h2 className="block text-black text-balance type-5xl max-w-3xl">
            Two platforms built on the same research foundation
          </h2>
        </ScrollReveal>

        <div className="mt-14 relative isolate md:grid md:grid-cols-[40%_20%_40%] md:gap-y-11 md:overflow-hidden md:rounded-b-3xl">
          <div className="hidden md:block md:row-start-2 md:col-start-1 md:col-span-3 rounded-3xl bg-cream -mx-2 ring-[0.5px] ring-inset ring-black/[0.075]" />

          {features.map((f, i) => (
            <div key={f.title} className="contents">
              <ScrollReveal
                className={`${i === 0 ? "md:row-start-1 md:col-start-1" : "md:row-start-1 md:col-start-2 md:col-span-2 mt-12 md:mt-0"}`}
              >
                <div className="max-w-64 md:max-w-60 lg:max-w-64">
                  <h3 className="type-base font-medium text-black">{f.title}</h3>
                  <p className="mt-4 type-sm text-warm-500 text-pretty">{f.desc}</p>
                </div>
              </ScrollReveal>

              <div
                className={`relative mt-8 md:mt-0 bg-cream md:bg-transparent overflow-hidden md:row-start-2 pt-6 md:pt-9 px-5 md:px-0 rounded-2xl md:rounded-none ${
                  i === 0 ? "md:col-start-1 md:col-span-2" : "md:col-start-2 md:col-span-2"
                }`}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                <div
                  className="relative bg-white overflow-hidden rounded-t-lg transition-all duration-500"
                  style={{
                    zIndex: hoveredIdx === i ? 2 : i === 1 ? 1 : 0,
                    transform: `translateY(${hoveredIdx === i ? "0" : "0.75rem"})`,
                    maskImage: i === 0
                      ? "linear-gradient(to right, white 75%, transparent 83.33%)"
                      : "linear-gradient(to left, white 75%, transparent 83.33%)",
                    maskSize: "200% 100%",
                    maskPosition: i === 0 ? "-100% 0" : "50% 0",
                  }}
                >
                  <div className="p-5 sm:p-6">
                    <div className="flex items-center justify-between border-b border-black/5 pb-4 mb-4">
                      <div>
                        <p className="type-sm font-medium text-black">{f.mockUI.heading}</p>
                        <p className="mt-0.5 type-xs text-warm-400">Powered by Osmium AI</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <p className="type-xs text-warm-400">Score</p>
                          <p className="type-sm font-medium text-black">{f.mockUI.score}</p>
                        </div>
                        <div className="text-right">
                          <p className="type-xs text-warm-400">Time</p>
                          <p className="type-sm font-medium text-black">{f.mockUI.time}</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      {f.mockUI.items.map((item) => (
                        <div key={item.label} className="flex items-center gap-3 rounded-lg bg-cream/60 px-3 py-2.5">
                          <div className="h-2 w-2 flex-none rounded-full" style={{ backgroundColor: item.color }} />
                          <span className="flex-auto truncate type-sm text-black/80">{item.label}</span>
                          <span className="flex-none type-xs font-medium" style={{ color: item.color }}>{item.status}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 flex items-center gap-2 pt-3 border-t border-black/5">
                      <div className="h-1.5 flex-auto rounded-full bg-warm-100 overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-700"
                          style={{ width: i === 0 ? "72%" : "50%", backgroundColor: f.color === "#E8D5C4" ? "#7d4835" : "#3b82f6" }}
                        />
                      </div>
                      <span className="type-xs text-warm-400">{i === 0 ? "72% complete" : "50% progress"}</span>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 pointer-events-none rounded-2xl ring-[0.5px] ring-black/[0.075] ring-inset md:hidden" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
