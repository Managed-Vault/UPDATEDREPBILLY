
import React from "react";
import HeroSection from "./HeroSection";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";
import SectionFive from "./SectionFive";
import SectionSix from "./SectionSix";
import SectionSeven from "./SectionSeven";
import SectionEight from "./SectionEight";
import Footer from "./Footer";

function HomePage() {
  return (
    // Use font-content as the default on the entire page
    <div className="font-content text-neutral-800">
      <HeroSection />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <SectionEight />
      <Footer />
    </div>
  );
}

export default HomePage;