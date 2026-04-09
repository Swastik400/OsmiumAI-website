import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { LogoCarousel } from "@/components/ui/LogoCarousel";

const logos = [
  { name: "AWS", src: "/ref/aws.svg", imgStyle: { transform: "rotate(-2deg)" } },
  { name: "HomeGuru", src: "/ref/homeguru.svg" },
  { name: "NineOne15²", src: "/ref/nineone.svg" },
];

export function TrustedBy() {
  return (
    <section className="relative">
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

          <div className="py-16 md:py-20">
            <ScrollReveal>
              <div className="flex flex-col items-center gap-8">
                <p className="font-semibold text-black/40 text-xs uppercase tracking-[3px]">
                  Trusted by leading institutions and partners
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="mt-10">
                <LogoCarousel logos={logos} speed={30} logoWidth={160} gap={80} />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
