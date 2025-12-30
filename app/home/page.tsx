"use client";

import HeroSection from "./partials/HeroSection";
import IntroSection from "./partials/IntroSection";
import FeaturedPlaces from "./partials/FeaturedPlaces";
import StatsSection from "./partials/TestimonialSection";
import WhyChooseUs from "./partials/WhyChooseUs";
import FinalCTA from "./partials/FinalCTA";
import WaButton from "@/components/WaButton";

export default function Home() {

  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <IntroSection />
      <WhyChooseUs />
      <FeaturedPlaces />
      <FinalCTA />
      <StatsSection />
      <WaButton />
    </div>
  );
}
