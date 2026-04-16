"use client";

import { useState } from "react";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const tabs = [
  { id: "students", label: "For Students", shortLabel: "Students" },
  { id: "institutes", label: "For Institutes", shortLabel: "Institutes" },
];

interface CardData {
  href: string;
  bg: string;
  title: string;
  logo?: string;
}

const sets: Record<string, [CardData, CardData, CardData]> = {
  students: [
    {
      href: "/#features",
      bg: "/ref/qrihua4053-nvida-bg.jpeg",
      title: "Osmium helped 10,000+ students crack JEE Mains with AI-predicted questions",
      logo: "SSIP",
    },
    {
      href: "/#features",
      bg: "/ref/7ga82q8pxzm-deutsche-telekom-bg.jpeg",
      title: "Osmium\u2019s AI tutor helped rural students achieve 40% higher scores across India",
    },
    {
      href: "/#features",
      bg: "/ref/gmhm1kxxzgd-Background7.jpeg",
      title: "Osmium Impact announces free access for 1M+ students across rural India",
    },
  ],
  institutes: [
    {
      href: "/#features",
      bg: "/ref/c26lff3ikup-ukraine.jpeg",
      title: "NexTech Labs integrated Osmium API to power their entire coaching platform",
    },
    {
      href: "/#features",
      bg: "/ref/green.jpeg",
      title: "Indian education summit: Osmium partners with government to digitize learning",
    },
    {
      href: "/#features",
      bg: "/ref/purpleblue.jpeg",
      title: "TantriX partnered with Osmium to deliver AI assessments at scale",
      logo: "T",
    },
  ],
};

const EASE = "cubic-bezier(0.32, 0.72, 0, 1)";
const DUR = "800ms";

function Card({ data, style, className }: { data: CardData; style?: React.CSSProperties; className?: string }) {
  return (
    <Link
      href={data.href}
      className={`absolute isolate flex flex-col justify-end overflow-hidden rounded-[1.25rem] hover:shadow-[0_1px_3px_rgba(0,0,0,0.1),0_1px_2px_-1px_rgba(0,0,0,0.1),0_0_0_4px_#FFFBF3] ${className ?? ""}`}
      style={{ transition: `all ${DUR} ${EASE}`, ...style }}
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-10 rounded-[1.25rem]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={data.bg} alt="" className="absolute inset-0 size-full object-cover" />
      </div>
      {data.logo && (
        <div className="flex-none mb-auto w-max pt-5 px-5">
          <span className="type-sm font-bold text-white bg-white/15 backdrop-blur-sm px-3 py-1.5 rounded-lg">{data.logo}</span>
        </div>
      )}
      <div className="absolute inset-0 overflow-hidden rounded-[1.25rem]">
        <div className="absolute inset-0 flex items-end px-5 pb-6">
          <div className="relative isolate type-base text-white text-pretty">
            <div
              className="absolute -z-10 inset-0 -inset-x-8 -inset-y-7"
              style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.35) 65%, transparent 100%)" }}
            />
            {data.title}
          </div>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[1.25rem]" style={{ boxShadow: "rgba(0,0,0,0.1) 0px 0px 0px 1px inset" }} />
    </Link>
  );
}

function Placeholder({ style, className }: { style?: React.CSSProperties; className?: string }) {
  return (
    <div
      className={`absolute bg-warm-50 rounded-[1.25rem] ${className ?? ""}`}
      style={{ transition: `all ${DUR} ${EASE}`, ...style }}
    />
  );
}

export function CaseStudies() {
  const [activeTab, setActiveTab] = useState(0);
  const isA = activeTab === 0;
  const cards = sets[tabs[activeTab].id];

  return (
    <section className="pb-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="relative border-l border-r border-black/[0.06]">
          <div className="px-2 md:px-4 pb-16">
            <ScrollReveal>
              <div className="mb-12 flex justify-center">
                <div className="inline-grid auto-cols-fr rounded-full whitespace-nowrap h-12 ring-[0.5px] ring-inset ring-black/[0.075]">
                  {tabs.map((tab, i) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(i)}
                      className={`isolate relative flex items-center justify-center cursor-pointer outline-none rounded-full h-12 px-5 type-base ${
                        activeTab === i ? "text-black" : "text-warm-500 hover:text-black/80"
                      }`}
                      style={{ gridColumnStart: i + 1, transition: `color 200ms` }}
                    >
                      <span className="relative">
                        <span className="hidden sm:block">{tab.label}</span>
                        <span className="sm:hidden">{tab.shortLabel}</span>
                      </span>
                      <div
                        className="absolute -z-10 rounded-full inset-0"
                        style={{
                          background: "#fff",
                          boxShadow: "rgba(0,0,0,0.4) 0px 0px 1px, rgba(0,0,0,0.04) 0px 4px 4px",
                          opacity: activeTab === i ? 1 : 0,
                          transform: activeTab === i ? "none" : "scale(0.95)",
                          transition: `opacity 300ms ${EASE}, transform 300ms ${EASE}`,
                        }}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Mosaic  desktop */}
              <div
                className="relative mx-auto hidden md:grid"
                style={{
                  maxWidth: "71.5rem",
                  gridTemplateColumns: "20.75rem 1fr 20.75rem",
                  gap: "1rem",
                  height: "40rem",
                }}
              >
                <div className="relative">
                  <Card
                    data={cards[0]}
                    style={{
                      left: 0, right: 0,
                      top: isA ? 0 : "calc(40% + 0.5rem)",
                      bottom: isA ? "calc(40% + 0.5rem)" : 0,
                      opacity: 1,
                    }}
                  />
                  <Placeholder
                    style={{
                      right: 0, width: "60%",
                      top: isA ? "auto" : 0,
                      bottom: isA ? 0 : "auto",
                      height: "calc(40% - 0.5rem)",
                      opacity: 1,
                    }}
                  />
                </div>
                <div className="relative">
                  <Card data={cards[1]} style={{ inset: 0, opacity: 1 }} />
                </div>
                <div className="relative">
                  <Card
                    data={cards[2]}
                    style={{
                      left: 0, right: 0,
                      top: isA ? "calc(40% + 0.5rem)" : 0,
                      bottom: isA ? 0 : "calc(40% + 0.5rem)",
                      opacity: 1,
                    }}
                  />
                  <Placeholder
                    style={{
                      left: 0, width: "60%",
                      top: isA ? 0 : "auto",
                      bottom: isA ? "auto" : 0,
                      height: "calc(40% - 0.5rem)",
                      opacity: 1,
                    }}
                  />
                </div>
              </div>

              {/* Mobile stack */}
              <div className="flex flex-col gap-4 md:hidden">
                {cards.map((c) => (
                  <Link
                    key={c.title}
                    href={c.href}
                    className="relative isolate flex flex-col justify-end overflow-hidden rounded-[1.25rem] aspect-[4/3]"
                  >
                    <div className="absolute inset-0 -z-10 rounded-[1.25rem]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={c.bg} alt="" className="absolute inset-0 size-full object-cover" />
                    </div>
                    {c.logo && (
                      <div className="flex-none mb-auto w-max pt-4 px-4">
                        <span className="type-sm font-bold text-white bg-white/15 backdrop-blur-sm px-3 py-1.5 rounded-lg">{c.logo}</span>
                      </div>
                    )}
                    <div className="px-4 pb-5">
                      <div className="relative isolate type-base text-white text-pretty">
                        <div className="absolute -z-10 inset-0 -inset-x-6 -inset-y-5" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5) 50%, transparent 100%)" }} />
                        {c.title}
                      </div>
                    </div>
                    <div className="absolute inset-0 pointer-events-none rounded-[1.25rem]" style={{ boxShadow: "rgba(0,0,0,0.1) 0px 0px 0px 1px inset" }} />
                  </Link>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
