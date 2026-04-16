import { ScrollReveal } from "@/components/ui/ScrollReveal";

const highlights = [
  {
    title: "Career Path Guidance That Shapes Your Future",
    desc: "Helps you choose the right career by analyzing your skills and interests.",
  },
  {
    title: "Becoming the Operating System of India's Education Ecosystem",
    desc: "We're building the core system that will power how India learns  smart, simple, and scalable.",
  },
];

export function Highlights() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          {highlights.map((h, i) => (
            <ScrollReveal key={h.title} delay={i * 100}>
              <div className="flex h-full flex-col justify-between rounded-2xl border border-black/5 bg-white p-8 md:aspect-[3/2] md:p-10">
                <h3 className="type-3xl text-black text-balance">
                  {h.title}
                </h3>
                <p className="mt-4 max-w-sm type-sm text-warm-500">{h.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
