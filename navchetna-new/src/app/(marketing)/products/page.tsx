"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Brain, Zap, TrendingUp, ShieldCheck, Eye, FileText, Heart, Maximize, Users, ArrowRight } from "lucide-react";

const featured = {
  name: "Osmium",
  tag: "Deep Learning",
  desc: "Advanced deep learning platform that transforms complex data into intelligent insights. AI-powered education & career guidance built from thousands of past papers, trained to predict what's coming next.",
  tags: ["Neural Networks", "Computer Vision", "NLP", "Exam Prediction", "Career Mapping"],
  href: "https://osmium.co.in",
  external: true,
};

const products = [
  {
    name: "Natraj",
    tag: "AI + AR",
    icon: Zap,
    bg: "/ref/natrajCard.png",
    desc: "Immersive AI-powered augmented reality platform. Point your phone at a body part and view realistic 3D models of bones and organs in place.",
    tags: ["Augmented Reality", "Spatial AI", "Interactive"],
    href: "/news/product/natraj",
  },
  {
    name: "Aegis Auth",
    tag: "Agentic AI",
    icon: TrendingUp,
    bg: "/ref/aegisCard.png",
    desc: "Intelligent autonomous agents that understand, learn, and execute complex tasks with human-like reasoning.",
    tags: ["Autonomous Agents", "Reasoning", "Automation"],
    href: "/news/product/aegis",
  },
  {
    name: "Kriya",
    tag: "Organizational AI",
    icon: ShieldCheck,
    bg: "/ref/kriyaCard.png",
    desc: "Comprehensive organizational intelligence platform that streamlines workflows and drives productivity.",
    tags: ["Workflow AI", "Collaboration", "Analytics"],
    href: "/news/product/kriya",
  },
  {
    name: "LM Lens",
    tag: "Vision AI",
    icon: Eye,
    bg: "/ref/lmlens.svg",
    desc: "Intelligent data extraction that converts unstructured documents into clean, actionable data using advanced OCR.",
    tags: ["OCR", "Computer Vision", "Template Free"],
    href: "/news/product/lmlens",
  },
  {
    name: "NSL",
    tag: "Smart Billing",
    icon: FileText,
    bg: "/ref/nsl.png",
    desc: "Intelligent billing and ledger management system that automates the entire billing lifecycle.",
    tags: ["Auto Invoicing", "Smart Ledger", "Automation"],
    href: "/news/product/nsl",
  },
];

const whyChoose = [
  { icon: Heart, title: "Conscious AI", desc: "Designed with ethical considerations and human values at their core." },
  { icon: Maximize, title: "Scalable", desc: "Cloud-native architecture that grows with your needs and adapts to any scale." },
  { icon: Users, title: "Human-Centered", desc: "Intuitive interfaces that enhance human capabilities rather than replace them." },
];

export default function ProductsPage() {
  return (
    <>
      {/* ━━━ HEADER ━━━ */}
      <section className="pt-28 sm:pt-36 md:pt-44 pb-4">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto">
              <p className="type-sm text-brand font-semibold uppercase tracking-wider mb-4">
                AI-Powered Products
              </p>
              <h1 className="type-6xl text-black text-balance" style={{ fontSize: "clamp(1.875rem, 4vw, 2.75rem)" }}>
                Conscious Intelligence Meets Innovation
              </h1>
              <p className="mt-5 type-base text-warm-500 text-pretty">
                Six revolutionary AI products that redefine possibilities across
                education, creativity, and enterprise.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ━━━ FEATURED — Osmium hero card ━━━ */}
      <section className="py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <ScrollReveal>
            <div className="group relative isolate overflow-hidden rounded-3xl">
              {/* BG */}
              <div className="absolute inset-0">
                <Image src="/ref/redchdw2op-bento-orange-blue-2@3x.jpeg" alt="" fill sizes="100vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
              </div>
              <div className="pointer-events-none absolute inset-0 z-30 rounded-3xl ring-[0.5px] ring-inset ring-black/[0.075]" />

              <div className="relative z-10 flex flex-col justify-end p-6 sm:p-10 md:p-14 min-h-[28rem]">
                <span className="type-2xs font-bold uppercase tracking-wider text-white/60 bg-white/10 px-2.5 py-1 rounded-md w-fit mb-4 backdrop-blur-sm">
                  {featured.tag} · Flagship Product
                </span>
                <h2 className="type-5xl max-w-xl" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)", color: "#ffffff" }}>
                  {featured.name}
                </h2>
                <p className="mt-3 type-base text-white/70 max-w-lg text-pretty">
                  {featured.desc}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {featured.tags.map((t) => (
                    <span key={t} className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 type-2xs text-white/80 backdrop-blur-sm ring-[0.5px] ring-inset ring-white/20">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={featured.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-white text-black transition-all duration-300 active:scale-[0.98] hover:bg-warm-100 h-12 px-7 type-base font-medium"
                  >
                    Visit Osmium
                    <ArrowRight className="ml-2 size-4" />
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-white/10 text-white transition-all duration-300 active:scale-[0.98] hover:bg-white/20 h-12 px-7 type-base font-medium ring-[0.5px] ring-inset ring-white/20 backdrop-blur-sm"
                  >
                    Request Demo
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ━━━ PRODUCT GRID — 2-col then 3-col ━━━ */}
      <section className="pb-16 md:pb-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <ScrollReveal>
            <p className="type-sm text-warm-500 font-medium mb-8">More Products</p>
          </ScrollReveal>

          {/* Top 2 — large cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {products.slice(0, 2).map((p, i) => (
              <ScrollReveal key={p.name} delay={i * 100}>
                <Link href={p.href} className="group block">
                  <div className="relative overflow-hidden rounded-2xl ring-[0.5px] ring-inset ring-black/[0.075] transition-all duration-300 hover:shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                        style={{ backgroundImage: `url(${p.bg})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 shadow-sm">
                          <p.icon className="h-4 w-4 text-black" />
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className="rounded-md bg-black/40 backdrop-blur px-2.5 py-1 type-2xs text-white/90">{p.tag}</span>
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <h3 className="type-3xl" style={{ color: "#ffffff" }}>{p.name}</h3>
                      </div>
                    </div>
                    {/* Content */}
                    <div className="bg-white p-5 sm:p-6">
                      <p className="type-sm text-warm-500 text-pretty">{p.desc}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {p.tags.map((t) => (
                          <span key={t} className="inline-flex items-center rounded-full bg-warm-50 px-2.5 py-1 type-2xs text-warm-700 ring-[0.5px] ring-inset ring-black/[0.06]">{t}</span>
                        ))}
                      </div>
                      <span className="mt-4 inline-flex items-center gap-1.5 type-sm font-medium text-brand transition-colors group-hover:text-brand-dark">
                        Learn more <ArrowRight className="size-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          {/* Bottom 3 — compact cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
            {products.slice(2).map((p, i) => (
              <ScrollReveal key={p.name} delay={(i + 2) * 80}>
                <Link href={p.href} className="group block h-full">
                  <div className="relative flex h-full flex-col overflow-hidden rounded-2xl ring-[0.5px] ring-inset ring-black/[0.075] bg-white transition-all duration-300 hover:shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
                    {/* Compact image */}
                    <div className="relative h-40 overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                        style={{ backgroundImage: `url(${p.bg})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      <div className="absolute top-3 left-3">
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/90 shadow-sm">
                          <p.icon className="h-3.5 w-3.5 text-black" />
                        </span>
                      </div>
                      <div className="absolute top-3 right-3">
                        <span className="rounded-md bg-black/40 backdrop-blur px-2 py-0.5 type-2xs text-white/90">{p.tag}</span>
                      </div>
                    </div>
                    {/* Content */}
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="type-xl text-black">{p.name}</h3>
                      <p className="mt-2 type-sm text-warm-500 text-pretty flex-1">{p.desc}</p>
                      <span className="mt-4 inline-flex items-center gap-1.5 type-sm font-medium text-brand transition-colors group-hover:text-brand-dark">
                        Learn more <ArrowRight className="size-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ WHY CHOOSE — bordered section ━━━ */}
      <section className="py-4 md:py-6">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="relative border-l border-r border-black/[0.06]">
            <div className="relative">
              <div className="absolute left-0 top-0 z-20 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full" style={{ backgroundColor: "#FDFCFC" }}>
                <div className="h-1.5 w-1.5 rounded-full bg-black" />
              </div>
              <div className="absolute right-0 top-0 z-20 flex h-10 w-10 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full" style={{ backgroundColor: "#FDFCFC" }}>
                <div className="h-1.5 w-1.5 rounded-full bg-black" />
              </div>
              <div className="h-px w-full bg-black/[0.06]" />
            </div>

            <div className="px-4 sm:px-6 py-16 md:py-20">
              <ScrollReveal>
                <div className="text-center mb-12">
                  <p className="type-xs text-brand font-medium uppercase tracking-wider mb-3">Why Choose Our Products</p>
                  <h2 className="type-5xl text-black text-balance max-w-lg mx-auto">Built for the Future</h2>
                </div>
              </ScrollReveal>

              <div className="grid gap-5 md:grid-cols-3">
                {whyChoose.map((w, i) => (
                  <ScrollReveal key={w.title} delay={i * 100}>
                    <div className="flex h-full flex-col items-center text-center rounded-2xl border border-black/5 bg-white p-6 sm:p-8">
                      <div className="flex items-center justify-center size-14 rounded-2xl bg-warm-50 ring-[0.5px] ring-inset ring-black/[0.06] mb-5">
                        <w.icon className="size-7 text-brand" />
                      </div>
                      <h3 className="type-xl text-black mb-2">{w.title}</h3>
                      <p className="type-sm text-warm-500 leading-relaxed">{w.desc}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

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

      {/* ━━━ CTA ━━━ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <ScrollReveal>
            <div className="relative isolate overflow-hidden rounded-3xl bg-black text-center">
              <div className="absolute inset-0">
                <Image src="/ref/purpleblue.jpeg" alt="" fill sizes="100vw" className="object-cover opacity-35" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              <div className="pointer-events-none absolute inset-0 z-30 rounded-3xl ring-[0.5px] ring-inset ring-white/[0.075]" />

              <div className="relative z-10 px-6 sm:px-10 md:px-14 py-16 md:py-24 max-w-2xl mx-auto">
                <h2 className="type-5xl text-balance" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", color: "#ffffff" }}>
                  Ready to Experience Conscious Intelligence?
                </h2>
                <p className="mt-6 type-base text-white/60 text-pretty">
                  Discover how our AI-powered products can transform your
                  workflow and unlock new possibilities.
                </p>
                <div className="mt-10 flex flex-wrap gap-3 justify-center">
                  <Link href="/contact" className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-white text-black transition-all duration-300 active:scale-[0.98] hover:bg-warm-100 h-12 px-7 type-base font-medium">
                    Request Demo
                  </Link>
                  <Link href="/services" className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-white/10 text-white transition-all duration-300 active:scale-[0.98] hover:bg-white/20 h-12 px-7 type-base font-medium ring-[0.5px] ring-inset ring-white/20">
                    Explore Services
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
