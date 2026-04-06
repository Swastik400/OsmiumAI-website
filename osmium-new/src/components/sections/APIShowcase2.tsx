import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function APIShowcase2() {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="relative border-l border-r border-black/[0.06]">
          {/* Top divider */}
          <div className="relative">
            <div className="mt-0.5 h-[1px] w-full bg-black/[0.06]" />
          </div>

          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
              {/* Left — description */}
              <div className="relative px-4 md:px-12 text-pretty py-12 flex flex-col justify-between">
                <div>
                  <p className="type-xs text-brand font-medium uppercase tracking-wider mb-4">
                    India&apos;s First Educational LLM
                  </p>
                  <h3 className="type-xl text-black">
                    Osmium AI &mdash; 96 Billion Parameters
                  </h3>
                  <div className="mt-4 type-base text-warm-500">
                    <p>
                      Osmium isn&apos;t just another AI wrapper. It&apos;s a purpose-built
                      educational large language model with 96 billion parameters,
                      trained specifically for Indian education. Today it stands
                      among the leading educational AI systems in the world.
                    </p>
                  </div>

                  <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 mt-12">
                    <div>
                      <h4 className="type-sm text-black">Outperforms in Education</h4>
                      <p className="type-sm mt-3 text-warm-500">
                        Benchmarked against top AI models in exam prediction,
                        doubt solving, and personalized learning &mdash; Osmium
                        leads in the education sector.
                      </p>
                    </div>
                    <div>
                      <h4 className="type-sm text-black">Built for India</h4>
                      <p className="type-sm mt-3 text-warm-500">
                        Trained on Indian curricula, exam patterns, and regional
                        languages. Understands JEE, NEET, CUET, and board exams
                        like no other AI can.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Vertical divider (desktop) */}
              <div className="hidden w-px lg:block bg-black/[0.06]" />

              {/* Right — benchmark image */}
              <div className="px-4 pb-4 lg:pt-4 flex">
                <div className="relative flex w-full rounded-[1.25rem] bg-cream overflow-hidden">
                  <div className="w-full" style={{ aspectRatio: "1758 / 816" }} />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt="Osmium AI benchmark comparison"
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 size-full object-contain p-4"
                    style={{ color: "transparent" }}
                    src="/Osmium AI and other platforms 1.png"
                  />
                  <div className="absolute inset-0 rounded-[1.25rem] ring-[0.5px] ring-black/[0.075] ring-inset pointer-events-none" />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
