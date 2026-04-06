import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function ImpactHeading() {
  return (
    <section className="pt-20 pb-8 md:pt-28 md:pb-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <ScrollReveal>
          <div className="contents lg:block">
            <h2 className="block text-black text-balance type-5xl max-w-2xl text-center mx-auto">
              Showcasing the impact of AI-powered education across India
            </h2>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
