import React from "react";
import Header from "./Layout/Header";
import Hero from "./Home/Hero";
import WhySection from "./Home/WhySection";
import FeaturesSection from "./Home/FeaturesSection";
import TargetUserSection from "./Home/TargetUserSection";
import FAQSection from "./Home/FAQSection";
import Footer from "./Layout/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#f7f9fb] text-[#191c1e]">
      <Header />
      <main className="pt-16">
        <Hero />
        <WhySection />
        <FeaturesSection />
        <TargetUserSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
