"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  Crosshair,
  Globe,
  Brain,
  Flag,
  MessageCircle,
  Flame,
  Users,
  Box,
  Calendar,
  MapPin,
  Heart,
  TrendingUp,
} from "lucide-react";

/* ── Data ── */

const values = [
  { label: "Human-Centered", Icon: Crosshair },
  { label: "Accessible", Icon: Globe },
  { label: "AI-Powered", Icon: Brain },
  { label: "Made in India", Icon: Flag },
  { label: "Transparent", Icon: MessageCircle },
  { label: "Relentless", Icon: Flame },
];

const stats = [
  { value: "15+", label: "Team members" },
  { value: "4", label: "Core products" },
  { value: "2024", label: "Founded" },
  { value: "5", label: "Co-founders" },
];

const team = [
  { name: "Ayushmaan Soni", role: "Founder & CEO", avatar: "/ref/voice-bg-04.png", linkedin: "https://www.linkedin.com/in/422h52219hsuya/" },
  { name: "Varun Kumar", role: "Co-Founder", avatar: "/ref/voice-bg-01.png", linkedin: "https://www.linkedin.com/in/varun-yadav-navchetna/" },
  { name: "Swastik Khatua", role: "Co-Founder", avatar: "/ref/voice-bg-03.png", linkedin: "https://www.linkedin.com/in/swastik-khatua-84798631b/" },
  { name: "Suman Yadav", role: "Co-Founder & HOD", avatar: "/ref/voice-bg-05.png", linkedin: "https://www.linkedin.com/in/suman-yadav-bb5516322/" },
  { name: "Dhraval Narsinha", role: "Co-Founder", avatar: "/ref/voice-bg-07.png", linkedin: "https://www.linkedin.com/in/dhraval-narsinha-navchetna125/" },
  { name: "Aman Gupta", role: "Executive", avatar: "/ref/voice-bg-02.png", linkedin: "#" },
  { name: "Kuldeep Thakar", role: "Executive", avatar: "/ref/voice-bg-06.png", linkedin: "#" },
  { name: "Tanmay", role: "Team Member", avatar: "/ref/voice-bg-08.png", linkedin: "#" },
];

const philosophy = [
  { icon: Heart, title: "Human-Centered Design", desc: "We start with people, not technology. Every solution begins with understanding real problems and real needs." },
  { icon: TrendingUp, title: "Continuous Learning", desc: "We're always learning, always improving. Every project teaches us something new about making technology better." },
  { icon: Users, title: "Community First", desc: "We measure success by the positive impact we create in people's lives and communities, not just metrics." },
];

/* ── Animated counter ── */

function useCountUp(target: string, duration = 1800) {
  const [display, setDisplay] = useState("0");
  const ref = useRef<HTMLDivElement>(null);
  const hasRun = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true;
          const numeric = parseInt(target.replace(/\D/g, ""), 10);
          const suffix = target.replace(/[\d]/g, "");
          if (isNaN(numeric)) { setDisplay(target); return; }
          const start = performance.now();
          const step = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(`${Math.round(eased * numeric)}${suffix}`);
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { ref, display };
}

function StatCard({ value, label }: { value: string; label: string }) {
  const { ref, display } = useCountUp(value);
  return (
    <div ref={ref} className="text-center">
      <p className="type-6xl text-brand font-bold">{display}</p>
      <p className="type-sm text-warm-500 mt-2">{label}</p>
    </div>
  );
}

/* ── Page ── */

export default function AboutPage() {
  return (
    <>
      {/* ━━━ HERO — full-bleed with purpleblue bg ━━━ */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/ref/purpleblue.jpeg" alt="" fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 pb-16 md:pb-24 pt-40">
          <ScrollReveal>
            <p className="inline-block type-sm font-semibold uppercase tracking-[0.15em] mb-5 px-4 py-1.5 rounded-full bg-white/10 text-white/80 ring-[0.5px] ring-inset ring-white/20 backdrop-blur-sm">
              Our Story
            </p>
            <h1 className="type-6xl max-w-3xl" style={{ fontSize: "clamp(1.875rem, 5vw, 3.25rem)", color: "#ffffff" }}>
              Building the Future with Conscious Intelligence
            </h1>
            <p className="mt-6 type-base text-white/70 max-w-xl text-pretty leading-relaxed">
              From five friends with a shared dream to a story of friendship,
              late-night ideas, and the belief that learning and innovation can
              truly change the world.
            </p>
          </ScrollReveal>
        </div>

        <button
          onClick={() => window.scrollBy({ top: window.innerHeight * 0.8, behavior: "smooth" })}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 group flex flex-col items-center gap-2 cursor-pointer"
          aria-label="Scroll down"
        >
          <span className="type-2xs uppercase tracking-widest text-white/50 group-hover:text-white/80 transition-colors">Scroll to explore</span>
          <div className="relative w-5 h-9 rounded-full border-2 border-white/30 group-hover:border-white/60 transition-colors">
            <div className="absolute left-1/2 top-1.5 w-1 h-2 -translate-x-1/2 rounded-full bg-white/70 animate-bounce" />
          </div>
        </button>
      </section>

      {/* ━━━ VALUES MARQUEE ━━━ */}
      <section className="py-10 border-b border-black/[0.06] overflow-hidden">
        <div className="flex whitespace-nowrap ticker-track">
          {[...values, ...values, ...values].map((v, i) => (
            <span key={i} className="inline-flex items-center gap-2.5 px-8 type-base text-warm-400 font-medium">
              <v.Icon className="size-[18px] text-brand" />
              {v.label}
              <span className="text-warm-200 mx-4">·</span>
            </span>
          ))}
        </div>
      </section>

      {/* ━━━ MISSION — large centered ━━━ */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center">
              <p className="type-sm text-brand font-semibold uppercase tracking-wider mb-6">Our Mission</p>
              <h2 className="type-5xl text-black text-balance leading-snug" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)" }}>
                Technology should make life better, not more complicated. We
                believe in building solutions that people actually want to use —
                not just because they have to.
              </h2>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ━━━ STATS ━━━ */}
      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 rounded-2xl bg-warm-50 px-8 py-12 md:py-14 ring-[0.5px] ring-inset ring-black/[0.06]">
            {stats.map((s) => <StatCard key={s.label} value={s.value} label={s.label} />)}
          </div>
        </div>
      </section>

      {/* ━━━ ORIGIN STORY — split blocks with bg images ━━━ */}
      <section className="py-8 md:py-12">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <ScrollReveal>
            <p className="type-sm text-warm-500 font-medium mb-4">Our Journey</p>
            <h2 className="type-5xl text-black max-w-lg mb-12">From five friends to a family of fifteen</h2>
          </ScrollReveal>

          <div className="space-y-6">
            {/* Block 1 — The Beginning */}
            <ScrollReveal>
              <div className="relative rounded-3xl overflow-hidden bg-warm-50 ring-[0.5px] ring-inset ring-black/[0.06]">
                <div className="grid lg:grid-cols-2">
                  <div className="p-8 md:p-12 lg:p-14 flex flex-col justify-center">
                    <span className="type-2xs font-bold uppercase tracking-wider text-brand bg-brand/10 px-2.5 py-1 rounded-md w-fit mb-5">The Beginning</span>
                    <p className="type-base text-warm-600 leading-relaxed text-pretty">
                      Every great journey starts with a simple idea — and ours
                      started on 6th September 2024. Five friends — Ayushmaan,
                      Varun, Suman, Swastik, and Dhraval — were sitting together,
                      talking about school, college, and life, and suddenly realized
                      something: education could be so much better with the right
                      tools and technology.
                    </p>
                  </div>
                  <div className="relative h-64 lg:h-auto">
                    <Image src="/ref/navchetna-team.png" alt="The beginning" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Block 2 — The Birth */}
            <ScrollReveal>
              <div className="relative rounded-3xl overflow-hidden bg-warm-50 ring-[0.5px] ring-inset ring-black/[0.06]">
                <div className="grid lg:grid-cols-2">
                  <div className="relative h-64 lg:h-auto order-2 lg:order-1">
                    <Image src="/ref/xuo8mc9lweg-dali.jpeg" alt="Late night brainstorming" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                  </div>
                  <div className="p-8 md:p-12 lg:p-14 flex flex-col justify-center order-1 lg:order-2">
                    <span className="type-2xs font-bold uppercase tracking-wider text-brand bg-brand/10 px-2.5 py-1 rounded-md w-fit mb-5">The Birth</span>
                    <p className="type-base text-warm-600 leading-relaxed text-pretty">
                      From that conversation, late-night brainstorming sessions,
                      and countless cups of coffee, Navchetna was born. Today,
                      we&apos;re proud to be based in Jodhpur, Rajasthan and
                      Ahmedabad, Gujarat — creating solutions that make learning
                      smarter and more accessible for everyone.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Block 3 — The Growth */}
            <ScrollReveal>
              <div className="relative rounded-3xl overflow-hidden bg-warm-50 ring-[0.5px] ring-inset ring-black/[0.06]">
                <div className="grid lg:grid-cols-2">
                  <div className="p-8 md:p-12 lg:p-14 flex flex-col justify-center">
                    <span className="type-2xs font-bold uppercase tracking-wider text-brand bg-brand/10 px-2.5 py-1 rounded-md w-fit mb-5">The Growth</span>
                    <p className="type-base text-warm-600 leading-relaxed text-pretty">
                      Back then, we were just a bunch of dreamers with laptops and
                      big ideas. No fancy offices, no investors — just a shared
                      vision and a lot of determination. Today, we&apos;ve grown from
                      five friends to a core team of six and a family of 15
                      passionate people. Our growth has always been powered by
                      curiosity, creativity, and a love for building things that
                      matter.
                    </p>
                  </div>
                  <div className="relative h-64 lg:h-auto">
                    <Image src="/ref/yi3fbo0ee5-mozart.jpeg" alt="Growth" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Block 4 — The Vision (dark) */}
            <ScrollReveal>
              <div className="relative rounded-3xl overflow-hidden bg-black ring-[0.5px] ring-inset ring-white/[0.06]">
                <div className="absolute inset-0">
                  <Image src="/ref/7ga82q8pxzm-deutsche-telekom-bg.jpeg" alt="" fill sizes="100vw" className="object-cover opacity-30" />
                </div>
                <div className="relative z-10 p-8 md:p-12 lg:p-16 max-w-3xl mx-auto text-center">
                  <span className="type-2xs font-bold uppercase tracking-wider text-white/60 bg-white/10 px-2.5 py-1 rounded-md inline-block mb-5">The Vision</span>
                  <p className="type-base text-white/80 leading-relaxed text-pretty">
                    Navchetna isn&apos;t just a company. It&apos;s a story of
                    friendship, late-night ideas, challenges, and small wins.
                    It&apos;s about dreaming big, working hard, and believing that
                    learning and innovation can truly change the world. And
                    honestly? We&apos;re just getting started.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ━━━ INNOVATION PHILOSOPHY — 3 stacking cards ━━━ */}
      <section className="py-16 md:py-24 bg-warm-50">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="type-sm text-warm-500 font-medium mb-4">Our Philosophy</p>
              <h2 className="type-5xl text-black text-balance max-w-lg mx-auto">
                Innovation Served Hotter Than Coffee
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid gap-5 md:grid-cols-3">
            {philosophy.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 100}>
                <div className="flex h-full flex-col rounded-2xl border border-black/5 bg-white p-6 sm:p-8 transition-shadow hover:shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_2px_8px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center justify-center size-14 rounded-2xl bg-warm-50 ring-[0.5px] ring-inset ring-black/[0.06] mb-6">
                    <p.icon className="size-7 text-brand" />
                  </div>
                  <h3 className="type-xl text-black mb-2">{p.title}</h3>
                  <p className="type-sm text-warm-500 leading-relaxed text-pretty">{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ TEAM ━━━ */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <ScrollReveal>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
              <div>
                <p className="type-sm text-warm-500 font-medium mb-4">Our Team</p>
                <h2 className="type-5xl text-black text-balance max-w-xl">
                  The people behind Navchetna
                </h2>
              </div>
              <p className="type-sm text-warm-400 max-w-sm text-pretty lg:text-right">
                From five friends with a shared dream to a core team of six and
                a family of 15 passionate people.
              </p>
            </div>
          </ScrollReveal>

          {/* Top row: 4 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {team.slice(0, 4).map((m, i) => (
              <ScrollReveal key={m.name} delay={i * 80}>
                <TeamCard member={m} />
              </ScrollReveal>
            ))}
          </div>

          {/* Bottom row: 4 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
            {team.slice(4).map((m, i) => (
              <ScrollReveal key={m.name} delay={(i + 4) * 80}>
                <TeamCard member={m} />
              </ScrollReveal>
            ))}
          </div>

          {/* Join CTA */}
          <ScrollReveal delay={200}>
            <div className="mt-12 rounded-2xl bg-warm-50 ring-[0.5px] ring-inset ring-black/[0.06] p-8 text-center">
              <h3 className="type-xl text-black mb-2">Join Our Growing Family</h3>
              <p className="type-sm text-warm-500 max-w-xl mx-auto mb-6">
                We&apos;re always looking for passionate people who want to build
                technology that matters.
              </p>
              <Link
                href="/career"
                className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 type-sm font-medium text-white transition-colors hover:bg-warm-900"
              >
                <Users className="h-3.5 w-3.5" />
                View Open Positions
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ━━━ CTA ━━━ */}
      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <ScrollReveal>
            <div className="relative isolate overflow-hidden rounded-3xl bg-black text-center">
              <div className="absolute inset-0">
                <Image src="/ref/green.jpeg" alt="" fill sizes="100vw" className="object-cover opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="pointer-events-none absolute inset-0 z-30 rounded-3xl ring-[0.5px] ring-inset ring-white/[0.075]" />

              <div className="relative z-10 px-6 sm:px-10 md:px-14 py-16 md:py-24 max-w-2xl mx-auto">
                <h2 className="type-5xl text-balance" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", color: "#ffffff" }}>
                  Ready to Transform Your Vision into Reality?
                </h2>
                <p className="mt-6 type-base text-white/60 text-pretty">
                  Let&apos;s discuss how NAVCHETNA can help bring your ideas to
                  life with conscious intelligence.
                </p>
                <div className="mt-10 flex flex-wrap gap-3 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-white text-black transition-all duration-300 active:scale-[0.98] hover:bg-warm-100 h-12 px-7 type-base font-medium"
                  >
                    Start a Conversation
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-white/10 text-white transition-all duration-300 active:scale-[0.98] hover:bg-white/20 h-12 px-7 type-base font-medium ring-[0.5px] ring-inset ring-white/20"
                  >
                    Explore Our Services
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

/* ── Team card ── */

function TeamCard({ member }: { member: (typeof team)[number] }) {
  return (
    <div className="group relative isolate h-full overflow-hidden rounded-2xl bg-warm-50 ring-[0.5px] ring-inset ring-black/[0.06] transition-all duration-500 hover:ring-black/[0.12] hover:shadow-lg">
      <div className="relative h-48 sm:h-52 overflow-hidden bg-warm-100">
        <Image
          src={member.avatar}
          alt={member.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <div className="p-4 sm:p-5">
        <div className="flex items-center justify-between gap-2 mb-1">
          <h3 className="type-sm font-medium text-black">{member.name}</h3>
          <span className="type-2xs font-bold uppercase tracking-wider text-brand shrink-0">{member.role}</span>
        </div>
        <div className="mt-3 flex justify-end">
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center size-8 rounded-lg bg-black/[0.04] text-warm-400 transition-colors hover:bg-brand/10 hover:text-brand"
            aria-label={`${member.name} LinkedIn`}
          >
                        <svg viewBox="0 0 16 16" fill="currentColor" className="size-4">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169H6.29c.032.678 0 7.225 0 7.225h2.36z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
