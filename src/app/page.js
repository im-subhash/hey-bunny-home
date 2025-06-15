import { HeroParallax } from "../components/ui/hero-parallax";
import Image from "next/image";
import HeroSection from "../components/ui/HeroSection"
import { HoverEffect } from "../components/ui/card-hover-effect";
import GlowingGradientFeature from "../components/ui/glowing-gradient-features";
// import FAQSection from "../components/ui/FAQSectionOld";
import {FAQSection} from '../components/ui/FAQSection';
import HomepageEnding from "../components/ui/HomepageEnding";

// import {TracingBeam} from "../components/ui/tracing-beam";

// export const projects = [
//   {
//     title: "One-Click Post Generation",
//     description:
//       "Instantly generate stunning, platform-ready posts with just a single click. No design skills required!",
//     link: "#",
//   },
//   {
//     title: "AI-Powered Caption Creation",
//     description:
//       "Generate creative and engaging captions tailored to your brand's voice, making your posts stand out.",
//     link: "#",
//   },
//   {
//     title: "Seamless Image Generation",
//     description:
//       "Produce high-quality, eye-catching images for your content without the need for a photographer or designer.",
//     link: "#",
//   },
//   {
//     title: "Unified Social Media Management",
//     description:
//       "Manage all your social media accounts from one dashboard, streamlining your content distribution.",
//     link: "#",
//   },
//   {
//     title: "Automated Cross-Platform Sharing",
//     description:
//       "Effortlessly publish posts across multiple platforms simultaneously, saving time and maximizing reach.",
//     link: "#",
//   },
//   {
//     title: "Content Calendar & Scheduling",
//     description:
//       "Plan, organize, and schedule posts ahead of time to ensure a consistent and strategic online presence.",
//     link: "#",
//   },
// ];


export default function Home() {
  return (
    <>
      <HeroSection/>
      <GlowingGradientFeature />
      <FAQSection />
      <HomepageEnding />
    </>
  );
}


