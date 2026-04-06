"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  FileText,
  BookOpen,
  GraduationCap,
  BarChart3,
  ClipboardCheck,
  BrainCircuit,
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "AI Notes Generator",
    desc: "Teachers can create structured, curriculum-aligned notes in seconds. Just pick the topic and Osmium generates clean, ready-to-share study material.",
  },
  {
    icon: BookOpen,
    title: "Study Material Builder",
    desc: "Generate worksheets, summaries, revision sheets, and topic guides tailored to any subject, class, or exam pattern \u2014 all powered by Osmium AI.",
  },
  {
    icon: GraduationCap,
    title: "Research Paper Assistant",
    desc: "Helps teachers draft, structure, and refine research papers with AI-powered writing, citation suggestions, and academic formatting.",
  },
  {
    icon: BarChart3,
    title: "Student Analytics Dashboard",
    desc: "Track every student\u2019s progress, identify weak areas, monitor attendance patterns, and generate performance reports for parents and management.",
  },
  {
    icon: ClipboardCheck,
    title: "Auto Mock Test Creation",
    desc: "Generate exam-ready mock tests from any syllabus in minutes. Set difficulty, question count, and exam pattern \u2014 Osmium handles the rest.",
  },
  {
    icon: BrainCircuit,
    title: "AI Teaching Assistant",
    desc: "Osmium acts as a co-teacher \u2014 answering student doubts 24/7, grading assignments, and suggesting personalized learning paths for each student.",
  },
];

export function InstituteFeatures() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = features[activeIdx];

  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="relative border-l border-r border-black/[0.06]">
          {/* Top dots */}
          <div className="relative">
            <div className="absolute left-0 top-0 z-20 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full" style={{ backgroundColor: "#FDFCFC" }}>
              <div className="h-1.5 w-1.5 rounded-full bg-black" />
            </div>
            <div className="absolute right-0 top-0 z-20 flex h-10 w-10 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full" style={{ backgroundColor: "#FDFCFC" }}>
              <div className="h-1.5 w-1.5 rounded-full bg-black" />
            </div>
            <div className="h-px w-full bg-black/[0.06]" />
          </div>

          <div className="px-4 sm:px-6 py-12 md:py-16">
            <ScrollReveal>
              {/* Heading */}
              <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-x-12 mb-12">
                <div className="lg:col-span-6">
                  <p className="type-xs text-brand font-medium uppercase tracking-wider mb-3">
                    For Teachers &amp; Institutes
                  </p>
                  <h2 className="type-5xl text-black text-balance max-w-lg lg:max-w-none">
                    Make every teacher&apos;s work effortless with AI
                  </h2>
                </div>
                <div className="mt-6 lg:mt-0 lg:col-span-6 flex flex-col justify-end">
                  <p className="type-sm text-warm-500 text-pretty">
                    From creating notes and study material to analyzing student
                    performance and generating mock tests &mdash; Osmium AI handles
                    the heavy lifting so teachers can focus on what matters most:
                    teaching.
                  </p>
                </div>
              </div>

              {/* Interactive grid */}
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1.2fr] gap-0">
                {/* Left — feature list */}
                <div className="flex flex-col">
                  {features.map((f, i) => (
                    <button
                      key={f.title}
                      onClick={() => setActiveIdx(i)}
                      className={`flex items-center gap-4 px-5 py-4 text-left transition-colors duration-200 border-b border-black/[0.04] ${
                        activeIdx === i ? "bg-warm-50" : "hover:bg-warm-50/50"
                      }`}
                    >
                      <div className={`flex-none flex items-center justify-center size-9 rounded-lg transition-colors duration-200 ${
                        activeIdx === i ? "bg-black" : "bg-warm-50 ring-1 ring-inset ring-black/10"
                      }`}>
                        <f.icon className={`size-4 transition-colors duration-200 ${
                          activeIdx === i ? "text-white" : "text-black"
                        }`} />
                      </div>
                      <div className="min-w-0">
                        <p className={`type-sm font-medium transition-colors duration-200 ${
                          activeIdx === i ? "text-black" : "text-warm-500"
                        }`}>
                          {f.title}
                        </p>
                      </div>
                      {activeIdx === i && (
                        <div className="ml-auto flex-none">
                          <svg viewBox="0 0 24 24" fill="none" className="size-4 text-warm-400">
                            <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      )}
                    </button>
                  ))}
                </div>

                {/* Divider */}
                <div className="hidden lg:flex items-center">
                  <div
                    className="w-px self-stretch"
                    style={{
                      background: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.08) 20%, rgba(0,0,0,0.08) 80%, transparent 100%)",
                    }}
                  />
                </div>
                <div className="lg:hidden h-px mx-4 my-2" style={{ background: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.08) 20%, rgba(0,0,0,0.08) 80%, transparent 100%)" }} />

                {/* Right — active feature detail */}
                <div className="flex flex-col justify-center px-5 lg:px-10 py-8 lg:py-12" style={{ backgroundColor: "#f5f3f1", borderRadius: "1.25rem" }}>
                  <div key={activeIdx} className="animate-fade-up">
                    <div className="flex items-center justify-center size-14 rounded-2xl bg-white ring-1 ring-inset ring-black/[0.06] mb-6">
                      <active.icon className="size-7 text-black" />
                    </div>
                    <h3 className="type-2xl text-black mb-3">{active.title}</h3>
                    <p className="type-sm text-warm-500 leading-relaxed text-pretty">
                      {active.desc}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Bottom dots */}
          <div className="relative">
            <div className="absolute left-0 bottom-0 z-20 flex h-10 w-10 -translate-x-1/2 translate-y-1/2 items-center justify-center rounded-full" style={{ backgroundColor: "#FDFCFC" }}>
              <div className="h-1.5 w-1.5 rounded-full bg-black" />
            </div>
            <div className="absolute right-0 bottom-0 z-20 flex h-10 w-10 translate-x-1/2 translate-y-1/2 items-center justify-center rounded-full" style={{ backgroundColor: "#FDFCFC" }}>
              <div className="h-1.5 w-1.5 rounded-full bg-black" />
            </div>
            <div className="h-px w-full bg-black/[0.06]" />
          </div>
        </div>
      </div>
    </section>
  );
}
