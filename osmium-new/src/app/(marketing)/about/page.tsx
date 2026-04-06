"use client";

import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const team = [
  {
    name: "Ayushmaan Soni",
    role: "FOUNDER",
    desc: "Tech entrepreneur driving AI innovation with projects like Osmium. From childhood experiments with electronics to leading AI-driven solutions.",
    avatar: "/ref/voice-bg-04.png",
    color: "#E8D5C4",
  },
  {
    name: "Varun Yadav",
    role: "CO-FOUNDER",
    desc: "Skilled backend developer passionate about building scalable systems. Lead backend developer for Osmium\u2019s AI-powered infrastructure.",
    avatar: "/ref/voice-bg-01.png",
    color: "#D5E0E8",
  },
  {
    name: "Swastik Khatua",
    role: "CO-FOUNDER",
    desc: "Frontend developer passionate about UI/UX and AI-driven EdTech solutions. Instrumental in crafting seamless user experiences with modern web technologies.",
    avatar: "/ref/voice-bg-03.png",
    color: "#E0D5E8",
  },
  {
    name: "Suman Yadav",
    role: "CO-FOUNDER",
    desc: "Head of Design with passion for technology and creativity. The mind behind Osmium\u2019s UI/UX, ensuring seamless and engaging user experiences.",
    avatar: "/ref/voice-bg-05.png",
    color: "#D5E8D8",
  },
  {
    name: "Dhraval Narsinha",
    role: "CO-FOUNDER",
    desc: "Frontend developer passionate about building seamless user experiences. Instrumental in shaping Osmium\u2019s interface with focus on UI/UX and frontend technologies.",
    avatar: "/ref/voice-bg-07.png",
    color: "#E8E0D5",
  },
];

const milestones = [
  { date: "Jan 2024", title: "The idea sparks in a hostel room after surviving JEE" },
  { date: "Feb 2024", title: "Smart India Hackathon \u2014 first prototype built in 7 days" },
  { date: "Apr 2024", title: "Mock test engine trained on 10,000+ past papers" },
  { date: "Jul 2024", title: "AI Tutor v1 launched with step-by-step explanations" },
  { date: "Oct 2024", title: "First 50 institutes onboarded across Gujarat & Maharashtra" },
  { date: "Jan 2025", title: "Career Mapping feature goes live" },
  { date: "Apr 2025", title: "Osmium v2 \u2014 complete platform rebuild" },
  { date: "2025+", title: "Becoming the Operating System of India\u2019s Education" },
];

export default function AboutPage() {
  return (
    <>
      {/* ━━━ HERO ━━━ */}
      <section className="pt-28 sm:pt-36 md:pt-44 pb-16 md:pb-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <ScrollReveal>
            <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-x-12">
              <div className="contents lg:block lg:col-span-6">
                <p className="block type-sm text-warm-500 font-medium mb-7">About Osmium</p>
                <h1 className="block max-w-lg text-balance text-black type-6xl lg:max-w-none">
                  Learning should feel like having a mentor who truly
                  <span className="table"> understands you.</span>
                </h1>
              </div>
              <div className="mt-8 flex flex-col lg:col-span-6 lg:mt-0 lg:max-w-none max-w-2xl">
                <p className="block mt-auto text-balance lg:text-pretty type-base text-black">
                  At Osmium, we believe learning should feel like having a mentor
                  who truly understands you &mdash; the way you think, the way you
                  learn, your strengths, your struggles, and the dreams you quietly
                  hold onto.
                </p>
                <div className="h-0 flex-auto" style={{ maxHeight: "5rem" }} />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ━━━ ABOUT DESCRIPTION — full-width image card ━━━ */}
      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <ScrollReveal>
            <div className="relative isolate overflow-hidden rounded-3xl min-h-[24rem] md:min-h-[32rem] flex items-end">
              {/* Background image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/ref/gmhm1kxxzgd-Background7.jpeg"
                alt=""
                className="absolute inset-0 size-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.05) 100%)",
                }}
              />
              <div className="relative z-10 p-6 sm:p-10 md:p-14 max-w-3xl">
                <p className="type-base text-white/90 text-pretty leading-relaxed">
                  Osmium isn&apos;t just another AI tool &mdash; it&apos;s a companion
                  created for you, by you. It teaches you, guides you, keeps an eye
                  on your mental well-being when things get overwhelming, and even
                  predicts your mock tests with up to 50% accuracy so you can
                  prepare confidently, not fearfully.
                </p>
                <p className="mt-6 type-base text-white/90 text-pretty leading-relaxed">
                  Whether you&apos;re a student trying to find direction, a university
                  seeking better outcomes, an institute aiming for excellence, or a
                  corporate team preparing for the future &mdash; Osmium adapts to you,
                  helping you learn smarter, grow faster, and feel supported at
                  every step.
                </p>
              </div>
              <div className="pointer-events-none absolute inset-0 z-30 rounded-3xl ring-[0.5px] ring-inset ring-black/[0.075]" />
            </div>
          </ScrollReveal>

          {/* Mission statement */}
          <ScrollReveal>
            <div className="mt-16 md:mt-20 max-w-3xl mx-auto text-center">
              <p className="type-sm text-brand font-medium uppercase tracking-wider mb-4">Our Mission</p>
              <h2 className="type-4xl text-black text-balance">
                To become the operating system of India&apos;s education system and
                ensure that no learner, no matter where they come from, ever feels
                lost or left behind.
              </h2>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ━━━ OUR STORY ━━━ */}
      <section id="our-story" className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="relative border-l border-r border-black/[0.06]">
            {/* Top dots */}
            <div className="relative">
              <div className="absolute left-0 top-0 z-20 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-cream">
                <div className="h-2 w-2 rounded-full bg-black" />
              </div>
              <div className="absolute right-0 top-0 z-20 flex h-10 w-10 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full bg-cream">
                <div className="h-2 w-2 rounded-full bg-black" />
              </div>
              <div className="h-px w-full bg-black/[0.06]" />
            </div>

            <div className="px-4 sm:px-6 py-16 md:py-20">
              <ScrollReveal>
                <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-x-12">
                  <div className="lg:col-span-5">
                    <p className="type-sm text-warm-500 font-medium mb-4">Our Story</p>
                    <h2 className="type-5xl text-black text-balance max-w-lg lg:max-w-none">
                      From hostel rooms to building India&apos;s future
                    </h2>
                  </div>
                  <div className="mt-8 lg:mt-0 lg:col-span-7">
                    <div className="space-y-6 type-base text-warm-600 text-pretty leading-relaxed">
                      <p>
                        We met in college, right after surviving the intensity of our
                        JEE journey. In hostel rooms filled with late-night
                        conversations, we often shared where we stumbled, what we
                        wished we had, and how just a bit more guidance could have
                        made all the difference. Those raw, honest talks sparked
                        something &mdash; a feeling that maybe we could build what we
                        once needed so badly.
                      </p>
                      <p>
                        When the Smart India Hackathon arrived, we decided to take a
                        chance on that idea. It was our first time working together,
                        and honestly, some of us didn&apos;t even own laptops. During
                        SIH, a teacher joked, &ldquo;Kaam ek karta hai aur laptop
                        teen pakadte hain.&rdquo; Everyone laughed, except us.
                        Somewhere inside, that moment pushed us harder.
                      </p>
                      <p>
                        Hostel life became our startup culture before we even knew the
                        word. Nights meant tea, coffee, loud chants of Hanuman Chalisa
                        and Sundar Kand for strength, and long hours of building
                        things we weren&apos;t even sure would work. Mornings meant
                        grabbing breakfast together and crashing into bed. Within 7
                        chaotic, beautiful days, our first prototype was alive.
                      </p>
                      <p>
                        From those hostel nights to today, one thing has stayed the
                        same &mdash; the fire to make learning in India smarter,
                        simpler, and deeply personal. We&apos;re still building, still
                        dreaming, and still believing that one day, Osmium will be the
                        Operating System of India&apos;s Education Ecosystem &mdash;
                        ensuring every student has the support we once wished we had.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ STORY IMAGE MOSAIC ━━━ */}
      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="relative aspect-[4/3] rounded-[1.25rem] overflow-hidden col-span-2 md:col-span-1 md:row-span-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/ref/green.jpeg" alt="" className="absolute inset-0 size-full object-cover" />
                <div className="pointer-events-none absolute inset-0 rounded-[1.25rem] ring-[0.5px] ring-inset ring-black/[0.075]" />
              </div>
              <div className="relative aspect-[4/3] rounded-[1.25rem] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/ref/purpleblue.jpeg" alt="" className="absolute inset-0 size-full object-cover" />
                <div className="pointer-events-none absolute inset-0 rounded-[1.25rem] ring-[0.5px] ring-inset ring-black/[0.075]" />
              </div>
              <div className="relative aspect-[4/3] rounded-[1.25rem] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/ref/9dzqkp3d2u4-app-creative.jpeg" alt="" className="absolute inset-0 size-full object-cover" />
                <div className="pointer-events-none absolute inset-0 rounded-[1.25rem] ring-[0.5px] ring-inset ring-black/[0.075]" />
              </div>
              <div className="relative aspect-[4/3] rounded-[1.25rem] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/ref/rlartawee0i-app-agents.jpeg" alt="" className="absolute inset-0 size-full object-cover" />
                <div className="pointer-events-none absolute inset-0 rounded-[1.25rem] ring-[0.5px] ring-inset ring-black/[0.075]" />
              </div>
              <div className="relative aspect-[4/3] rounded-[1.25rem] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/ref/c26lff3ikup-ukraine.jpeg" alt="" className="absolute inset-0 size-full object-cover" />
                <div className="pointer-events-none absolute inset-0 rounded-[1.25rem] ring-[0.5px] ring-inset ring-black/[0.075]" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ━━━ JOURNEY TIMELINE ━━━ */}
      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <ScrollReveal>
            <div className="relative isolate overflow-hidden rounded-3xl bg-warm-50 px-6 sm:px-10 md:px-14 py-14 md:py-20">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/ref/timeline@3x.png"
                alt=""
                className="absolute inset-0 size-full object-cover opacity-[0.04] pointer-events-none"
              />
              <div className="pointer-events-none absolute inset-0 z-30 rounded-3xl ring-[0.5px] ring-inset ring-black/[0.075]" />

              <div className="relative z-10">
                <p className="type-sm text-warm-500 font-medium mb-4">Our Journey</p>
                <h2 className="type-4xl text-black text-balance max-w-lg mb-12">
                  From a hostel idea to India&apos;s education OS
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {milestones.map((m, i) => (
                    <ScrollReveal key={m.date} delay={i * 80}>
                      <div className="relative pl-5 border-l-2 border-black/10">
                        <div className="absolute left-0 top-1 w-2.5 h-2.5 rounded-full bg-brand -translate-x-[calc(50%+1px)]" />
                        <p className="type-xs text-warm-400 font-medium">{m.date}</p>
                        <p className="mt-2 type-sm text-black text-pretty">{m.title}</p>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ━━━ TEAM ━━━ */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="type-sm text-warm-500 font-medium mb-4">Our Team</p>
              <h2 className="type-5xl text-black text-balance max-w-2xl mx-auto">
                The people building the future of education in India
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {team.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 80}>
                <div className="group relative isolate h-full overflow-hidden rounded-[1.25rem] bg-cream">
                  <div className="relative flex h-full flex-col">
                    {/* Avatar header */}
                    <div
                      className="relative h-48 sm:h-56 flex items-center justify-center overflow-hidden"
                      style={{ backgroundColor: member.color }}
                    >
                      <div className="relative size-24 sm:size-28 rounded-full overflow-hidden ring-4 ring-white/30 shadow-lg">
                        <Image
                          src={member.avatar}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      {/* Decorative gradient overlay */}
                      <div
                        className="absolute inset-0 opacity-30"
                        style={{
                          background: `radial-gradient(circle at 50% 120%, ${member.color} 0%, transparent 70%)`,
                        }}
                      />
                    </div>

                    {/* Info */}
                    <div className="flex flex-col flex-1 px-5 pb-6 pt-5 sm:px-7 sm:pb-8">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="type-xl text-black">{member.name}</h3>
                      </div>
                      <span className="inline-block w-fit type-2xs font-bold uppercase tracking-wider text-brand bg-brand/10 px-2.5 py-1 rounded-md mb-4">
                        {member.role}
                      </span>
                      <p className="type-sm text-warm-500 text-pretty">{member.desc}</p>
                    </div>

                    <div className="pointer-events-none absolute inset-0 z-30 rounded-[1.25rem] ring-[0.5px] ring-inset ring-black/[0.075]" />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ VALUES ━━━ */}
      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="relative border-l border-r border-black/[0.06]">
            <div className="relative">
              <div className="absolute left-0 top-0 z-20 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-cream">
                <div className="h-2 w-2 rounded-full bg-black" />
              </div>
              <div className="absolute right-0 top-0 z-20 flex h-10 w-10 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full bg-cream">
                <div className="h-2 w-2 rounded-full bg-black" />
              </div>
              <div className="h-px w-full bg-black/[0.06]" />
            </div>

            <div className="px-2 md:px-4 py-16 md:py-20">
              <ScrollReveal>
                <div className="overflow-hidden">
                  <ul className="flex gap-4 overflow-x-auto scrollbar-none snap-x snap-mandatory lg:grid lg:grid-cols-3 lg:overflow-visible py-4 -my-4 px-1">
                    {[
                      {
                        icon: "/ref/safety-moderation.svg",
                        title: "Student First",
                        desc: "Every feature, every decision, every line of code is built with the student at the center. Their success is our success.",
                      },
                      {
                        icon: "/ref/safety-accountability.svg",
                        title: "Accessible to All",
                        desc: "We\u2019re building for every student in India \u2014 urban or rural, privileged or underserved. Quality education should never be a luxury.",
                      },
                      {
                        icon: "/ref/safety-provenance.svg",
                        title: "Transparent AI",
                        desc: "Students and institutes always know when content is AI-generated. Full visibility into how predictions and recommendations are made.",
                      },
                    ].map((v) => (
                      <li key={v.title} className="flex-none w-[min(20rem,calc(100%-2rem))] sm:w-[calc(50%-0.5rem)] lg:w-auto snap-start">
                        <div className="group relative isolate h-full overflow-hidden rounded-[1.25rem] bg-cream">
                          <div className="relative flex h-full flex-col px-5 pb-6 pt-8 sm:px-7 sm:pb-8">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              alt={v.title}
                              loading="lazy"
                              width={203}
                              height={202}
                              decoding="async"
                              className="object-cover mx-auto mt-4 mb-12 sm:mt-8 sm:mb-14 xl:mt-12 xl:mb-18"
                              style={{ color: "transparent" }}
                              src={v.icon}
                            />
                            <h3 className="mt-auto type-xl text-black">{v.title}</h3>
                            <p className="mt-4 type-sm text-pretty text-warm-500">{v.desc}</p>
                            <div className="pointer-events-none absolute inset-0 z-30 rounded-[1.25rem] ring-[0.5px] ring-inset ring-black/[0.075]" />
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ CTA ━━━ */}
      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <ScrollReveal>
            <div className="relative isolate overflow-hidden rounded-3xl bg-black px-6 sm:px-10 md:px-14 py-14 md:py-20 text-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/ref/qrihua4053-nvida-bg.jpeg"
                alt=""
                className="absolute inset-0 size-full object-cover opacity-20 pointer-events-none"
              />
              <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="type-5xl text-balance" style={{ color: "#ffffff" }}>
                  Ready to transform how India learns?
                </h2>
                <p className="mt-6 type-base text-white/70 text-pretty">
                  Join thousands of students and institutes already using Osmium
                  to learn smarter, grow faster, and achieve more.
                </p>
                <div className="mt-10 flex flex-wrap gap-3 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-white text-black transition-transform duration-300 ease-out active:scale-[0.98] hover:bg-warm-100 h-12 px-6 type-base font-medium"
                  >
                    Get started
                  </Link>
                  <a
                    href="https://navchetna.tech/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-white/10 text-white transition-transform duration-300 ease-out active:scale-[0.98] hover:bg-white/20 h-12 px-6 type-base font-medium ring-[0.5px] ring-inset ring-white/20"
                  >
                    Visit NAVCHETNA
                  </a>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 z-30 rounded-3xl ring-[0.5px] ring-inset ring-white/[0.075]" />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
