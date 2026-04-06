import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const articles = [
  {
    href: "/#features",
    image: "/ref/9dzqkp3d2u4-app-creative.jpeg",
    date: "Oct 2025",
    title: "Introducing Osmium v2 — The Most Accurate Exam Prediction Engine",
  },
  {
    href: "/#features",
    image: "/ref/rlartawee0i-app-agents.jpeg",
    date: "Jul 2025",
    title: "Osmium Career Mapping is Here",
  },
];

export function ResearchCards() {
  return (
    <section className="pt-16 pb-16 md:pt-24 md:pb-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <ScrollReveal>
          <div className="grid xl:items-start gap-12 grid-cols-1 md:grid-cols-[1fr_auto] xl:grid-rows-[1fr_auto]">
            {/* Heading */}
            <h3 className="text-pretty type-base text-black max-w-2xl">
              Advancing research beyond exam prediction into personalized tutoring, career mapping, mental wellness, and institutional analytics.
            </h3>

            {/* Article cards */}
            <div className="md:col-span-2 xl:col-auto xl:row-span-2 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6">
              {articles.map((a) => (
                <article
                  key={a.title}
                  className="relative rounded-2xl xl:w-80 overflow-hidden bg-white"
                  style={{ boxShadow: "0 0 1.143px 0 rgba(0,0,0,0.40), 0 2px 4px 0 rgba(0,0,0,0.04)" }}
                >
                  <div>
                    {/* Image header */}
                    <div className="relative w-full aspect-[3/1] sm:aspect-[316/170] lg:aspect-[3/1] xl:aspect-[316/170]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={a.image}
                        alt=""
                        loading="lazy"
                        className="absolute inset-0 size-full object-cover transition-all duration-700 ease-in-out"
                      />
                      {/* Date badge */}
                      <time
                        className="bg-white absolute left-3 top-3 rounded-full px-2.5 py-2 text-[0.75rem]/none font-medium text-black"
                        style={{ boxShadow: "0 0 1.072px 0 rgba(0,0,0,0.40), 0 4.287px 4.287px 0 rgba(0,0,0,0.04)" }}
                      >
                        {a.date}
                      </time>
                    </div>

                    {/* Title */}
                    <div className="p-[1.125rem]">
                      <Link href={a.href} className="outline-none">
                        <div className="absolute inset-0" />
                        <p className="type-xs text-black font-medium">
                          <span className="line-clamp-2 text-pretty">{a.title}</span>
                        </p>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Learn more button */}
            <div className="md:col-start-2 md:row-start-1 xl:col-auto xl:row-auto md:flex md:flex-col xl:block">
              <div className="md:h-0 md:mt-auto md:flex-auto md:max-h-fit md:flex md:items-center xl:block xl:max-h-none xl:mt-0 xl:h-auto">
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_1px_2px_0_rgba(0,0,0,0.04),0_2px_4px_0_rgba(0,0,0,0.04)] transition-transform duration-300 ease-out active:scale-[0.98] hover:bg-warm-50 w-fit h-12 px-5 type-base gap-3"
                >
                  Learn more
                  <ChevronRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
