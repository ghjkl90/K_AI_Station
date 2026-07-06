import React from "react";

export default function TargetUserSection() {
  return (
    <section className="py-24 bg-white px-8 overflow-hidden" id="target">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full border border-[#0051d5] text-[#0051d5] text-[12px] font-semibold mb-4">
            Target User
          </span>
          <h2 className="text-[32px] font-bold">이런 분들께 추천합니다.</h2>
        </div>

        <div className="relative flex items-center justify-center min-h-[500px]">
          <div className="absolute inset-0 flex items-center justify-center -z-10">
            <div className="w-[500px] h-[500px] rounded-full border border-[#c6c6cd]/30 animate-pulse"></div>
          </div>

          <div className="relative w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#B2E2FF] p-8 rounded-2xl shadow-lg md:-translate-y-6 hover:scale-105 transition-transform flex flex-col justify-center">
              <p className="text-[20px] font-semibold text-[#003B5C] text-center">
                AI를 활용해 업무와 일상의 생산성을 높이고 싶은 사람
              </p>
            </div>
            <div className="bg-[#A8D1B7] p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform flex flex-col justify-center">
              <p className="text-[20px] font-semibold text-[#1B4332] text-center">
                AI를 처음 접하며 어디서부터 시작해야 할지 고민하는 사람
              </p>
            </div>
            <div className="bg-[#E9D5FF] p-8 rounded-2xl shadow-lg md:translate-y-6 hover:scale-105 transition-transform flex flex-col justify-center">
              <p className="text-[20px] font-semibold text-[#4A1D4A] text-center">
                최신 AI 모델을 직접 비교하며 사용해보고 싶은 사람
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
