import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function PlatformIntro() {
  return (
    <section className="pt-20 pb-8 md:pt-28 md:pb-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <ScrollReveal>
          <p className="block type-sm text-warm-500 font-medium mb-7">
            What&apos;s Inside Osmium
          </p>

          <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-x-12">
            {/* Left  heading + CTA */}
            <div className="contents lg:block lg:col-span-6">
              <h2 className="block text-black text-balance type-5xl max-w-lg lg:max-w-none">
                One lesson, five ways to master it
              </h2>

              <div className="mt-8 order-last lg:order-none">
                <div className="flex flex-wrap gap-2">
                  <Link
                    href="/#features"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-black text-white transition-transform duration-300 ease-out active:scale-[0.98] hover:bg-warm-900 h-12 px-5 type-base"
                  >
                    Explore all features
                  </Link>
                </div>
              </div>
            </div>

            {/* Right  description */}
            <div className="flex flex-col mt-8 lg:mt-0 max-w-2xl lg:max-w-none lg:col-span-6">
              <p className="block type-base mt-auto text-balance lg:text-pretty text-black">
                Every lesson comes with video lectures, AI-generated podcasts,
                interactive quizzes, flip flashcards, and a full question bank.
                Pick the mode that fits your style, or use them all to master
                every topic.
              </p>
              <div className="h-0 flex-auto" style={{ maxHeight: "5rem" }} />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
