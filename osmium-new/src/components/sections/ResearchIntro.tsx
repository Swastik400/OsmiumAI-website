import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function ResearchIntro() {
  return (
    <section className="pt-20 pb-8 md:pt-28 md:pb-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <ScrollReveal>
          <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-x-12">
            <div className="contents lg:block lg:col-span-6">
              <h2 className="block text-black text-balance type-5xl max-w-lg lg:max-w-none">
                Research that redefines how India learns and grows
              </h2>
            </div>
            <div className="flex flex-col mt-8 lg:mt-0 max-w-2xl lg:max-w-none lg:col-span-6">
              <p className="block type-base mt-auto text-balance lg:text-pretty text-black">
                Our vision is to make education truly intelligent and accessible.
                We build our own foundational AI models, beginning with exam
                prediction and personalized tutoring, now extending into career
                mapping, mental wellness, and institutional analytics.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
