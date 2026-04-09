import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Brain, Zap, TrendingUp, ShieldCheck, Eye, Network } from "lucide-react";

const products = [
  { name: "Osmium", tag: "Deep Learning", icon: Brain, bg: "/ref/osmiumCard.png" },
  { name: "Natraj", tag: "AI + AR", icon: Zap, bg: "/ref/natrajCard.png" },
  { name: "Aegis Auth", tag: "Agentic AI", icon: TrendingUp, bg: "/ref/aegisCard.png" },
  { name: "Kriya", tag: "Organizational AI", icon: ShieldCheck, bg: "/ref/kriyaCard.png" },
  { name: "LM Lens", tag: "Vision AI", icon: Eye, bg: "/ref/lmlens.svg" },
  { name: "NSL", tag: "Neural Systems", icon: Network, bg: "/ref/nsl.png" },
];

export function Products() {
  return (
    <section className="bg-warm-50 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left copy */}
          <ScrollReveal>
            <div className="lg:sticky lg:top-28">
              <p className="type-sm text-warm-500 font-medium mb-4">
                From learning to living, innovation that awakens possibilities.
              </p>
              <h2 className="type-5xl text-black text-balance" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)" }}>
                Powered by Conscious Intelligence.
              </h2>

              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <p className="type-sm font-medium text-black">Experience the future today</p>
                  <p className="mt-1 type-sm text-warm-500">
                    Discover how conscious intelligence and advanced technology
                    unlock growth, creativity, and transformation across every
                    dimension of life.
                  </p>
                  <Link
                    href="/products"
                    className="mt-4 inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 type-sm font-medium text-white transition-colors hover:bg-warm-900"
                  >
                    Explore all products
                  </Link>
                </div>
                <p className="type-sm leading-relaxed text-warm-600 sm:text-right">
                  Our breakthrough AI powers adaptive solutions that grow with
                  learners, creators, communities, and enterprises.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right product grid */}
          <div className="grid grid-cols-2 gap-4">
            {products.map((p, i) => (
              <ScrollReveal key={p.name} delay={i * 80}>
                <div className="group relative flex h-[200px] flex-col justify-between overflow-hidden rounded-2xl border border-black/5 transition-all hover:shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_4px_12px_rgba(0,0,0,0.08)]">
                  {/* BG image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${p.bg})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                  {/* Top row */}
                  <div className="relative z-10 flex items-center justify-between p-4">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/90 shadow-sm">
                      <p.icon className="h-3.5 w-3.5 text-black" />
                    </span>
                    <span className="rounded-md bg-black/40 backdrop-blur px-2 py-1 type-2xs text-white/80">
                      {p.tag}
                    </span>
                  </div>

                  {/* Bottom */}
                  <div className="relative z-10 p-4">
                    <p className="type-3xl" style={{ color: "#ffffff" }}>{p.name}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
