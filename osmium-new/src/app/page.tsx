import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/Hero";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { StackLayers } from "@/components/sections/StackLayers";

const PlatformIntro = dynamic(() => import("@/components/sections/PlatformIntro").then(m => ({ default: m.PlatformIntro })));
const BentoGrid = dynamic(() => import("@/components/sections/BentoGrid").then(m => ({ default: m.BentoGrid })));
const FeatureShowcase = dynamic(() => import("@/components/sections/FeatureShowcase").then(m => ({ default: m.FeatureShowcase })));
const Testimonials = dynamic(() => import("@/components/sections/Testimonials").then(m => ({ default: m.Testimonials })));
const APIIntro = dynamic(() => import("@/components/sections/APIIntro").then(m => ({ default: m.APIIntro })));
const APIShowcase = dynamic(() => import("@/components/sections/APIShowcase").then(m => ({ default: m.APIShowcase })));
const APIShowcase2 = dynamic(() => import("@/components/sections/APIShowcase2").then(m => ({ default: m.APIShowcase2 })));
const AllDevices = dynamic(() => import("@/components/sections/AllDevices").then(m => ({ default: m.AllDevices })));
const InstituteFeatures = dynamic(() => import("@/components/sections/InstituteFeatures").then(m => ({ default: m.InstituteFeatures })));
const ResearchIntro = dynamic(() => import("@/components/sections/ResearchIntro").then(m => ({ default: m.ResearchIntro })));
const Comparison = dynamic(() => import("@/components/sections/Comparison").then(m => ({ default: m.Comparison })));
const Timeline = dynamic(() => import("@/components/sections/Timeline").then(m => ({ default: m.Timeline })));
const Team = dynamic(() => import("@/components/sections/Team").then(m => ({ default: m.Team })));
const FAQ = dynamic(() => import("@/components/sections/FAQ").then(m => ({ default: m.FAQ })));

export default function Home() {
  return (
    <>
      {/* ━━━ ACT 1: HOOK ━━━ */}
      {/* Hero: Who we are + interactive product demo */}
      <Hero />

      {/* Social proof: logos */}
      <TrustedBy />

      {/* Scroll-driven product showcase */}
      <StackLayers />

      {/* ━━━ ACT 2: PRODUCT ━━━ */}
      {/* Platform intro heading + description */}
      <PlatformIntro />

      {/* Deep dive: 2 large feature cards + 4 small icon cards */}
      <BentoGrid />

      {/* All features with mockups */}
      <FeatureShowcase />

      {/* Partner testimonials with auto-rotate */}
      <Testimonials />

      {/* ━━━ ACT 3: FOR INSTITUTES (API/INTEGRATION) ━━━ */}
      {/* Institute integration heading */}
      <APIIntro />

      {/* API showcase: code snippet */}
      <APIShowcase />

      {/* API showcase: analytics dashboard */}
      <APIShowcase2 />

      {/* Available on all devices */}
      <AllDevices />

      {/* Osmium AI for Institutes */}
      <InstituteFeatures />

      {/* ━━━ ACT 5: RESEARCH & JOURNEY ━━━ */}
      {/* Research heading */}
      <ResearchIntro />

      {/* Osmium vs Traditional Learning */}
      <Comparison />

      {/* ━━━ ACT 7: LATEST + ABOUT ━━━ */}

      {/* Journey timeline */}
      <Timeline />

      {/* Team section */}
      <Team />

      {/* FAQ */}
      <FAQ />
    </>
  );
}
