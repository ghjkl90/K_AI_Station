import React from "react";
import Header from "./components/Layout/Header";
import Hero from "./components/Home/Hero";
import WhySection from "./components/Home/WhySection";
import FeaturesSection from "./components/Home/FeaturesSection";
import TargetUserSection from "./components/Home/TargetUserSection";
import FAQSection from "./components/Home/FAQSection";
import Footer from "./components/Layout/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-primary">
      <Header />
      <main>
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

export default App;
