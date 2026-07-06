import React from "react";

export default function WhySection() {
  return (
    <section className="py-24 bg-white px-8" id="why">
      <div className="max-w-[1280px] mx-auto">
        {/* 타이틀 */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full border border-[#0051d5] text-[#0051d5] text-[12px] font-semibold mb-4">
            Why
          </span>
          <h2 className="text-[32px] font-bold text-[#191c1e]">
            K-AI Station이 왜 필요할까요?
          </h2>
        </div>

        {/* 뒷배경 이미지가 들어가는 거대한 메인 컨테이너 박스 */}
        <div
          className="relative w-full rounded-3xl overflow-hidden bg-cover bg-center p-8 md:p-12 shadow-xl border border-gray-100 flex flex-col justify-between min-h-[550px]"
          style={{ backgroundImage: "url('/images/why-bg.jpg')" }} // <-- 인물 뒷배경 이미지 지정
        >
          {/* 상단: 전체 가이드 유리창 카드 */}
          <div className="glass-card w-full p-8 rounded-2xl text-center text-white max-w-4xl mx-auto mb-12">
            <p className="text-[18px] font-medium leading-relaxed drop-shadow">
              AI는 이미 우리 삶 곳곳에 들어와 있지만,
              <br />
              여전히 많은 사람들에게 AI는 어렵고 낯선 도구로 느껴집니다.
            </p>
          </div>

          {/* 하단: 3개 컬러 반투명 유리 그리드 카드 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
            <div className="glass-green p-6 md:p-8 rounded-2xl min-h-[200px] flex items-center justify-center text-center">
              <p className="text-[15px] font-semibold text-[#ffffff] leading-relaxed drop-shadow-sm">
                K-AI Station은 AI를 처음 접하는 순간의
                <br />
                막막함과 두려움을 줄이기 위해 만들어졌습니다.
              </p>
            </div>

            <div className="glass-blue p-6 md:p-8 rounded-2xl min-h-[200px] flex items-center justify-center text-center">
              <p className="text-[15px] font-semibold text-[#ffffff] leading-relaxed drop-shadow-sm">
                복잡한 설정이나 전문 지식 없이도,
                <br />
                누구나 자연스럽게 AI를 경험하고 활용할 수 있도록 돕습니다.
              </p>
            </div>

            <div className="glass-purple p-6 md:p-8 rounded-2xl min-h-[200px] flex items-center justify-center text-center">
              <p className="text-[15px] font-semibold text-[#ffffff] leading-relaxed drop-shadow-sm">
                장기적으로, AI가 일부 전문가의 도구가 아닌
                <br />
                모두의 일상과 일에 도움이 되는 기술이 되도록 만들어가고자
                합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
