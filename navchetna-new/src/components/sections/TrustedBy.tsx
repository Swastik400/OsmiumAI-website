import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const logos = [
  "AWS", "Sarvam AI", "SSIP", "NexTech", "TantriX",
  "Plenora", "NineOne15²", "Aegis Auth", "Plaur", "Kriya",
  "LM Lens", "NSL",
];

export function TrustedBy() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="relative border-l border-r border-black/[0.06]">
          {/* Top divider with dots */}
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
              <div className="px-4 sm:px-6">
                <h2 className="type-base text-black text-balance max-w-lg">
                  Trusted by leading developers and enterprises
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="mt-10 px-4 sm:px-6">
                <ul className="mx-auto grid w-fit grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:gap-x-10">
                  {logos.map((name) => (
                    <li key={name} className="flex items-center justify-center h-8">
                      <span className="type-sm font-medium text-black/30 transition-colors duration-200 hover:text-black/70">
                        {name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
