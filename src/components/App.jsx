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

        <section className="py-24 bg-black text-white text-center px-8">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-[32px] font-bold">
              지금 바로 K-AI Station을 경험해보세요.
            </h2>
            <p className="text-[18px] text-gray-400 opacity-90">
              당신의 첫 번째 AI 여정을 K-AI Station이 함께합니다.
            </p>
            <div className="flex justify-center pt-4">
              <button className="bg-[#0051d5] text-white px-10 py-5 rounded-full text-[24px] font-bold hover:shadow-2xl active:scale-95 transition-all">
                시작하기
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
