import Hero from "../components/Hero";
import WhySection from "../components/WhySection";
import HowSection from "../components/HowSection";
import WhatWeDo from "../components/WhatWeDo";
import FutureVision from "../components/FutureVision";
import BigPicture from "../components/BigPicture";
import Mission from "../components/Mission";
import FinalCTA from "../components/FinalCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhySection />
      <HowSection />
      <WhatWeDo />
      <FutureVision />
      <BigPicture />
      <Mission />
      <FinalCTA />
    </main>
  );
}
