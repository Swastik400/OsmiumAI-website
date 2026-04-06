"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const testimonials = [
  {
    name: "SSIP Gujarat",
    color: "#3b82f6",
    image: "/ref/voice-bg-01.png",
    quote: "Osmium's AI-driven approach to exam preparation is exactly what Indian students need — accessible, intelligent, and scalable.",
  },
  {
    name: "NexTech Labs",
    color: "#8b5cf6",
    image: "/ref/voice-bg-03.png",
    quote: "The predictive mock test engine is remarkably accurate. We've seen students improve scores by 30% within weeks of using Osmium.",
  },
  {
    name: "Plenora Edu",
    color: "#22c55e",
    image: "/ref/voice-bg-05.png",
    quote: "Integrating Osmium into our institute transformed how students prepare. The career mapping feature alone is worth it.",
  },
  {
    name: "TantriX",
    color: "#f59e0b",
    image: "/ref/voice-bg-07.png",
    quote: "Osmium bridges the gap between urban and rural education like nothing else. Every student deserves this kind of AI support.",
  },
];

const INTERVAL = 4000;

export function Testimonials() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const [fading, setFading] = useState(false);

  const goTo = useCallback((idx: number) => {
    setFading(true);
    setTimeout(() => {
      setActive(idx);
      setProgress(0);
      setFading(false);
    }, 200);
  }, []);

  // Auto-rotate
  useEffect(() => {
    const tick = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          goTo((active + 1) % testimonials.length);
          return 0;
        }
        return p + 100 / (INTERVAL / 50);
      });
    }, 50);
    return () => clearInterval(tick);
  }, [active, goTo]);

  const handleClick = (idx: number) => {
    goTo(idx);
  };

  return (
    <section className="py-6 md:py-8">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="relative border-l border-r border-black/[0.06]">
          <div className="px-4 py-8 sm:px-6 md:py-10">
            <ScrollReveal>
              <div className="relative flex flex-col gap-x-10 gap-y-6 sm:flex-row sm:justify-between">
                {/* Left — logos + text */}
                <div className="flex flex-auto flex-col gap-x-5 gap-y-3 sm:flex-auto md:flex-row md:items-start">
                  {/* Logo tabs with progress outline */}
                  <div className="flex flex-none gap-4">
                    {testimonials.map((t, i) => {
                      const isActive = active === i;
                      const ringProgress = isActive ? progress : 0;
                      // Rounded-rect perimeter math for stroke animation
                      // Outer rect: 48x48 at (3,3) with rx=14 to wrap the 44x44 icon
                      const w = 48;
                      const h = 48;
                      const rx = 14;
                      const perimeter = 2 * (w - 2 * rx) + 2 * (h - 2 * rx) + 2 * Math.PI * rx;
                      const dashOffset = perimeter - (ringProgress / 100) * perimeter;

                      return (
                        <button
                          key={t.name}
                          onClick={() => handleClick(i)}
                          className="group relative cursor-pointer outline-none"
                          aria-label={t.name}
                        >
                          <svg
                            viewBox="0 0 54 54"
                            aria-hidden="true"
                            style={{ width: "3.375rem", height: "3.375rem", margin: "-0.3125rem" }}
                          >
                            <defs>
                              <clipPath id={`clip-${i}`}>
                                <rect width="44" height="44" x="5" y="5" rx="12" />
                              </clipPath>
                            </defs>
                            {/* Background fill */}
                            <rect
                              width="44"
                              height="44"
                              x="5"
                              y="5"
                              rx="12"
                              fill={isActive ? t.color : "#E0DFDD"}
                              className="transition-colors duration-300"
                            />
                            {/* Avatar image */}
                            <image
                              href={t.image}
                              x="5" y="5" width="44" height="44"
                              clipPath={`url(#clip-${i})`}
                              style={{ opacity: 0.7 }}
                            />
                            {/* Progress stroke — rounded rect matching icon shape */}
                            {isActive && (
                              <rect
                                x="3"
                                y="3"
                                width={w}
                                height={h}
                                rx={rx}
                                fill="none"
                                stroke={t.color}
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeDasharray={perimeter}
                                strokeDashoffset={dashOffset}
                                style={{
                                  transition: "stroke-dashoffset 50ms linear",
                                }}
                              />
                            )}
                          </svg>
                          {/* Initial letter */}
                          <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-white">
                            {t.name.charAt(0)}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Text panel with fade */}
                  <div className="grid flex-auto min-h-[5rem]">
                    <div
                      className="col-start-1 row-start-1 py-1 transition-opacity duration-200"
                      style={{ opacity: fading ? 0 : 1 }}
                    >
                      <p className="w-fit type-sm font-medium text-black block">
                        {testimonials[active].name}
                      </p>
                      <p className="mt-3 type-sm text-warm-500 text-pretty">
                        &ldquo;{testimonials[active].quote}&rdquo;
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right — CTA */}
                <div className="flex flex-none flex-wrap gap-2 flex-row-reverse justify-end sm:flex-row sm:justify-start sm:absolute sm:-top-0.5 sm:right-0 md:static md:-my-0.5">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_1px_2px_0_rgba(0,0,0,0.04),0_2px_4px_0_rgba(0,0,0,0.04)] transition-transform duration-300 ease-out active:scale-[0.98] hover:bg-warm-50 w-fit h-12 px-5 type-base"
                  >
                    Get started
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
