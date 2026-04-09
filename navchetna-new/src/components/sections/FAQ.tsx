"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, MessageCircleQuestion, Calendar } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const faqs = [
  { q: "What is Navchetna and who do you work with?", a: "Navchetna is a creative tech company that blends design, innovation, and engineering to solve real problems. We work with students, startups, institutions, and enterprises — anyone looking to grow with the right use of technology." },
  { q: "What services do you provide?", a: "We cover a wide range of solutions: Android, iOS, and web apps, AI/ML, UI/UX design, branding, marketing, SEO, cloud, IoT, automation, content creation, servers, and even games or desktop software. Basically, if it's tech or design, we've got it covered." },
  { q: "Do you provide design separately or only with development?", a: "Yes, design can be taken as a standalone service. Many clients only need UI/UX or creative assets like logos and posters, and we're happy to provide that without full development." },
  { q: "What makes Navchetna different from others?", a: "We believe in being a one-stop partner for tech and design needs. Our focus is on affordability, transparency, and long-term support — customization, maintenance, and guidance even after launch." },
  { q: "What is Osmium and how does it help students?", a: "Osmium is our AI-powered learning platform. It helps students prepare smarter by generating personalized study material, quizzes, mock tests, and even career guidance — like a mentor that adapts to your learning style." },
  { q: "What is Natraj and who can use it?", a: "Natraj is an AR/AI-based product for learning anatomy. By pointing your phone's camera at a body part, you can view realistic 3D models of bones or organs in place. Medical students, biology learners, or educators can use it to make complex concepts more interactive and engaging." },
  { q: "How do you charge for services?", a: "Pricing depends on the scope and type of project. We keep it flexible, whether for individuals, startups, or enterprises, so clients only pay for what they really need." },
  { q: "How can I contact Navchetna for projects or support?", a: "You can reach us through our website or email. We respond quickly and also provide documentation, training, and ongoing support whenever required." },
];

export function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="bg-warm-50 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <ScrollReveal>
          <SectionHeader
            badge="Common Questions"
            title="Everything You Need to Know"
            description="Quick answers to help you get started with confidence."
          />
        </ScrollReveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <ScrollReveal>
            <div className="flex flex-col items-center rounded-2xl border border-black/5 bg-white p-8 text-center lg:sticky lg:top-28 lg:self-start">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-black/5 bg-warm-50">
                <MessageCircleQuestion className="h-5 w-5 text-warm-600" />
              </span>
              <h3 className="mt-4 type-xl font-medium text-black">
                Need Personal Guidance?
              </h3>
              <p className="mt-2 max-w-sm type-sm text-warm-500">
                Our AI automation experts are here to help you find the perfect
                solution for your specific business needs.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-xl border border-black/10 bg-white px-4 py-2.5 type-sm font-medium transition-colors hover:bg-warm-50"
              >
                <Calendar className="h-3.5 w-3.5" />
                Schedule Consultation
              </Link>
            </div>
          </ScrollReveal>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="rounded-xl border border-black/5 bg-white transition-colors hover:border-black/10">
                  <button
                    onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="type-sm font-medium">{faq.q}</span>
                    <ChevronDown className={`h-4 w-4 shrink-0 text-warm-400 transition-transform ${openIdx === i ? "rotate-180" : ""}`} />
                  </button>
                  <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: openIdx === i ? "200px" : "0px" }}>
                    <p className="px-5 pb-5 type-sm text-warm-600">{faq.a}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
