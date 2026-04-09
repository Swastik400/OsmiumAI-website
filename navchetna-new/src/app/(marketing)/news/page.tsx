"use client";

import { useState } from "react";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Newspaper, Rocket, Building2, Calendar, Coffee, Award, Shield } from "lucide-react";

const categories = [
  { label: "All News", icon: Newspaper, href: "/news", active: true },
  { label: "Product Launches", icon: Rocket, href: "/news" },
  { label: "Company Updates", icon: Building2, href: "/news" },
];

const recentPosts = [
  "January 15, 2025",
  "January 12, 2025",
  "January 10, 2025",
];

const tags = ["AI", "Innovation", "Product", "Updates", "Team"];

const toc = [
  { id: "founding-story", label: "Founding Story", icon: Coffee },
  { id: "government-recognition", label: "Government Recognition", icon: Award },
  { id: "tech-independence", label: "Tech Independence", icon: Shield },
];

export default function NewsPage() {
  return (
    <div className="pt-24 min-h-screen">
      <div className="flex">
        {/* ── Left sidebar ── */}
        <aside className="hidden md:block w-64 shrink-0 sticky top-24 h-[calc(100vh-6rem)] overflow-y-auto border-r bg-warm-50/50 dark:bg-neutral-900/30 border-black/[0.06] dark:border-white/[0.06]">
          <div className="p-5 space-y-8">
            <div>
              <h3 className="type-2xs font-semibold uppercase tracking-wider text-warm-400 dark:text-neutral-500 mb-3">Categories</h3>
              <ul className="space-y-1">
                {categories.map((c) => (
                  <li key={c.label}>
                    <Link
                      href={c.href}
                      className={`w-full flex items-center gap-2 px-3 py-2 type-sm rounded-md transition-colors ${
                        c.active
                          ? "bg-brand/10 text-brand dark:bg-brand/20 dark:text-[#c4856e] font-medium"
                          : "text-warm-600 dark:text-neutral-400 hover:text-black dark:hover:text-white hover:bg-warm-50 dark:hover:bg-neutral-800/50"
                      }`}
                    >
                      <c.icon className="size-4 shrink-0" />
                      {c.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="type-2xs font-semibold uppercase tracking-wider text-warm-400 dark:text-neutral-500 mb-3">Recent Posts</h3>
              <ul className="space-y-1">
                {recentPosts.map((d) => (
                  <li key={d}>
                    <button className="w-full flex items-center gap-2 px-3 py-2 type-sm text-warm-600 dark:text-neutral-400 rounded-md hover:text-black dark:hover:text-white hover:bg-warm-50 dark:hover:bg-neutral-800/50 transition-colors text-left">
                      <Calendar className="size-4 shrink-0" />
                      <span className="whitespace-nowrap">{d}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="type-2xs font-semibold uppercase tracking-wider text-warm-400 dark:text-neutral-500 mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span key={t} className="px-2 py-1 bg-warm-50 dark:bg-neutral-800 text-warm-600 dark:text-neutral-400 rounded type-2xs hover:bg-warm-100 dark:hover:bg-neutral-700 cursor-pointer transition-colors ring-[0.5px] ring-inset ring-black/[0.06] dark:ring-white/[0.06]">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* ── Main content ── */}
        <main className="flex-1 min-w-0">
          <div className="relative flex flex-col xl:flex-row xl:gap-8 max-w-7xl mx-auto p-5 sm:p-8">
            <div className="max-w-4xl w-full">
              {/* Header */}
              <ScrollReveal>
                <div className="mb-10">
                  <h1 className="type-5xl mb-3" style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}>Latest News</h1>
                  <p className="type-base text-warm-500 dark:text-neutral-400">Stay updated with the latest from Navchetna</p>
                </div>
              </ScrollReveal>

              {/* ── Article 1: Founding Story (Featured) ── */}
              <ScrollReveal>
                <article id="founding-story" className="bg-white dark:bg-neutral-900/30 border rounded-2xl p-6 sm:p-8 mb-8 border-black/[0.06] dark:border-white/[0.06] ring-[0.5px] ring-inset ring-black/[0.04] dark:ring-white/[0.04]">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-6">
                    <div>
                      <h2 className="type-4xl mb-1">Innovation Served Hotter Than Coffee: The Navchetna Story</h2>
                      <p className="type-sm text-warm-400 dark:text-neutral-500">Published on January 15, 2025 · Company Feature</p>
                    </div>
                    <span className="type-2xs font-semibold uppercase tracking-wider text-brand dark:text-[#c4856e] bg-brand/10 dark:bg-[#c4856e]/15 px-2.5 py-1 rounded-md shrink-0">Featured</span>
                  </div>

                  <div className="mb-6">
                    <h3 className="type-xl mb-3">From Five Friends to Innovation Leaders</h3>
                    <p className="type-sm text-warm-600 dark:text-neutral-400 leading-relaxed mb-4">
                      Every great journey starts with a simple idea — and ours started on 6th September 2024. Five friends — Ayushmaan, Varun, Suman, Swastik, and Dhraval — were sitting together, talking about school, college, and life, and suddenly realized something: education could be so much better with the right tools and technology.
                    </p>
                    <p className="type-sm text-warm-600 dark:text-neutral-400 leading-relaxed">
                      From that conversation, late-night brainstorming sessions, and countless cups of coffee, Navchetna was born. Back then, we were just a bunch of dreamers with laptops and big ideas. No fancy offices, no investors, no roadmap — just a shared vision and a lot of determination.
                    </p>
                  </div>

                  <div className="border-l-4 border-brand dark:border-[#c4856e] pl-6 py-3 my-6 rounded-r-lg bg-brand/5 dark:bg-[#c4856e]/10">
                    <p className="type-2xs font-semibold uppercase tracking-wider text-brand dark:text-[#c4856e] mb-1">Company Milestone</p>
                    <p className="type-sm text-warm-600 dark:text-neutral-400">
                      Today, Navchetna is proud to be based in Jodhpur, Rajasthan, India, and has grown into a company that delivers both innovative products and comprehensive services, with official AWS India collaboration ensuring enterprise-grade reliability.
                    </p>
                  </div>

                  <div className="mb-6">
                    <h3 className="type-xl mb-3">Product Portfolio & Innovation</h3>
                    <p className="type-sm text-warm-600 dark:text-neutral-400 leading-relaxed mb-4">
                      Our flagship products — Osmium, Natraj, and Aegis Auth — are designed to make learning smarter and more accessible. Our services span everything from web, iOS, and Android development to AI/ML solutions, cybersecurity, and more.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                      <div className="bg-warm-50 dark:bg-neutral-800/30 rounded-xl p-4 ring-[0.5px] ring-inset ring-black/[0.06] dark:ring-white/[0.06]">
                        <h4 className="type-sm font-medium mb-2">Our Approach</h4>
                        <ul className="type-sm text-warm-600 dark:text-neutral-400 space-y-1">
                          <li>· Plan — Listen, understand, and map out solutions</li>
                          <li>· Strategy — Clear steps and milestones</li>
                          <li>· Development — Build, tweak, and perfect</li>
                          <li>· Deployment — Launch, monitor, and support</li>
                        </ul>
                      </div>
                      <div className="bg-warm-50 dark:bg-neutral-800/30 rounded-xl p-4 ring-[0.5px] ring-inset ring-black/[0.06] dark:ring-white/[0.06]">
                        <h4 className="type-sm font-medium mb-2">Growth Journey</h4>
                        <p className="type-sm text-warm-600 dark:text-neutral-400">
                          From five friends with a shared dream to a core team of six and a family of 15 passionate people, our growth has always been powered by curiosity, creativity, and a love for building things that matter.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-warm-300 dark:border-neutral-700 pl-6 py-4 my-6 rounded-r-lg bg-warm-50 dark:bg-neutral-800/30">
                    <p className="type-2xs font-semibold uppercase tracking-wider text-warm-500 dark:text-neutral-500 mb-1">Company Philosophy</p>
                    <p className="type-sm text-warm-600 dark:text-neutral-400 italic">
                      &ldquo;Navchetna isn&apos;t just a company. It&apos;s a story of friendship, late-night ideas, challenges, and small wins. It&apos;s about dreaming big, working hard, and believing that learning and innovation can truly change the world. And honestly? We&apos;re just getting started.&rdquo;
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-4 border-t border-black/[0.06] dark:border-white/[0.06]">
                    <div className="flex items-center gap-2 type-sm text-warm-400 dark:text-neutral-500 mb-2 sm:mb-0">
                      <span>By Navchetna Team</span>
                      <span className="hidden sm:inline">·</span>
                      <span>8 min read</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {["Innovation", "Startup", "EdTech"].map((t) => (
                        <span key={t} className="px-2 py-1 bg-warm-50 dark:bg-neutral-800 text-warm-600 dark:text-neutral-400 rounded type-2xs ring-[0.5px] ring-inset ring-black/[0.06] dark:ring-white/[0.06]">{t}</span>
                      ))}
                    </div>
                  </div>
                </article>
              </ScrollReveal>

              {/* ── Article 2: Government Recognition ── */}
              <ScrollReveal>
                <article id="government-recognition" className="bg-white dark:bg-neutral-900/30 border rounded-2xl p-6 sm:p-8 mb-8 border-black/[0.06] dark:border-white/[0.06] ring-[0.5px] ring-inset ring-black/[0.04] dark:ring-white/[0.04]">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="type-2xs font-semibold uppercase tracking-wider bg-green-50 dark:bg-green-500/10 text-green-700 dark:text-green-400 px-2.5 py-1 rounded-md">Government Recognition</span>
                    <span className="type-sm text-warm-400 dark:text-neutral-500">January 12, 2025</span>
                  </div>
                  <h2 className="type-4xl mb-4">Innovation Fueled by Pure Adrenaline: Navchetna Recognized by DPIIT</h2>
                  <p className="type-sm text-warm-600 dark:text-neutral-400 leading-relaxed mb-6">
                    We are thrilled to announce that Navchetna has been officially recognized by the Department for Promotion of Industry and Internal Trade (DPIIT), Government of India. This recognition validates our commitment to innovation and positions us among India&apos;s most promising startups.
                  </p>

                  <div className="border-l-4 border-green-500 pl-6 py-3 my-6 rounded-r-lg bg-green-50 dark:bg-green-500/10">
                    <p className="type-2xs font-semibold uppercase tracking-wider text-green-700 dark:text-green-400 mb-1">Official Recognition</p>
                    <p className="type-sm text-warm-600 dark:text-neutral-400">
                      The DPIIT recognition opens doors to various benefits including tax exemptions, easier compliance, faster patent examination, and access to government schemes. This milestone reflects our dedication to building innovative solutions that contribute to India&apos;s technological advancement.
                    </p>
                  </div>

                  <h3 className="type-xl mb-3">What This Means for Us</h3>
                  <p className="type-sm text-warm-600 dark:text-neutral-400 leading-relaxed mb-4">
                    This recognition is more than just a certificate. It&apos;s a testament to our team&apos;s hard work, our innovative approach, and our commitment to building world-class products. It validates our vision of creating technology that makes a real difference in education and beyond.
                  </p>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-4 border-t border-black/[0.06] dark:border-white/[0.06]">
                    <div className="flex items-center gap-2 type-sm text-warm-400 dark:text-neutral-500 mb-2 sm:mb-0">
                      <span>By Navchetna Team</span><span className="hidden sm:inline">·</span><span>4 min read</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {["DPIIT", "Recognition", "Milestone"].map((t) => (
                        <span key={t} className="px-2 py-1 bg-warm-50 dark:bg-neutral-800 text-warm-600 dark:text-neutral-400 rounded type-2xs ring-[0.5px] ring-inset ring-black/[0.06] dark:ring-white/[0.06]">{t}</span>
                      ))}
                    </div>
                  </div>
                </article>
              </ScrollReveal>

              {/* ── Article 3: Tech Independence ── */}
              <ScrollReveal>
                <article id="tech-independence" className="bg-white dark:bg-neutral-900/30 border rounded-2xl p-6 sm:p-8 mb-8 border-black/[0.06] dark:border-white/[0.06] ring-[0.5px] ring-inset ring-black/[0.04] dark:ring-white/[0.04]">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="type-2xs font-semibold uppercase tracking-wider bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 px-2.5 py-1 rounded-md">Tech Independence</span>
                    <span className="type-sm text-warm-400 dark:text-neutral-500">January 10, 2025</span>
                  </div>
                  <h2 className="type-4xl mb-4">Building the Future on Our Own Terms: Navchetna is Now a Fully Independent Powerhouse</h2>
                  <p className="type-sm text-warm-600 dark:text-neutral-400 leading-relaxed mb-6">
                    From Five Friends to Total Self-Reliance. Every revolution starts with a spark — and ours ignited on September 6, 2024. We realized that too many startups were just wrappers built on top of other people&apos;s tools. We didn&apos;t want to rent our success, so we decided to build everything ourselves.
                  </p>

                  <div className="border-l-4 border-amber-500 pl-6 py-3 my-6 rounded-r-lg bg-amber-50 dark:bg-amber-500/10">
                    <p className="type-2xs font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-1">100% Made in India with Our Own Tech Stack</p>
                    <p className="type-sm text-warm-600 dark:text-neutral-400">
                      Our transition from dreamers to industry leaders was powered by a bold decision to reject third-party dependencies. We built the entire infrastructure that supports our products — from security to billing to data extraction.
                    </p>
                  </div>

                  <h3 className="type-xl mb-3">Security by Aegis Auth</h3>
                  <p className="type-sm text-warm-600 dark:text-neutral-400 leading-relaxed mb-4">
                    We built our own fortress with Aegis Auth — featuring over 10 layers of security to ensure absolute data sovereignty. Released packages for the entire ecosystem:
                  </p>
                  <ul className="type-sm text-warm-600 dark:text-neutral-400 space-y-2 mb-6 pl-1">
                    {[
                      ["JavaScript:", "npm i aegis-auth-navchetna"],
                      ["Python:", "pip install aegis-auth-navchetna"],
                      ["Rust:", "cargo add aegis-auth-navchetna"],
                      ["Flutter:", "aegis_auth"],
                    ].map(([label, cmd]) => (
                      <li key={cmd} className="flex items-start gap-2">
                        <span className="text-warm-400 dark:text-neutral-600 mt-0.5">·</span>
                        <span>{label} <code className="bg-warm-50 dark:bg-neutral-800 px-2 py-0.5 rounded type-2xs ring-[0.5px] ring-inset ring-black/[0.06] dark:ring-white/[0.06]">{cmd}</code></span>
                      </li>
                    ))}
                    <li className="flex items-start gap-2">
                      <span className="text-warm-400 dark:text-neutral-600 mt-0.5">·</span>
                      <span>Native Mobile: Android and iOS SDKs coming soon</span>
                    </li>
                  </ul>

                  <h3 className="type-xl mb-3">Financial Integrity with NSL</h3>
                  <p className="type-sm text-warm-600 dark:text-neutral-400 leading-relaxed mb-4">
                    We engineered NSL (Navchetna Smart Ledger) — our proprietary ledger system built from scratch to maintain immutable financial records and ensure absolute transparency in every transaction.
                  </p>

                  <h3 className="type-xl mb-3">Data Clarity with LM Lens</h3>
                  <p className="type-sm text-warm-600 dark:text-neutral-400 leading-relaxed mb-6">
                    From raw data extraction to deep analysis, we utilize LM Lens — our proprietary extraction engine that feeds perfect data directly into our AI models.
                  </p>

                  <div className="border-l-4 border-amber-500 pl-6 py-3 my-6 rounded-r-lg bg-amber-50 dark:bg-amber-500/10">
                    <p className="type-2xs font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-1">Our Philosophy</p>
                    <p className="type-sm text-warm-600 dark:text-neutral-400">
                      Navchetna is not just a company. It is a declaration of independence. Zero dependencies and zero black boxes. With Aegis Auth protecting the door, NSL managing the ledger, and LM Lens processing the data, our technology is truly Made in India and built entirely in-house. We own our tech and we own our future.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-4 border-t border-black/[0.06] dark:border-white/[0.06]">
                    <div className="flex items-center gap-2 type-sm text-warm-400 dark:text-neutral-500 mb-2 sm:mb-0">
                      <span>By Navchetna Team</span><span className="hidden sm:inline">·</span><span>7 min read</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {["Self-Reliance", "Zero Dependencies", "Built In-House"].map((t) => (
                        <span key={t} className="px-2 py-1 bg-warm-50 dark:bg-neutral-800 text-warm-600 dark:text-neutral-400 rounded type-2xs ring-[0.5px] ring-inset ring-black/[0.06] dark:ring-white/[0.06]">{t}</span>
                      ))}
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            </div>

            {/* ── Right sidebar: On this page ── */}
            <div className="hidden xl:block">
              <div className="p-5 border rounded-2xl xl:w-64 xl:sticky xl:top-24 xl:self-start bg-warm-50/50 dark:bg-neutral-900/30 border-black/[0.06] dark:border-white/[0.06] ring-[0.5px] ring-inset ring-black/[0.04] dark:ring-white/[0.04]">
                <h2 className="type-sm font-medium mb-3">On this page</h2>
                <div className="grid grid-cols-1 gap-1">
                  {toc.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="flex items-center px-3 py-2 type-2xs rounded-md transition-colors text-warm-600 dark:text-neutral-400 hover:bg-warm-100 dark:hover:bg-neutral-800/50"
                    >
                      <item.icon className="size-4 mr-2 opacity-70" />
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── Inline footer ── */}
          <footer className="border-t mt-16 py-8 px-5 sm:px-8 border-black/[0.06] dark:border-white/[0.06]">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <h3 className="type-sm font-medium mb-4">Product</h3>
                  <ul className="space-y-2">
                    <li><a href="https://osmium.co.in" target="_blank" rel="noopener noreferrer" className="type-sm text-warm-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors">Osmium</a></li>
                    <li><a href="https://natraj.navchetna.tech" target="_blank" rel="noopener noreferrer" className="type-sm text-warm-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors">Natraj</a></li>
                    <li><a href="https://aegis.navchetna.tech" target="_blank" rel="noopener noreferrer" className="type-sm text-warm-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors">Aegis Auth</a></li>
                    <li><Link href="/products" className="type-sm text-warm-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors">Kriya</Link></li>
                  </ul>
                </div>
                <div>
                  <h3 className="type-sm font-medium mb-4">Resources</h3>
                  <ul className="space-y-2">
                    <li><Link href="/" className="type-sm text-warm-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors">Documentation</Link></li>
                    <li><Link href="/" className="type-sm text-warm-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors">Tutorials</Link></li>
                  </ul>
                </div>
                <div>
                  <h3 className="type-sm font-medium mb-4">APIs</h3>
                  <ul className="space-y-2">
                    <li><a href="https://osmium.co.in/channels/API/?version=Vidyanukriti" target="_blank" rel="noopener noreferrer" className="type-sm text-warm-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors">Vidyānukriti</a></li>
                    <li><a href="https://osmium.co.in/channels/API?version=Manobal" target="_blank" rel="noopener noreferrer" className="type-sm text-warm-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors">Manobal</a></li>
                    <li><a href="https://osmium.co.in/channels/API?version=VakyaSetu" target="_blank" rel="noopener noreferrer" className="type-sm text-warm-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors">VākyaSetu</a></li>
                    <li><a href="https://osmium.co.in/channels/API?version=Chaturyug" target="_blank" rel="noopener noreferrer" className="type-sm text-warm-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors">Chaturyug</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="type-sm font-medium mb-4">Connect</h3>
                  <ul className="space-y-2">
                    <li><a href="https://x.com/Navchetna_labs" target="_blank" rel="noopener noreferrer" className="type-sm text-warm-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors">X</a></li>
                    <li><a href="https://www.linkedin.com/company/navchetna" target="_blank" rel="noopener noreferrer" className="type-sm text-warm-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors">LinkedIn</a></li>
                    <li><a href="https://www.instagram.com/navchetna.tech/" target="_blank" rel="noopener noreferrer" className="type-sm text-warm-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors">Instagram</a></li>
                    <li><Link href="/contact" className="type-sm text-warm-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors">Contact</Link></li>
                  </ul>
                </div>
              </div>

              <div className="mt-12 border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-black/[0.06] dark:border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <span className="type-3xl font-medium">N</span>
                  <p className="type-sm text-warm-500 dark:text-neutral-500">© 2025 NINELLMS SOLUTIONS LLP. All rights reserved.</p>
                </div>
                <div className="flex gap-4">
                  <Link href="/privacy" className="type-2xs text-warm-500 dark:text-neutral-500 hover:text-black dark:hover:text-white transition-colors">Privacy Policy</Link>
                  <Link href="/terms" className="type-2xs text-warm-500 dark:text-neutral-500 hover:text-black dark:hover:text-white transition-colors">Terms of Service</Link>
                </div>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
