"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Search, Handshake, Zap, CheckCircle, Rocket, HeartHandshake } from "lucide-react";

const phases = [
  {
    id: "plan",
    label: "Plan",
    title: "Plan",
    desc: "Every project begins with understanding. We listen, research, and map out a practical strategy. Together, we align on timelines, budgets, and goals to ensure clarity from the very start.",
    items: [
      { icon: Search, title: "Research", desc: "Deep research and brainstorming help us understand your needs better." },
      { icon: Handshake, title: "Best Services", desc: "We promise reliable service and transparent communication from day one." },
    ],
  },
  {
    id: "development",
    label: "Development",
    title: "Development",
    desc: "With a clear plan in place, our team brings ideas to life. From design to coding, we follow a structured approach that balances creativity with precision — delivering solutions that are scalable and future-ready.",
    items: [
      { icon: Zap, title: "Agile Process", desc: "Flexible and adaptive to your needs." },
      { icon: CheckCircle, title: "Quality Focus", desc: "Every feature is tested for reliability." },
    ],
  },
  {
    id: "release",
    label: "Release",
    title: "Release",
    desc: "The final stage is all about delivery and impact. We launch with care, monitor performance, and provide ongoing support to ensure your project continues to grow even after release.",
    items: [
      { icon: Rocket, title: "Smooth Launch", desc: "A hassle-free transition from build to live." },
      { icon: HeartHandshake, title: "Ongoing Support", desc: "We stand by your side post-release." },
    ],
  },
];

export function Process() {
  const [active, setActive] = useState(0);
  const current = phases[active];

  return (
    <section className="py-4 md:py-6">
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
              <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-x-12 mb-10">
                <div className="lg:col-span-6">
                  <p className="type-xs text-brand font-medium uppercase tracking-wider mb-3">
                    How We Power Your Vision
                  </p>
                  <h2 className="type-5xl text-black text-balance max-w-lg lg:max-w-none">
                    Our Work Process: Simple, Secure, Effective
                  </h2>
                </div>
                <div className="mt-6 lg:mt-0 lg:col-span-6 flex flex-col justify-end">
                  <p className="type-sm text-warm-500 text-pretty">
                    At Navchetna, we believe every project deserves a thoughtful
                    start, a strong build, and a confident launch. Our process is
                    designed to keep things clear, secure, and dependable.
                  </p>
                </div>
              </div>

              {/* Tab toggle */}
              <div className="flex justify-center mb-10">
                <div className="inline-flex items-center rounded-full ring-[0.5px] ring-inset ring-black/[0.075] bg-warm-50 p-1">
                  {phases.map((p, i) => (
                    <button
                      key={p.id}
                      onClick={() => setActive(i)}
                      className={`relative rounded-full px-6 py-2.5 type-sm font-medium transition-all duration-200 cursor-pointer ${
                        active === i
                          ? "bg-white text-black shadow-[0_0_1px_rgba(0,0,0,0.4),0_4px_4px_rgba(0,0,0,0.04)]"
                          : "text-black/40 hover:text-black/60"
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Content — split layout like APIShowcase */}
            <ScrollReveal delay={100}>
              <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
                {/* Left — text */}
                <div className="relative px-2 md:px-6 text-pretty py-6 flex flex-col justify-between">
                  <div key={active} className="animate-fade-up">
                    <h3 className="type-xl text-black">{current.title}</h3>
                    <div className="mt-4 type-base text-warm-500">
                      <p>{current.desc}</p>
                    </div>
                    <ul className="mt-8 space-y-5">
                      {current.items.map((item) => (
                        <li key={item.title} className="flex items-start gap-3">
                          <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-black/5 bg-warm-50">
                            <item.icon className="h-4 w-4 text-warm-700" />
                          </span>
                          <div>
                            <p className="type-sm font-medium text-black">{item.title}</p>
                            <p className="mt-1 type-sm text-warm-500">{item.desc}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Vertical divider */}
                <div className="hidden w-px lg:block bg-black/[0.06]" />

                {/* Right — image */}
                <div className="px-4 pb-4 lg:pt-4 flex">
                  <div className="relative flex w-full rounded-[1.25rem] overflow-hidden">
                    <div className="w-full" style={{ aspectRatio: "4/3" }} />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={["/ref/gmhm1kxxzgd-Background7.jpeg", "/ref/9dzqkp3d2u4-app-creative.jpeg", "/ref/rlartawee0i-app-agents.jpeg"][active]}
                      alt={current.title}
                      className="absolute inset-0 size-full object-cover transition-opacity duration-500"
                    />
                    <div className="absolute inset-0 rounded-[1.25rem] ring-[0.5px] ring-black/[0.075] ring-inset pointer-events-none" />
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
