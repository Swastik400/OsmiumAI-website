"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4 text-red-400 flex-none mt-0.5" aria-hidden="true">
    <path d="M18 6 6 18" /><path d="m6 6 12 12" />
  </svg>
);

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4 text-green-500 flex-none mt-0.5" aria-hidden="true">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const comparisons = [
  { feature: "Exam Prediction", traditional: "Study everything, hope for the best", osmium: "AI predicts up to 50% of real exam questions" },
  { feature: "Doubt Resolution", traditional: "Wait for next class or tuition", osmium: "Instant AI tutor available 24/7" },
  { feature: "Study Plan", traditional: "One-size-fits-all syllabus", osmium: "Personalized roadmap adapting to your pace" },
  { feature: "Mock Tests", traditional: "Generic question papers", osmium: "AI-generated tests mirroring real exam patterns" },
  { feature: "Progress Tracking", traditional: "Monthly report cards", osmium: "Real-time analytics with weak area detection" },
  { feature: "Career Guidance", traditional: "Ask parents or relatives", osmium: "AI maps your skills to ideal career paths" },
  { feature: "Mental Health", traditional: "Ignored completely", osmium: "Built-in wellness check-ins and stress support" },
  { feature: "Accessibility", traditional: "Limited to classroom hours", osmium: "Learn anywhere, anytime, on any device" },
];

export function Comparison() {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="type-xs font-medium text-warm-500 uppercase tracking-wider mb-4">Why Osmium</p>
            <h2 className="type-5xl text-black">Traditional learning vs Osmium</h2>
            <p className="mt-4 type-base text-warm-500">See how Osmium transforms every aspect of the learning experience.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="-mx-5 sm:mx-0 overflow-x-auto">
            <div className="min-w-[600px] sm:min-w-0 px-5 sm:px-0">
              <div className="rounded-[1.25rem] border border-black/[0.06] overflow-hidden bg-white">
                {/* Header */}
                <div className="grid grid-cols-[1.2fr_1fr_1.2fr] sm:grid-cols-[1.5fr_1fr_1fr] border-b border-black/[0.06] bg-[#f5f3f1]">
                  <div className="px-4 py-3 sm:px-6 sm:py-5">
                    <span className="type-xs font-medium text-warm-500 uppercase tracking-wider">Feature</span>
                  </div>
                  <div className="px-4 py-3 sm:px-6 sm:py-5 border-l border-black/[0.06]">
                    <span className="type-xs font-medium text-warm-500 uppercase tracking-wider">Traditional</span>
                  </div>
                  <div className="px-4 py-3 sm:px-6 sm:py-5 border-l border-black/[0.06] bg-black">
                    <span className="type-xs font-medium text-white uppercase tracking-wider">Osmium AI</span>
                  </div>
                </div>

                {/* Rows */}
                {comparisons.map((c, i) => (
                  <div
                    key={c.feature}
                    className={`grid grid-cols-[1.2fr_1fr_1.2fr] sm:grid-cols-[1.5fr_1fr_1fr] transition-colors duration-200 ${
                      i !== comparisons.length - 1 ? "border-b border-black/[0.04]" : ""
                    } ${hoveredRow === i ? "bg-[#faf9f7]" : ""}`}
                    onMouseEnter={() => setHoveredRow(i)}
                    onMouseLeave={() => setHoveredRow(null)}
                  >
                    <div className="px-4 py-3 sm:px-6 sm:py-5 flex items-start">
                      <span className="type-xs sm:type-sm font-medium text-black">{c.feature}</span>
                    </div>
                    <div className="px-4 py-3 sm:px-6 sm:py-5 border-l border-black/[0.04] flex items-start gap-2">
                      <XIcon />
                      <span className="type-2xs sm:type-xs text-warm-500">{c.traditional}</span>
                    </div>
                    <div className="px-4 py-3 sm:px-6 sm:py-5 border-l border-black/[0.04] bg-black/[0.02] flex items-start gap-2">
                      <CheckIcon />
                      <span className="type-2xs sm:type-xs text-black font-medium">{c.osmium}</span>
                    </div>
                  </div>
                ))}

                {/* Bottom CTA */}
                <div className="grid grid-cols-[1.2fr_1fr_1.2fr] sm:grid-cols-[1.5fr_1fr_1fr] border-t border-black/[0.06] bg-[#f5f3f1]">
                  <div className="px-4 py-4 sm:px-6 sm:py-5 col-span-2 flex items-center">
                    <p className="type-xs sm:type-sm text-warm-500">Ready to upgrade your learning?</p>
                  </div>
                  <div className="px-4 py-4 sm:px-6 sm:py-5 border-l border-black/[0.06] flex items-center justify-center">
                    <a href="/contact" className="inline-flex items-center justify-center rounded-full bg-white text-black px-4 sm:px-5 h-8 sm:h-9 type-xs sm:type-sm font-medium transition-all duration-200 active:scale-95 hover:bg-black hover:text-white whitespace-nowrap">
                      Get started
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
