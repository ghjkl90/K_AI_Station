import React from "react";
import bgImage from "../assets/main1.png";
import dashboardImage from "../assets/main2.png";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-start text-center pt-24 px-8 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage.src})` }}
    >
      <div className="max-w-4xl space-y-6 z-10 text-white mt-16 animate-fade-in">
        <h1 className="text-[48px] font-extrabold tracking-tight leading-tight drop-shadow-lg text-white">
          누구나, 어렵지 않게
          <br />
          AI를 시작할 수 있는 곳.
        </h1>

        {/* 버튼 그룹 */}

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <button className="flex items-center justify-center gap-2 bg-white/20 backdrop-blur-md text-white border border-white/30 px-6 py-3 rounded-full font-medium hover:bg-white/30 transition-all min-w-[160px] shadow-sm">
            <span className="material-symbols-outlined text-[20px]">
              download
            </span>
            소개자료 받기
          </button>
          <button className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md text-white border border-white/20 px-6 py-3 rounded-full font-medium hover:bg-white/20 transition-all min-w-[160px] shadow-sm">
            <span className="material-symbols-outlined text-[20px]">mail</span>
            문의하기
          </button>
        </div>
      </div>

      {/* 2번째 사진 속 하단 대시보드 그래픽 배치 프레임 */}
      <div className="w-full max-w-4xl mt-16 border border-white/20 rounded-t-2xl shadow-2xl overflow-hidden bg-white/10 backdrop-blur-md transform translate-y-2 z-10">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4SyIcHCyWQQ5V_hkUmrBATUiPG71voiu0I8FkyYodRU7sRJYDJ3Oosn-OeVufBEDBkSXamEmJvWoiNvtcPRhGFGXKSWyYeez1-1Do8bDKhRjarGL7f4K88DUY1EG1dDbJn4SnouTOiKN1aY18fYQdJfPnFiPli-Sghm8kT2OJcavOL_oHIaTpgmO9zNVtiCYWLjGhHEoGc2MMHSxthC7woFjlcqoILJ3v9zZ1hcnFvfBMytlEY8U"
          alt="Dashboard preview"
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
}
