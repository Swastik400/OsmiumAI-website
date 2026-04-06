import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const cards = [
  { num: "01", bg: "bg-[#f2f2f2]", title: "Quality Education, Everywhere in India", desc: "Osmium is an AI-powered learning platform for Indian students, offering lectures, tests, notes, guidance, and support in one place." },
  { num: "02", bg: "bg-[#e9eff6]", title: "Bridging the Education Gap Across India", desc: "Osmium uses AI to make quality education accessible to all, bridging the gap between urban and rural students for equal success." },
  { num: "03", bg: "bg-[#f2eff5]", title: "Osmium — The Operating System for Indian Learners", desc: "Osmium is an AI-powered platform offering lectures, tests, notes, guidance, and support for students." },
];

export function WhyOsmium() {
  return (
    <section className="bg-warm-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <ScrollReveal>
          <SectionHeader
            badge="Why Osmium"
            title="Why Osmium Stands Out"
            description="Discover what makes Osmium the perfect AI-powered learning companion for Indian students."
          />
        </ScrollReveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {cards.map((c, i) => (
            <ScrollReveal key={c.num} delay={i * 100}>
              <div className={`flex h-full min-h-[280px] flex-col justify-between rounded-2xl ${c.bg} p-8`}>
                <span className="type-5xl font-medium text-warm-400/50">{c.num}</span>
                <div>
                  <h4 className="type-lg font-medium text-black">{c.title}</h4>
                  <p className="mt-2 type-sm text-warm-500">{c.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
