"use client";

import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Hero() {
  return (
    <section className="relative pt-28 sm:pt-36 md:pt-44 pb-20 md:pb-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* ── Two-column: text left, image right ── */}
        <div className="flex flex-col md:grid md:grid-cols-12 md:gap-x-12 md:items-center">

          {/* Left — text */}
          <div className="md:col-span-7 lg:col-span-6">
            <ScrollReveal>
              <p className="type-sm text-brand font-semibold uppercase tracking-wider mb-5">
                India&apos;s AI Exam Strategist
              </p>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <h1 className="block text-black text-balance type-6xl max-w-xl">
                We don&apos;t guess exams
                <span className="table"> we predict them.</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={160}>
              <p className="mt-6 type-base text-warm-500 max-w-lg text-pretty leading-relaxed">
                Osmium is your AI exam strategist, built from thousands of past
                papers, trained to predict what&apos;s coming next. Up to 50% of
                your real exam, decoded. No luck. No stress. Just results.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={240}>
              <div className="mt-8 flex flex-wrap gap-2">
                <Link
                  href="/get-started"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-black text-white transition-transform duration-300 ease-out active:scale-[0.98] hover:bg-warm-900 h-12 px-5 type-base"
                >
                  Get started
                </Link>
                <Link
                  href="/#features"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("features")?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_1px_2px_0_rgba(0,0,0,0.04),0_2px_4px_0_rgba(0,0,0,0.04)] transition-transform duration-300 ease-out active:scale-[0.98] hover:bg-warm-50 h-12 px-5 type-base"
                >
                  Explore features
                </Link>
              </div>
            </ScrollReveal>

            {/* Mini stats */}
            <ScrollReveal delay={320}>
              <div className="mt-12 flex gap-8 md:gap-10">
                <div>
                  <p className="type-3xl text-black font-bold">50%</p>
                  <p className="type-2xs text-warm-400 mt-0.5">Exam prediction</p>
                </div>
                <div className="w-px bg-black/[0.06]" />
                <div>
                  <p className="type-3xl text-black font-bold">1K+</p>
                  <p className="type-2xs text-warm-400 mt-0.5">Papers analyzed</p>
                </div>
                <div className="w-px bg-black/[0.06]" />
                <div>
                  <p className="type-3xl text-black font-bold">24/7</p>
                  <p className="type-2xs text-warm-400 mt-0.5">AI Tutor</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right — product image */}
          <div className="md:col-span-5 lg:col-span-5 lg:col-start-8 mt-12 md:mt-0">
            <ScrollReveal delay={200}>
              <div className="relative">
                {/* Glow behind image */}
                <div
                  className="absolute -inset-8 rounded-[40px] blur-[60px] opacity-20 pointer-events-none"
                  style={{ background: "radial-gradient(circle, #f97316 0%, #fbbf24 50%, transparent 80%)" }}
                />
                {/* Main image card */}
                <div className="relative rounded-3xl overflow-hidden ring-[0.5px] ring-inset ring-black/[0.075] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/Frame 93.png"
                    alt="Osmium AI Platform"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
