import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function AllDevices() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Heading */}
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="type-xs font-medium text-warm-500 uppercase tracking-wider mb-4">
              Available everywhere
            </p>
            <h2 className="type-5xl text-black">
              One platform, every device
            </h2>
            <p className="mt-4 type-base text-warm-500">
              Osmium works seamlessly across desktop, tablet, and mobile.
              Study at home, on the go, or in the classroom.
            </p>
          </div>
        </ScrollReveal>

        {/* Hero image */}
        <ScrollReveal delay={100}>
          <div className="relative rounded-3xl overflow-hidden bg-[#f5f3f1]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/HERO IMAGE.png"
              alt="Osmium available on desktop, tablet and mobile"
              loading="lazy"
              className="w-full h-auto object-contain"
            />
            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-[0.5px] ring-inset ring-black/[0.075]" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
