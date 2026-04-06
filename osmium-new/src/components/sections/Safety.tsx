import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" height="1.5rem" width="1.5rem" className="text-black">
        <path d="M3.75 12V6.75C3.75 5.64543 4.64543 4.75 5.75 4.75H18.25C19.3546 4.75 20.25 5.64543 20.25 6.75V12M3.75 12V17.25C3.75 18.3546 4.64543 19.25 5.75 19.25H18.25C19.3546 19.25 20.25 18.3546 20.25 17.25V12M3.75 12H20.25M8.75 15.75H15.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Silent Drop Detection",
    desc: "Osmium tracks your learning patterns quietly. When scores dip or study streaks break, it catches the signal early \u2014 before things spiral.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" height="1.5rem" width="1.5rem" className="text-black">
        <path d="M8.75 11.75L11 14.25L15.25 9.75M12 2.75C7.16751 2.75 3.75 6.5 3.75 10C3.75 13.5 6 17.5 12 21.25C18 17.5 20.25 13.5 20.25 10C20.25 6.5 16.8325 2.75 12 2.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Mentor Check-ins",
    desc: "Instead of ignoring the signs, Osmium reaches out like a friend \u2014 asking how you\u2019re doing, sharing encouragement, and connecting you with support.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" height="1.5rem" width="1.5rem" className="text-black">
        <path d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V19.25L12 15.75L4.75 19.25V6.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Parent Alerts",
    desc: "Parents get gentle WhatsApp updates when their child might need extra care \u2014 so families can step in with love, not pressure.",
  },
];

function DotMarker({ className }: { className: string }) {
  return (
    <div className={`absolute z-20 flex h-10 w-10 items-center justify-center rounded-full ${className}`} style={{ backgroundColor: "#FDFCFC" }}>
      <div className="h-1.5 w-1.5 rounded-full bg-black" />
    </div>
  );
}

export function Safety() {
  return (
    <>
      {/* Heading */}
      <section className="pt-8 pb-8 md:pt-10 md:pb-10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <ScrollReveal>
            <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-x-12">
              <div className="contents lg:block lg:col-span-7">
                <p className="type-xs text-brand font-medium uppercase tracking-wider mb-3">
                  Because marks aren&apos;t everything
                </p>
                <h2 className="block text-black text-balance type-5xl max-w-lg lg:max-w-none">
                  Mental wellness, built into every step
                </h2>
              </div>
              <div className="relative mt-6 lg:mt-0 lg:col-span-5 flex flex-col justify-end">
                <p className="type-sm text-warm-500 text-pretty">
                  Many students silently struggle with stress, burnout, and self-doubt.
                  They don&apos;t know who to talk to. Osmium watches over them &mdash; not
                  as a tool, but as a companion that genuinely cares.
                </p>
                <div className="mt-6">
                  <Link
                    href="/about"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_1px_2px_0_rgba(0,0,0,0.04),0_2px_4px_0_rgba(0,0,0,0.04)] transition-transform duration-300 ease-out active:scale-[0.98] hover:bg-warm-50 w-fit h-12 px-5 type-base"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Content grid cards */}
      <section className="pb-10 md:pb-14">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="relative border-l border-r border-black/[0.06]">
            {/* Top border with dots */}
            <div className="relative">
              <DotMarker className="left-0 top-0 -translate-x-1/2 -translate-y-1/2" />
              <DotMarker className="right-0 top-0 translate-x-1/2 -translate-y-1/2" />
              <div className="h-px w-full bg-black/[0.06]" />
            </div>

            <ScrollReveal>
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr_auto_1fr]">
                {features.map((f, i) => (
                  <div key={f.title} className="contents">
                    {/* Card */}
                    <div className="relative flex flex-col" style={{ backgroundColor: "#ffffff" }}>
                      {/* Icon area */}
                      <div className="p-5 md:p-8 lg:p-10 pb-0 md:pb-0 lg:pb-0">
                        <div className="flex items-center justify-center size-10 rounded-[10px] ring-1 ring-inset ring-black/10">
                          {f.icon}
                        </div>
                      </div>
                      {/* Text area */}
                      <div className="p-5 md:p-8 lg:p-10 pt-12 md:pt-16 lg:pt-20 flex flex-col flex-1">
                        <h3 className="type-2xl mb-3">{f.title}</h3>
                        <p className="type-sm text-warm-500 leading-relaxed">{f.desc}</p>
                      </div>
                    </div>

                    {/* Divider between cards */}
                    {i < features.length - 1 && (
                      <div className="relative h-px w-full bg-black/[0.06] lg:h-auto lg:w-px lg:bg-black/[0.06]">
                        {/* Mobile dots */}
                        <DotMarker className="left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:hidden" />
                        <DotMarker className="right-0 top-1/2 translate-x-1/2 -translate-y-1/2 lg:hidden" />
                        {/* Desktop dots */}
                        <DotMarker className="hidden lg:flex top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                        <DotMarker className="hidden lg:flex bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Bottom border with dots */}
            <div className="relative">
              <DotMarker className="left-0 bottom-0 -translate-x-1/2 translate-y-1/2" />
              <DotMarker className="right-0 bottom-0 translate-x-1/2 translate-y-1/2" />
              <div className="h-px w-full bg-black/[0.06]" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
