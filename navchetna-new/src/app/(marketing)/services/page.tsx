"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  Code,
  Brain,
  Cloud,
  Palette,
  Megaphone,
  Video,
  Search,
  Scale,
  Shield,
  Cpu,
  Building2,
  Gamepad2,
} from "lucide-react";

/* ── Data ── */

const serviceValues = [
  { label: "Software Development", icon: Code },
  { label: "AI & Machine Learning", icon: Brain },
  { label: "Cloud & Infrastructure", icon: Cloud },
  { label: "Design & Branding", icon: Palette },
  { label: "Marketing & Outreach", icon: Megaphone },
  { label: "Content & Media", icon: Video },
];

const stats = [
  { value: "12+", label: "Service categories" },
  { value: "50+", label: "Projects delivered" },
  { value: "4", label: "Step proven process" },
  { value: "24/7", label: "Ongoing support" },
];

const featuredServices = [
  {
    badge: "Core Service",
    title: "Project Management & Operations",
    desc: "Comprehensive project planning and execution using Agile, Scrum, and Kanban methodologies. Expert team and resource management with strategic operations optimization, risk analysis, and performance monitoring.",
    bullets: ["Agile & Scrum Methodologies", "Risk Analysis & Mitigation", "Team & Resource Management", "Performance Monitoring"],
  },
  {
    badge: "Full-Stack Solutions",
    title: "Software & Application Development",
    desc: "Mobile apps, web platforms, desktop software, games, and enterprise solutions. We build cross-platform applications from concept to deployment with scalable architecture and modern tech stacks.",
    bullets: ["Android, iOS & Web Apps", "Cross-Platform Solutions", "Desktop & Game Development", "ERP/CRM Systems"],
  },
  {
    badge: "Intelligence Systems",
    title: "Artificial Intelligence & Machine Learning",
    desc: "LLMs development, recommendation systems, AI automation, NLP, computer vision, and generative AI solutions. We build intelligent systems that learn, adapt, and deliver real business value.",
    bullets: ["Custom LLM Development", "Computer Vision & NLP", "Generative AI Solutions", "Intelligent Automation"],
  },
  {
    badge: "Scalable Systems",
    title: "Cloud, DevOps & Infrastructure",
    desc: "AWS, Azure, GCP cloud development, IoT integration, server maintenance, CI/CD pipelines, cloud migration, and data center solutions. We architect infrastructure that scales with your ambition.",
    bullets: ["AWS / Azure / GCP", "IoT Development", "DevOps Automation", "Hybrid Cloud Solutions"],
  },
];

const processSteps = [
  { date: "Step 1", title: "Plan — We discuss your vision, research market needs, and create a comprehensive project roadmap." },
  { date: "Step 2", title: "Strategy — Crafting a tailored solution strategy with clear milestones and deliverables." },
  { date: "Step 3", title: "Development — Building your solution with agile methodology and continuous feedback loops." },
  { date: "Step 4", title: "Deployment — Launching your solution with ongoing support and optimization." },
];

const moreServices = [
  { icon: Palette, title: "Design & Branding", tag: "Visual Identity", desc: "UI/UX design, logos, branding identity, motion graphics, and visual communications." },
  { icon: Megaphone, title: "Marketing & Outreach", tag: "Growth Strategy", desc: "Digital marketing, SEO/SEM, social media, email campaigns, and analytics." },
  { icon: Video, title: "Content & Media", tag: "Creative Production", desc: "Video production, content writing, editing, and podcast creation services." },
  { icon: Search, title: "Research & Consulting", tag: "Strategic Guidance", desc: "Business strategy, market research, feasibility studies, and technology consulting." },
  { icon: Scale, title: "Legal & Compliance", tag: "Risk Management", desc: "Contract drafting, IP protection, compliance management, and legal tech solutions." },
  { icon: Shield, title: "Cybersecurity", tag: "Security Solutions", desc: "Penetration testing, security audits, network protection, and SOC services." },
  { icon: Cpu, title: "Emerging Technologies", tag: "Future Innovation", desc: "Blockchain, AR/VR, robotics, embedded systems, and quantum computing." },
  { icon: Building2, title: "Enterprise Services", tag: "Business Solutions", desc: "IT outsourcing, SaaS development, ERP/CRM systems, and HR tech solutions." },
  { icon: Gamepad2, title: "Game Development", tag: "Interactive Entertainment", desc: "Mobile, PC, and web games with AR/VR experiences and interactive entertainment." },
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

export default function ServicesPage() {
  return (
    <>
      {/* ━━━ HERO ━━━ */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/ref/qrihua4053-nvida-bg.jpeg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 pb-16 md:pb-24 pt-40">
          <ScrollReveal>
            <p className="inline-block type-sm font-semibold uppercase tracking-[0.15em] mb-5 px-4 py-1.5 rounded-full bg-white/10 text-white/80 ring-[0.5px] ring-inset ring-white/20 backdrop-blur-sm">
              Comprehensive Solutions
            </p>
            <h1 className="type-6xl max-w-3xl" style={{ fontSize: "clamp(1.875rem, 5vw, 3.25rem)", color: "#ffffff" }}>
              Intelligent Services for Every Challenge
            </h1>
            <p className="mt-6 type-base text-white/70 max-w-xl text-pretty leading-relaxed">
              From AI development to digital transformation, we deliver
              cutting-edge solutions that drive growth and innovation across
              industries.
            </p>
          </ScrollReveal>
        </div>

        <button
          onClick={() => window.scrollBy({ top: window.innerHeight * 0.8, behavior: "smooth" })}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 group flex flex-col items-center gap-2 cursor-pointer"
          aria-label="Scroll down"
        >
          <span className="type-2xs uppercase tracking-widest text-white/50 group-hover:text-white/80 transition-colors">
            Scroll to explore
          </span>
          <div className="relative w-5 h-9 rounded-full border-2 border-white/30 group-hover:border-white/60 transition-colors">
            <div className="absolute left-1/2 top-1.5 w-1 h-2 -translate-x-1/2 rounded-full bg-white/70 animate-bounce" />
          </div>
        </button>
      </section>

      {/* ━━━ SERVICE CATEGORIES MARQUEE ━━━ */}
      <section className="py-10 border-b border-black/[0.06] overflow-hidden">
        <div className="flex whitespace-nowrap ticker-track">
          {[...serviceValues, ...serviceValues, ...serviceValues].map((v, i) => (
            <span key={i} className="inline-flex items-center gap-2.5 px-8 type-base text-warm-400 font-medium">
              <v.icon className="size-[18px] text-brand" />
              {v.label}
              <span className="text-warm-200 mx-4">·</span>
            </span>
          ))}
        </div>
      </section>

      {/* ━━━ MISSION ━━━ */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center">
              <p className="type-sm text-brand font-semibold uppercase tracking-wider mb-6">
                Our Philosophy
              </p>
              <h2
                className="type-5xl text-black text-balance leading-snug"
                style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)" }}
              >
                We believe in being a one-stop partner for tech and design
                needs — affordability, transparency, and long-term support from
                concept to launch and beyond.
              </h2>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ━━━ STATS ━━━ */}
      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 rounded-2xl bg-warm-50 px-8 py-12 md:py-14 ring-[0.5px] ring-inset ring-black/[0.06]">
            {stats.map((s) => (
              <StatCard key={s.label} value={s.value} label={s.label} />
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ FEATURED SERVICES — alternating blocks ━━━ */}
      <section className="py-8 md:py-12">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <ScrollReveal>
            <p className="type-sm text-warm-500 font-medium mb-4">Our Services</p>
            <h2 className="type-5xl text-black max-w-lg mb-12">
              Comprehensive solutions for every challenge
            </h2>
          </ScrollReveal>

          <div className="space-y-6">
            {featuredServices.map((s, i) => (
              <ScrollReveal key={s.title}>
                <div className="relative rounded-3xl overflow-hidden bg-warm-50 ring-[0.5px] ring-inset ring-black/[0.06]">
                  <div className={`grid lg:grid-cols-2 ${i % 2 !== 0 ? "" : ""}`}>
                    <div className={`p-8 md:p-12 lg:p-14 flex flex-col justify-center ${i % 2 !== 0 ? "lg:order-2" : ""}`}>
                      <span className="type-2xs font-bold uppercase tracking-wider text-brand bg-brand/10 px-2.5 py-1 rounded-md w-fit mb-5">
                        {s.badge}
                      </span>
                      <h3 className="type-4xl text-black mb-3">{s.title}</h3>
                      <p className="type-base text-warm-600 leading-relaxed text-pretty">
                        {s.desc}
                      </p>
                      <div className="mt-6 grid grid-cols-2 gap-3">
                        {s.bullets.map((b) => (
                          <div key={b} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-brand flex-none" />
                            <span className="type-sm text-warm-700">{b}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className={`relative h-64 lg:h-auto ${i % 2 !== 0 ? "lg:order-1" : ""}`}>
                      <Image
                        src={[
                          "/ref/gmhm1kxxzgd-Background7.jpeg",
                          "/ref/9dzqkp3d2u4-app-creative.jpeg",
                          "/ref/rlartawee0i-app-agents.jpeg",
                          "/ref/redchdw2op-bento-orange-blue-2@3x.jpeg",
                        ][i]}
                        alt={s.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ PROCESS — vertical timeline ━━━ */}
      <section className="py-16 md:py-24 bg-warm-50">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="type-sm text-warm-500 font-medium mb-4">Our Process</p>
              <h2 className="type-5xl text-black text-balance max-w-lg mx-auto">
                How We Deliver
              </h2>
              <p className="mt-4 type-base text-warm-500 max-w-xl mx-auto">
                From discovery to deployment, our proven methodology ensures
                successful project outcomes.
              </p>
            </div>
          </ScrollReveal>

          <div className="relative max-w-2xl mx-auto">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-black/10 md:-translate-x-px" />

            {processSteps.map((m, i) => {
              const isLeft = i % 2 === 0;
              return (
                <ScrollReveal key={m.date} delay={i * 80}>
                  <div className={`relative flex items-start mb-10 last:mb-0 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    <div className="absolute left-4 md:left-1/2 top-1.5 w-3 h-3 rounded-full bg-brand ring-4 ring-warm-50 -translate-x-1/2 z-10" />
                    <div className={`ml-12 md:ml-0 md:w-1/2 ${isLeft ? "md:pr-10 md:text-right" : "md:pl-10 md:text-left"}`}>
                      <p className="type-2xs font-bold uppercase tracking-wider text-brand">{m.date}</p>
                      <p className="type-sm text-black mt-1 text-pretty">{m.title}</p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ━━━ MORE SERVICES — card grid ━━━ */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <ScrollReveal>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
              <div>
                <p className="type-sm text-warm-500 font-medium mb-4">More Services</p>
                <h2 className="type-5xl text-black text-balance max-w-xl">
                  Everything else you need to grow
                </h2>
              </div>
              <p className="type-sm text-warm-400 max-w-sm text-pretty lg:text-right">
                Click on any service to explore our detailed offerings and
                capabilities.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {moreServices.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 60}>
                <div className="group relative isolate h-full overflow-hidden rounded-2xl bg-warm-50 ring-[0.5px] ring-inset ring-black/[0.06] transition-all duration-500 hover:ring-black/[0.12] hover:shadow-lg">
                  <div className="p-5 sm:p-6">
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/[0.08] bg-white">
                        <s.icon className="h-5 w-5 text-black" />
                      </span>
                      <span className="type-2xs font-bold uppercase tracking-wider text-brand shrink-0">
                        {s.tag}
                      </span>
                    </div>
                    <h3 className="type-xl text-black">{s.title}</h3>
                    <p className="type-sm text-warm-500 text-pretty mt-2">{s.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ CTA ━━━ */}
      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <ScrollReveal>
            <div className="relative isolate overflow-hidden rounded-3xl bg-black text-center">
              <div className="absolute inset-0">
                <Image
                  src="/ref/green.jpeg"
                  alt=""
                  fill
                  sizes="100vw"
                  className="object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="pointer-events-none absolute inset-0 z-30 rounded-3xl ring-[0.5px] ring-inset ring-white/[0.075]" />

              <div className="relative z-10 px-6 sm:px-10 md:px-14 py-16 md:py-24 max-w-2xl mx-auto">
                <h2
                  className="type-5xl text-balance"
                  style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", color: "#ffffff" }}
                >
                  Let&apos;s Build Something Amazing Together
                </h2>
                <p className="mt-6 type-base text-white/60 text-pretty">
                  Ready to transform your business with cutting-edge technology?
                  Let&apos;s discuss your project.
                </p>
                <div className="mt-10 flex flex-wrap gap-3 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-white text-black transition-all duration-300 active:scale-[0.98] hover:bg-warm-100 h-12 px-7 type-base font-medium"
                  >
                    Schedule Consultation
                  </Link>
                  <Link
                    href="/products"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-white/10 text-white transition-all duration-300 active:scale-[0.98] hover:bg-white/20 h-12 px-7 type-base font-medium ring-[0.5px] ring-inset ring-white/20"
                  >
                    View Our Products
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
