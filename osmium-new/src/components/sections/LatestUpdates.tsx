import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const posts = [
  {
    href: "/#features",
    image: "/ref/BlogCover10.jpeg",
    title: "Introducing Osmium v2  Smarter Mock Tests, Deeper Insights",
    category: "Product",
    date: "Mar 11, 2025",
  },
  {
    href: "/#features",
    image: "/ref/klynektbpi-BlogCover7.jpeg",
    title: "Osmium for Institutes: Powering India's Education Infrastructure",
    category: "Company",
    date: "Feb 11, 2025",
  },
  {
    href: "/#features",
    image: "/ref/Cover0.jpeg",
    title: "Introducing Career Mapping  AI-Powered Roadmaps for Every Student",
    category: "Product",
    date: "Feb 10, 2025",
  },
];

export function LatestUpdates() {
  return (
    <>
      {/* Heading */}
      <section className="pt-20 pb-8 md:pt-28 md:pb-10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <ScrollReveal>
            <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-x-12">
              <div className="contents lg:block lg:col-span-6">
                <h2 className="block text-black text-balance type-5xl max-w-lg lg:max-w-none">
                  Latest updates
                </h2>
              </div>
              <div className="relative mt-8 lg:mt-0 lg:col-span-6">
                <div
                  className="lg:absolute lg:right-0"
                  style={{ top: "max(-0.6875rem, calc(100% - 3rem))" }}
                >
                  <Link
                    href="/about"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_1px_2px_0_rgba(0,0,0,0.04),0_2px_4px_0_rgba(0,0,0,0.04)] transition-transform duration-300 ease-out active:scale-[0.98] hover:bg-warm-50 w-fit h-12 px-5 type-base"
                  >
                    All posts
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Blog cards */}
      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="relative border-l border-r border-black/[0.06]">
            <div className="px-2 md:px-4">
              <ScrollReveal>
                <div className="overflow-hidden">
                  <ul className="flex gap-4 overflow-x-auto scrollbar-none snap-x snap-mandatory lg:grid lg:grid-cols-3 lg:overflow-visible py-4 -my-4 px-1">
                    {posts.map((p) => (
                      <li
                        key={p.title}
                        className="flex-none w-[min(20rem,calc(100%-2rem))] sm:w-[calc(50%-0.5rem)] lg:w-auto snap-start"
                      >
                        <article className="relative group">
                          {/* Square image */}
                          <div className="aspect-square bg-cream rounded-[1.25rem] overflow-hidden w-full relative">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              alt=""
                              loading="lazy"
                              decoding="async"
                              className="absolute inset-0 size-full object-cover"
                              style={{ color: "transparent" }}
                              src={p.image}
                            />
                            <div className="absolute pointer-events-none inset-0 ring-[0.5px] ring-black/[0.075] ring-inset z-30 rounded-[1.25rem]" />
                          </div>

                          {/* Title */}
                          <h3 className="mt-6 px-4 type-2xl text-black text-pretty">
                            <Link href={p.href} className="outline-none">
                              <span className="absolute inset-0" />
                              {p.title}
                            </Link>
                          </h3>

                          {/* Meta */}
                          <dl className="mt-5 px-4 flex flex-wrap gap-x-2.5 gap-y-3">
                            <dt className="sr-only">Category</dt>
                            <dd className="type-xs text-black">{p.category}</dd>
                            <dt className="sr-only">Date</dt>
                            <dd className="type-xs text-warm-500">
                              <time>{p.date}</time>
                            </dd>
                          </dl>
                        </article>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
