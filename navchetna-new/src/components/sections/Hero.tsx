"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const tabs = [
  {
    id: "products",
    label: "Products",
    shortLabel: "Products",
    heading: "AI-Powered Products",
    desc: "From Osmium for education to Natraj for AR anatomy — our products transform how people learn, work, and grow.",
    subtabs: [
      { label: "Osmium", text: "AI-powered education & career guidance platform. Smart mock tests, personalized learning, and career mapping for Indian students." },
      { label: "Natraj", text: "AR/AI-based anatomy learning. Point your phone at a body part and view realistic 3D models of bones and organs in place." },
      { label: "Aegis Auth", text: "Intelligent authentication and security platform with agentic AI capabilities for enterprise-grade protection." },
      { label: "Kriya", text: "AI-powered organizational management and workflow automation. Streamline operations with conscious intelligence." },
    ],
  },
  {
    id: "services",
    label: "Services",
    shortLabel: "Services",
    heading: "End-to-End Development",
    desc: "Cross-platform apps, AI automation, branding, and cloud — we build scalable solutions from concept to launch.",
    subtabs: [
      { label: "App Development", text: "Android, iOS & Web apps. Cross-platform & Desktop solutions. Game & OS development — all from start to finish." },
      { label: "AI & ML", text: "AI-driven automation, recommendation engines, and custom LLMs combined with engaging UI/UX and creative branding." },
      { label: "Design", text: "Impactful logos, UI/UX design, and visual branding that builds identity and connects with your audience." },
      { label: "Cloud & IoT", text: "Scalable cloud infrastructure, IoT solutions, and server management to power your digital transformation." },
    ],
  },
  {
    id: "enterprise",
    label: "Enterprise",
    shortLabel: "Enterprise",
    heading: "Enterprise Solutions",
    desc: "Custom AI workflows, organizational tools, and strategic consulting for businesses ready to scale with confidence.",
    subtabs: [
      { label: "Custom LLMs", text: "Purpose-built language models trained on your domain data for intelligent automation and decision support." },
      { label: "Automation", text: "End-to-end workflow automation that eliminates manual processes and scales with your business growth." },
      { label: "Analytics", text: "Real-time dashboards, performance tracking, and AI-powered insights to drive data-informed decisions." },
      { label: "Consulting", text: "Strategic technology consulting to help you identify opportunities, plan roadmaps, and execute with precision." },
    ],
  },
];

export function Hero() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeSubtab, setActiveSubtab] = useState(0);
  const [fadeKey, setFadeKey] = useState(0);
  const [subtabFadeKey, setSubtabFadeKey] = useState(0);
  const current = tabs[activeTab];

  const switchTab = (i: number) => {
    setActiveTab(i);
    setActiveSubtab(0);
    setFadeKey((k) => k + 1);
    setSubtabFadeKey((k) => k + 1);
  };

  const switchSubtab = (i: number) => {
    setActiveSubtab(i);
    setSubtabFadeKey((k) => k + 1);
  };

  return (
    <section className="pt-28 sm:pt-36 md:pt-44">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Two-column hero text */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-x-12">
          <div className="contents lg:block lg:col-span-6">
            <h1 className="block max-w-lg text-balance text-black type-6xl lg:max-w-none">
              Technology with Awareness,
              <span className="table"> Built for Everyone.</span>
            </h1>
            <div className="mt-8 order-last lg:order-none">
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-black text-white transition-transform duration-300 ease-out active:scale-[0.98] hover:bg-warm-900 h-12 px-5 type-base"
                >
                  Get started
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_1px_2px_0_rgba(0,0,0,0.04),0_2px_4px_0_rgba(0,0,0,0.04)] transition-transform duration-300 ease-out active:scale-[0.98] hover:bg-warm-50 h-12 px-5 type-base"
                >
                  Explore products
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-col lg:col-span-6 lg:mt-0 lg:max-w-none max-w-2xl">
            <p className="block mt-auto text-balance lg:text-pretty type-base text-black">
              From education to enterprise, we empower growth through
              technology, creativity, and conscious innovation. Powering
              Osmium, Natraj, Aegis Auth, and enterprise-grade AI solutions.
            </p>
            <div className="h-0 flex-auto" style={{ maxHeight: "5rem" }} />
          </div>
        </div>

        {/* Tabbed showcase card */}
        <ScrollReveal delay={200}>
          <div className="relative isolate mt-10 sm:mt-14">
            <div
              className="relative isolate rounded-3xl grid gap-x-6 grid-cols-1 lg:grid-cols-[1fr_auto] grid-rows-[auto_1fr_auto] px-4 sm:px-6 lg:pt-6 overflow-hidden"
              style={{ backgroundColor: "#f5f3f1", minHeight: "37rem" }}
            >
              {/* BG image */}
              <div className="absolute inset-0 z-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/ref/redchdw2op-bento-orange-blue-2@3x.jpeg"
                  alt=""
                  className="absolute inset-0 size-full object-cover opacity-20"
                />
              </div>
              <div className="pointer-events-none absolute inset-0 z-30 rounded-3xl ring-[0.5px] ring-inset ring-black/[0.075]" />

              {/* Product tabs */}
              <div className="z-50 col-span-full row-start-1 pt-4 sm:pt-6 lg:pt-0 lg:pb-6 w-full lg:w-fit">
                <div className="overflow-x-auto scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
                  <div className="flex w-fit rounded-full h-11 ring-[0.5px] ring-inset ring-black/[0.075] mx-auto">
                    {tabs.map((tab, i) => (
                      <button
                        key={tab.id}
                        onClick={() => switchTab(i)}
                        className="isolate relative flex items-center justify-center cursor-pointer outline-none rounded-full h-11 px-3 sm:px-5 flex-none"
                      >
                        <div className="relative flex items-center gap-1.5" style={{ color: activeTab === i ? "#000" : "#57534e" }}>
                          <span className="type-xs sm:type-base hidden sm:block">{tab.label}</span>
                          <span className="type-xs sm:hidden">{tab.shortLabel}</span>
                        </div>
                        <div
                          className="absolute -z-10 rounded-full inset-0"
                          style={{
                            background: activeTab === i ? "#fff" : "transparent",
                            boxShadow: activeTab === i ? "0 0 1px rgba(0,0,0,0.4), 0 4px 4px rgba(0,0,0,0.04)" : "none",
                            transition: "all 300ms cubic-bezier(0.32,0.72,0,1)",
                          }}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Main content */}
              <div className="col-span-full lg:col-span-1 row-start-2">
                <div className="h-full flex items-center">
                  <div className="w-full flex flex-col lg:flex-row items-stretch gap-0 my-4">
                    <div className="flex flex-col sm:flex-row flex-1 min-w-0">
                      {/* Heading + desc */}
                      <div key={`tab-${fadeKey}`} className="flex-1 px-2 sm:px-4 py-4 flex flex-col justify-center animate-fade-up">
                        <p className="type-2xl text-black">{current.heading}</p>
                        <p className="type-sm text-warm-500 mt-3 leading-relaxed text-pretty">{current.desc}</p>
                      </div>

                      {/* Divider */}
                      <div className="hidden sm:flex items-center">
                        <div className="w-px self-stretch my-8" style={{ background: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.1) 30%, rgba(0,0,0,0.1) 70%, transparent 100%)" }} />
                      </div>
                      <div className="sm:hidden mx-8" style={{ height: "1px", background: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.1) 30%, rgba(0,0,0,0.1) 70%, transparent 100%)" }} />

                      {/* Subtab text */}
                      <div key={`subtab-${subtabFadeKey}`} className="flex-1 px-2 sm:px-4 py-4 flex flex-col justify-center animate-fade-up">
                        <p className="type-sm font-medium text-black">{current.subtabs[activeSubtab].label}</p>
                        <p className="type-sm text-warm-500 mt-2 leading-relaxed text-pretty">{current.subtabs[activeSubtab].text}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom sub-tabs */}
              <div className="col-span-full row-start-3 pt-4 sm:pt-6 lg:pt-0 lg:pb-6 w-full lg:w-fit">
                <div className="overflow-x-auto scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
                  <div className="flex w-fit rounded-full h-10 mx-auto">
                    {current.subtabs.map((st, i) => (
                      <button
                        key={st.label}
                        onClick={() => switchSubtab(i)}
                        className="isolate relative flex items-center justify-center cursor-pointer outline-none rounded-full h-10 px-3 sm:px-4 flex-none"
                      >
                        <span className="relative type-xs sm:type-base whitespace-nowrap" style={{ color: activeSubtab === i ? "#000" : "#57534e" }}>{st.label}</span>
                        <div
                          className="absolute -z-10 rounded-full inset-0"
                          style={{
                            background: activeSubtab === i ? "#fff" : "transparent",
                            boxShadow: activeSubtab === i ? "0 0 1px rgba(0,0,0,0.4), 0 4px 4px rgba(0,0,0,0.04)" : "none",
                            transition: "all 300ms cubic-bezier(0.32,0.72,0,1)",
                          }}
                        />
                      </button>
                    ))}
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
