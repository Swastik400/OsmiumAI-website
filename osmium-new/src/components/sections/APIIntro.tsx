import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function APIIntro() {
  return (
    <section className="pt-20 pb-8 md:pt-28 md:pb-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <ScrollReveal>
          <p className="block type-sm text-warm-500 font-medium mb-7">
            Osmium for Institutes
          </p>

          <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-x-12">
            <div className="contents lg:block lg:col-span-6">
              <h2 className="block text-black text-balance type-5xl max-w-lg lg:max-w-none">
                Or integrate Osmium directly into your institution
              </h2>
            </div>

            <div className="relative mt-8 lg:mt-0 lg:col-span-6">
              <div
                className="lg:absolute lg:right-0"
                style={{ top: "max(-0.6875rem, calc(100% - 3rem))" }}
              >
                <div className="flex flex-wrap gap-2">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_1px_2px_0_rgba(0,0,0,0.04),0_2px_4px_0_rgba(0,0,0,0.04)] transition-transform duration-300 ease-out active:scale-[0.98] hover:bg-warm-50 w-fit h-12 px-5 type-base"
                  >
                    Explore docs
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
