import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function AboutOsmium() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <ScrollReveal>
          <div className="relative isolate overflow-hidden rounded-3xl min-h-[28rem] flex items-end" style={{ backgroundColor: "#1a1a2e" }}>
            {/* Background image */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/about-bg.jpeg"
              alt=""
              className="absolute inset-0 size-full object-cover -z-20"
            />
            {/* Gradient overlay */}
            <div
              className="absolute inset-0 -z-10"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.05) 100%)",
              }}
            />
            {/* Inset ring */}
            <div className="pointer-events-none absolute inset-0 z-30 rounded-3xl ring-[0.5px] ring-inset ring-black/[0.075]" />

            {/* Two-column content */}
            <div className="relative z-20 w-full px-6 pb-8 pt-20 sm:px-10 sm:pb-12 md:px-14 md:pb-14">
              <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-x-12">
                <div className="contents lg:block lg:col-span-6">
                  <p className="block type-xs font-medium uppercase tracking-wider text-white/60 mb-5">
                    About Osmium
                  </p>
                  <h2 className="block max-w-lg text-balance text-white type-5xl lg:max-w-none" style={{ fontWeight: 300 }}>
                    Learning should feel like having a mentor who truly
                    <span className="table"> understands you.</span>
                  </h2>
                </div>
                <div className="mt-8 flex flex-col lg:col-span-6 lg:mt-0 lg:max-w-none max-w-2xl">
                  <p className="block mt-auto text-balance lg:text-pretty type-base text-white/70">
                    At Osmium, we believe learning should feel like having a
                    mentor who truly understands you {"\u2014"} the way you think,
                    the way you learn, your strengths, your struggles, and the
                    dreams you quietly hold onto.
                  </p>
                  <div className="h-0 flex-auto" style={{ maxHeight: "5rem" }} />
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
