import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function CTA() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <ScrollReveal>
          <div className="relative isolate overflow-hidden rounded-3xl bg-black text-center">
            <div className="absolute inset-0">
              <Image
                src="/ref/qrihua4053-nvida-bg.jpeg"
                alt=""
                fill
                sizes="100vw"
                className="object-cover opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="pointer-events-none absolute inset-0 z-30 rounded-3xl ring-[0.5px] ring-inset ring-white/[0.075]" />

            <div className="relative z-10 px-6 sm:px-10 md:px-14 py-16 md:py-24 max-w-2xl mx-auto">
              <h2 className="type-5xl text-balance" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", color: "#ffffff" }}>
                Ready to Transform Your Business Operations?
              </h2>
              <p className="mt-6 type-base text-white/60 text-pretty">
                Book a personalized consultation and discover how AI can
                revolutionize your workflows.
              </p>
              <div className="mt-10 flex flex-wrap gap-3 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-white text-black transition-all duration-300 active:scale-[0.98] hover:bg-warm-100 h-12 px-7 type-base font-medium"
                >
                  Contact us
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-white/10 text-white transition-all duration-300 active:scale-[0.98] hover:bg-white/20 h-12 px-7 type-base font-medium ring-[0.5px] ring-inset ring-white/20"
                >
                  Explore products
                </Link>
              </div>

              <div className="mt-8 flex items-center justify-center gap-6 type-sm text-white/40 flex-wrap">
                <a href="mailto:hello@navchetna.tech" className="hover:text-white/70 transition-colors">
                  hello@navchetna.tech
                </a>
                <span className="h-4 w-px bg-white/10" />
                <a href="tel:+918209199581" className="hover:text-white/70 transition-colors">
                  +91 8209199581
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
