import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  Smartphone,
  Brain,
  Star,
  Megaphone,
  Palette,
  FileText,
  Video,
} from "lucide-react";

const pillars = [
  {
    title: "Product Development",
    desc: "Cross-platform design & development from start to finish. Android, iOS, Web, Desktop, and Game development.",
    icon: Smartphone,
    tags: ["Scalable", "Adaptive"],
    bg: "/ref/eleven-creative.png",
  },
  {
    title: "AI & Automation",
    desc: "AI-driven automation, recommendation engines, custom LLMs — combined with engaging UI/UX and creative branding.",
    icon: Brain,
    tags: ["Optimized", "Intelligent"],
    highlight: true,
    bg: "/ref/eleven-agents.png",
  },
  {
    title: "Strategy & Management",
    desc: "From project management and marketing to research, cloud, and IoT — we help you scale with confidence.",
    icon: Star,
    tags: ["Reliable", "Growth-focused"],
    bg: "/ref/eleven-api.png",
  },
];

const capabilities = [
  { icon: Megaphone, title: "Marketing & Outreach", desc: "Digital, print, & social reach strategies." },
  { icon: Palette, title: "Design & Branding", desc: "Impactful logos and visuals that build identity." },
  { icon: FileText, title: "Research & Documentation", desc: "Structured insights & technical writing." },
  { icon: Video, title: "Content Creation", desc: "Video, writing, and editing for growth." },
];

export function Platforms() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Intro heading — Osmium two-column style */}
        <ScrollReveal>
          <p className="block type-sm text-warm-500 font-medium mb-7">
            How We Transform Your Business
          </p>
          <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-x-12">
            <div className="contents lg:block lg:col-span-6">
              <h2 className="block text-black text-balance type-5xl max-w-lg lg:max-w-none">
                Our Proven & Intelligent Approach
              </h2>
            </div>
            <div className="flex flex-col mt-8 lg:mt-0 max-w-2xl lg:max-w-none lg:col-span-6">
              <p className="block type-base mt-auto text-balance lg:text-pretty text-black">
                From analysis to implementation — everything you need to
                automate, optimize, and scale your operations.
              </p>
              <div className="h-0 flex-auto" style={{ maxHeight: "5rem" }} />
            </div>
          </div>
        </ScrollReveal>

        {/* Three pillars */}
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {pillars.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 100}>
              <div
                className={`group relative isolate h-full overflow-hidden rounded-[1.25rem] ${
                  p.highlight
                    ? "ring-[0.5px] ring-inset ring-black/[0.075]"
                    : "ring-[0.5px] ring-inset ring-black/[0.075]"
                }`}
                style={{ backgroundColor: p.highlight ? "#f5f3f1" : "#fff" }}
              >
                <div className="relative flex h-full flex-col p-5 sm:p-7">
                  {/* Card bg */}
                  <div className="absolute inset-0 z-0 rounded-[1.25rem] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.bg} alt="" className="size-full object-cover opacity-10" />
                  </div>
                  <div className="flex items-center gap-2 mb-16">
                    <div className={`flex items-center justify-center size-10 rounded-xl border ${
                      p.highlight ? "border-black bg-black" : "border-black/[0.08] bg-white"
                    }`}>
                      <p.icon className={`h-5 w-5 ${p.highlight ? "text-white" : "text-black"}`} />
                    </div>
                  </div>
                  <h3 className="type-sm font-medium text-warm-500 mt-auto">{p.title}</h3>
                  <p className="mt-4 type-sm text-pretty text-black">{p.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="inline-flex items-center rounded-md border border-black/5 bg-white/80 px-2 py-1 type-2xs text-warm-700">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-0 z-30 rounded-[1.25rem] ring-[0.5px] ring-inset ring-black/[0.075]" />
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Capabilities row */}
        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((c, i) => (
            <ScrollReveal key={c.title} delay={i * 80}>
              <div className="rounded-xl border border-black/5 bg-white p-4 ring-[0.5px] ring-inset ring-black/[0.075]">
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-black/5 bg-warm-50">
                    <c.icon className="h-3.5 w-3.5 text-warm-700" />
                  </span>
                  <h4 className="type-sm font-medium">{c.title}</h4>
                </div>
                <p className="mt-2 type-sm text-warm-500">{c.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
