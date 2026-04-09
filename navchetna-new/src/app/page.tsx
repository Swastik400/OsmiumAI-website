import { Hero } from "@/components/sections/Hero";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { Platforms } from "@/components/sections/Platforms";
import { Products } from "@/components/sections/Products";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      {/* Hero: tagline + tabbed showcase */}
      <Hero />

      {/* Social proof: partner logos */}
      <TrustedBy />

      {/* Services: 3 pillars + 4 capabilities */}
      <Platforms />

      {/* Products: sticky copy + product grid */}
      <Products />

      {/* Work process: Plan → Development → Release */}
      <Process />

      {/* Testimonials: auto-rotating with progress rings */}
      <Testimonials />

      {/* FAQ */}
      <FAQ />

      {/* Final CTA */}
      <CTA />
    </>
  );
}
