import { Hero } from "@/components/sections/Hero";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { PlatformIntro } from "@/components/sections/PlatformIntro";
import { BentoGrid } from "@/components/sections/BentoGrid";
import { Testimonials } from "@/components/sections/Testimonials";
import { APIIntro } from "@/components/sections/APIIntro";
import { APIShowcase } from "@/components/sections/APIShowcase";
import { APIShowcase2 } from "@/components/sections/APIShowcase2";
import { ImpactHeading } from "@/components/sections/ImpactHeading";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { InstituteFeatures } from "@/components/sections/InstituteFeatures";
import { ResearchIntro } from "@/components/sections/ResearchIntro";
import { Timeline } from "@/components/sections/Timeline";
import { ResearchCards } from "@/components/sections/ResearchCards";
import { Safety } from "@/components/sections/Safety";
import { LatestUpdates } from "@/components/sections/LatestUpdates";
import { Team } from "@/components/sections/Team";
import { FAQ } from "@/components/sections/FAQ";

export default function Home() {
  return (
    <>
      {/* ━━━ ACT 1: HOOK ━━━ */}
      {/* Hero: Who we are + interactive product demo */}
      <Hero />

      {/* Social proof: logos */}
      <TrustedBy />

      {/* ━━━ ACT 2: PRODUCT ━━━ */}
      {/* Platform intro heading + description */}
      <PlatformIntro />

      {/* Deep dive: 2 large feature cards + 4 small icon cards */}
      <BentoGrid />

      {/* ━━━ ACT 6: TRUST & SAFETY ━━━ */}
      {/* Safety pillars */}
      <Safety />

      {/* Partner testimonials with auto-rotate */}
      <Testimonials />

      {/* ━━━ ACT 3: FOR INSTITUTES (API/INTEGRATION) ━━━ */}
      {/* Institute integration heading */}
      <APIIntro />

      {/* API showcase: code snippet */}
      <APIShowcase />

      {/* API showcase: analytics dashboard */}
      <APIShowcase2 />

      {/* ━━━ ACT 4: IMPACT & STORIES ━━━ */}
      {/* Impact heading */}
      <ImpactHeading />

      {/* Case studies mosaic grid */}
      <CaseStudies />

      {/* Osmium AI for Institutes */}
      <InstituteFeatures />

      {/* ━━━ ACT 5: RESEARCH & JOURNEY ━━━ */}
      {/* Research heading */}
      <ResearchIntro />

      {/* Interactive timeline */}
      <Timeline />

      {/* Research blog cards */}
      <ResearchCards />

      {/* ━━━ ACT 7: LATEST + ABOUT ━━━ */}
      {/* Blog posts */}
      <LatestUpdates />

      {/* Team section */}
      <Team />

      {/* FAQ */}
      <FAQ />
    </>
  );
}
