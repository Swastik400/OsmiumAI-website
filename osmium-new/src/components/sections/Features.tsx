import {
  Brain, GraduationCap, Bell, Globe, MessageCircle,
  TrendingUp, Target, Map, Heart,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const features = [
  { icon: Brain, title: "Smart Mock Tests, Powered by AI", desc: "From the moment you start, Osmium learns how you think, what you need, and guides you every step of the way, without any setup or pressure." },
  { icon: GraduationCap, title: "Personalized Learning That Thinks Like a Teacher", desc: "Adaptive learning paths that adjust to your pace, strengths, and weaknesses in real time." },
  { icon: Bell, title: "Less activity. Slower progress. Quiet chats.", desc: "Osmium gently senses when something's off  maybe you're stressed or overwhelmed. It checks in like a caring friend who reaches out when you go quiet." },
  { icon: Globe, title: "Connecting India Through Intelligence", desc: "Our AI analyzes learning trends, question patterns, and regional insights  helping every student access smarter preparation, no matter where they are." },
  { icon: MessageCircle, title: "Ask. Understand. Master Anything.", desc: "Get crystal-clear answers in seconds with visual explanations, step-by-step logic, and examples for any concept." },
  { icon: TrendingUp, title: "Progress You Can Feel", desc: "From topic mastery to career suggestions and consistency streaks, Osmium motivates you with meaningful milestones." },
  { icon: Target, title: "Built for Real Exam Success", desc: "Quizzes adapt to your skill level, mirror real test conditions, and provide instant insights to improve speed, accuracy, and confidence." },
  { icon: Map, title: "Your Career Path, Mapped by AI", desc: "A crystal-clear roadmap showing where to begin, what to learn next, and how to reach your goals  step by step." },
  { icon: Heart, title: "Mental Health & Wellness Support", desc: "Osmium provides mental health support, helping students manage stress, build resilience, and stay motivated." },
];

export function Features() {
  return (
    <section id="features" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <ScrollReveal>
          <SectionHeader
            badge="Features"
            title={<>AI That Helps You Learn Effortless, Fast, and Personalized.</>}
          />
        </ScrollReveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <ScrollReveal key={f.title} delay={i * 80}>
              <div className="flex h-full flex-col rounded-2xl border border-black/5 bg-warm-50 p-6 transition-shadow hover:shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_2px_8px_rgba(0,0,0,0.06)]">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10">
                  <f.icon className="h-5 w-5 text-brand" />
                </span>
                <h3 className="mt-4 type-base font-medium text-black">{f.title}</h3>
                <p className="mt-2 type-sm text-warm-500">{f.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
