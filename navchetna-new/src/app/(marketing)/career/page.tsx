import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Mail, MapPin, Users, Sparkles, Heart, Coffee, Rocket, GraduationCap } from "lucide-react";

const perks = [
  { icon: Rocket, title: "Build What Matters", desc: "Work on products like Osmium and Natraj that impact real lives across India." },
  { icon: GraduationCap, title: "Learn Every Day", desc: "We're a team of learners. Explore AI, AR, cloud, and cutting-edge tech hands-on." },
  { icon: Users, title: "Small Team, Big Impact", desc: "No bureaucracy. Your ideas get heard, built, and shipped — fast." },
  { icon: Heart, title: "Culture of Care", desc: "Flexible hours, mental health support, and a team that genuinely has your back." },
  { icon: Coffee, title: "Hostel-Room Energy", desc: "We started in a hostel room. That scrappy, late-night energy is still our DNA." },
  { icon: Sparkles, title: "Grow With Us", desc: "We're just getting started. Early team members shape the company's future." },
];

const categories = ["Engineering", "Design", "Business", "Marketing", "Operations"];

export default function CareerPage() {
  return (
    <>
      {/* ━━━ HERO — split screen ━━━ */}
      <section className="min-h-screen flex flex-col lg:flex-row">
        {/* Left — image */}
        <div className="relative w-full lg:w-1/2 h-[40vh] lg:h-auto flex-none">
          <Image
            src="/ref/eric-dane.jpeg"
            alt=""
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/10" />
          {/* Overlay text on mobile */}
          <div className="absolute bottom-6 left-6 right-6 lg:hidden">
            <p className="type-2xs font-bold uppercase tracking-wider text-white/60 bg-white/10 px-2.5 py-1 rounded-md w-fit mb-3 backdrop-blur-sm">
              Join Our Mission
            </p>
            <h1 className="type-5xl" style={{ color: "#ffffff" }}>
              Build the Future with Our Team
            </h1>
          </div>
        </div>

        {/* Right — content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-10 md:px-14 lg:px-16 py-12 lg:py-0 lg:min-h-screen">
          <div className="max-w-lg">
            <ScrollReveal>
              <p className="hidden lg:block type-sm font-semibold uppercase tracking-[0.15em] mb-5 px-4 py-1.5 rounded-full bg-warm-50 text-brand ring-[0.5px] ring-inset ring-black/[0.06] w-fit">
                Join Our Mission
              </p>
              <h1 className="hidden lg:block type-6xl text-black mb-6" style={{ fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)" }}>
                Build the Future with Our Team
              </h1>
              <p className="type-base text-warm-600 leading-relaxed">
                Join NAVCHETNA and be part of a team that&apos;s revolutionizing
                technology through conscious innovation. We&apos;re five friends
                who became a family of fifteen — and we&apos;re looking for
                people who share our fire.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 type-sm text-warm-500">
                  <MapPin className="size-4 text-brand" />
                  Jodhpur & Ahmedabad, India
                </div>
                <div className="flex items-center gap-2 type-sm text-warm-500">
                  <Users className="size-4 text-brand" />
                  15+ team members
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#positions"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-black text-white transition-transform duration-300 ease-out active:scale-[0.98] hover:bg-warm-900 h-12 px-6 type-base font-medium"
                >
                  View positions
                </a>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_1px_2px_0_rgba(0,0,0,0.04),0_2px_4px_0_rgba(0,0,0,0.04)] transition-transform duration-300 ease-out active:scale-[0.98] hover:bg-warm-50 h-12 px-6 type-base"
                >
                  Our story
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ━━━ PERKS ━━━ */}
      <section className="py-16 md:py-24 bg-warm-50">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="type-xs text-brand font-medium uppercase tracking-wider mb-3">Why Navchetna</p>
              <h2 className="type-5xl text-black text-balance max-w-lg mx-auto">
                More than just a workplace
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {perks.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 80}>
                <div className="flex h-full flex-col rounded-2xl border border-black/5 bg-white p-6 sm:p-7 transition-shadow hover:shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_2px_8px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center justify-center size-12 rounded-xl bg-warm-50 ring-[0.5px] ring-inset ring-black/[0.06] mb-5">
                    <p.icon className="size-6 text-brand" />
                  </div>
                  <h3 className="type-xl text-black mb-2">{p.title}</h3>
                  <p className="type-sm text-warm-500 leading-relaxed">{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ OPEN POSITIONS ━━━ */}
      <section id="positions" className="py-16 md:py-24 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <ScrollReveal>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
              <div>
                <p className="type-sm text-warm-500 font-medium mb-4">Open Positions</p>
                <h2 className="type-5xl text-black text-balance max-w-xl">
                  Current openings
                </h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((c) => (
                  <span
                    key={c}
                    className="inline-flex items-center rounded-full bg-warm-50 px-3 py-1.5 type-2xs text-warm-600 ring-[0.5px] ring-inset ring-black/[0.06] cursor-pointer hover:bg-warm-100 transition-colors"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Empty state */}
          <ScrollReveal delay={100}>
            <div className="rounded-2xl border border-black/5 bg-warm-50 p-10 md:p-16 text-center">
              <div className="flex items-center justify-center size-16 rounded-2xl bg-white ring-[0.5px] ring-inset ring-black/[0.06] mx-auto mb-6">
                <Users className="size-8 text-warm-400" />
              </div>
              <h3 className="type-4xl text-black mb-3">No Open Positions Currently</h3>
              <p className="type-sm text-warm-500 max-w-lg mx-auto mb-8">
                We&apos;re not actively hiring at the moment, but we&apos;re
                always interested in connecting with talented individuals who
                share our passion for innovation.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 type-sm font-medium text-white transition-colors hover:bg-warm-900"
              >
                <Mail className="size-4" />
                Send Your Resume
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
                <Image src="/ref/xuo8mc9lweg-dali.jpeg" alt="" fill sizes="100vw" className="object-cover opacity-30" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              <div className="pointer-events-none absolute inset-0 z-30 rounded-3xl ring-[0.5px] ring-inset ring-white/[0.075]" />

              <div className="relative z-10 px-6 sm:px-10 md:px-14 py-16 md:py-24 max-w-2xl mx-auto">
                <h2 className="type-5xl text-balance" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", color: "#ffffff" }}>
                  Don&apos;t see a suitable position?
                </h2>
                <p className="mt-6 type-base text-white/60 text-pretty">
                  We&apos;re always looking for talented individuals to join our
                  team. Send us your resume and let us know how you&apos;d like
                  to contribute to our mission.
                </p>
                <div className="mt-10 flex flex-wrap gap-3 justify-center">
                  <Link href="/contact" className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-white text-black transition-all duration-300 active:scale-[0.98] hover:bg-warm-100 h-12 px-7 type-base font-medium">
                    Get in touch
                  </Link>
                  <Link href="/about" className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-white/10 text-white transition-all duration-300 active:scale-[0.98] hover:bg-white/20 h-12 px-7 type-base font-medium ring-[0.5px] ring-inset ring-white/20">
                    Learn about us
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
