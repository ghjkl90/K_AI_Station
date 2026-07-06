import React, { useState } from "react";

export default function FeaturesSection() {
  const [activeIndex, setActiveIndex] = useState(2); // 기본값으로 3번째 활성화

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-8 bg-[#f7f9fb]" id="features">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full border border-[#0051d5] text-[#0051d5] text-[12px] font-semibold mb-4">
            Features
          </span>
          <h2 className="text-[32px] font-bold">이런 특징을 갖고 있습니다.</h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {/* 아코디언 1 */}
          <div
            className={`accordion-item border rounded-xl overflow-hidden bg-[#f2f4f6] transition-all ${activeIndex === 0 ? "border-[#0051d5] shadow-md" : "border-[#c6c6cd]"}`}
          >
            <button
              className="w-full flex items-center justify-between p-6 text-left hover:bg-[#eceef0] transition-colors"
              onClick={() => toggleAccordion(0)}
            >
              <span className="text-[24px] font-semibold">
                AI 초심자 체험 모드
              </span>
              <span className="material-symbols-outlined">
                {activeIndex === 0 ? "remove" : "add"}
              </span>
            </button>
            <div
              className={`accordion-content bg-white transition-all duration-300 ${activeIndex === 0 ? "p-6 block border-t border-[#c6c6cd]" : "h-0 overflow-hidden"}`}
            >
              <p className="text-[16px] text-[#45464d]">
                처음 AI를 사용하는 사람들을 위해 단계별 가이드를 제공하며
                직관적인 UI로 구성되어 있습니다.
              </p>
            </div>
          </div>

          {/* 아코디언 2 */}
          <div
            className={`accordion-item border rounded-xl overflow-hidden bg-[#f2f4f6] transition-all ${activeIndex === 1 ? "border-[#0051d5] shadow-md" : "border-[#c6c6cd]"}`}
          >
            <button
              className="w-full flex items-center justify-between p-6 text-left hover:bg-[#eceef0] transition-colors"
              onClick={() => toggleAccordion(1)}
            >
              <span className="text-[24px] font-semibold">
                전문가 프롬프트 제공
              </span>
              <span className="material-symbols-outlined">
                {activeIndex === 1 ? "remove" : "add"}
              </span>
            </button>
            <div
              className={`accordion-content bg-white transition-all duration-300 ${activeIndex === 1 ? "p-6 block border-t border-[#c6c6cd]" : "h-0 overflow-hidden"}`}
            >
              <p className="text-[16px] text-[#45464d]">
                업무 및 창의적 활동에 최적화된 고성능 프롬프트 라이브러리를 통해
                즉각적인 결과물을 얻을 수 있습니다.
              </p>
            </div>
          </div>

          {/* 아코디언 3 (Default Active) */}
          <div
            className={`accordion-item border-2 rounded-xl overflow-hidden bg-[#f2f4f6] transition-all ${activeIndex === 2 ? "border-[#0051d5] shadow-md" : "border-[#c6c6cd]"}`}
          >
            <button
              className="w-full flex items-center justify-between p-6 text-left hover:bg-[#eceef0] transition-colors"
              onClick={() => toggleAccordion(2)}
            >
              <span className="text-[24px] font-semibold text-[#0051d5]">
                다양한 AI 모델 제공
              </span>
              <span className="material-symbols-outlined text-[#0051d5]">
                {activeIndex === 2 ? "remove" : "add"}
              </span>
            </button>
            <div
              className={`accordion-content bg-white transition-all duration-300 ${activeIndex === 2 ? "p-6 block border-t border-[#c6c6cd]" : "h-0 overflow-hidden"}`}
            >
              <ul className="list-disc list-inside space-y-3 text-[16px] text-[#45464d] mb-4">
                <li>
                  최신 AI 모델을 포함한 다양한 AI 모델을 한 곳에서 비교하고
                  체험할 수 있습니다.
                </li>
                <li>
                  목적에 따라 어떤 AI가 적합한지, 직접 사용해 보며 선택해
                  보세요.
                </li>
              </ul>
              <div className="mt-4">
                <img
                  className="w-full h-auto max-h-[300px] object-cover rounded-lg border border-[#c6c6cd]"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4SyIcHCyWQQ5V_hkUmrBATUiPG71voiu0I8FkyYodRU7sRJYDJ3Oosn-OeVufBEDBkSXamEmJvWoiNvtcPRhGFGXKSWyYeez1-1Do8bDKhRjarGL7f4K88DUY1EG1dDbJn4SnouTOiKN1aY18fYQdJfPnFiPli-Sghm8kT2OJcavOL_oHIaTpgmO9zNVtiCYWLjGhHEoGc2MMHSxthC7woFjlcqoILJ3v9zZ1hcnFvfBMytlEY8U"
                  alt="AI Dashboard Models Preview (image_a68cda.png)"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
