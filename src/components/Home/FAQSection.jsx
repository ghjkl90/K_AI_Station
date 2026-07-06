import React, { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "AI를 처음 써보는 사람도 사용할 수 있나요?",
      a: "네, 가능합니다. K-AI Station은 AI를 처음 접하는 분들도 부담 없이 시작할 수 있도록 설계되었습니다. 복잡한 설정이나 전문 지식 없이, 간단한 선택과 안내를 따라가며 AI가 어떤 도움을 줄 수 있는지 자연스럽게 경험할 수 있습니다.",
    },
    {
      q: "기업이나 교육기관에서도 사용할 수 있나요?",
      a: "네, 기업이나 교육기관에서도 활용하실 수 있습니다. K-AI Station은 기본적으로 부스 형태의 환경으로 제공되며, 기타 설치 방식이나 사용 환경에 대해서는 문의 주시면 자세히 안내해 드리겠습니다.",
    },
    {
      q: "무료로 사용할 수 있는 범위는 어디까지인가요?",
      a: "기본적으로 모든 기능은 무료로 체험하실 수 있습니다. 추가 기능이나 확장된 사용에 대해서는 추후 별도의 안내를 제공할 예정입니다.",
    },
    {
      q: "제공되는 AI 모델은 계속 업데이트되나요?",
      a: "네, 제공되는 AI 모델은 기술 발전과 환경 변화에 맞춰 지속적으로 업데이트될 예정입니다. 새로운 AI 모델이나 개선된 기능이 추가되면, 사용자가 직접 비교하고 선택할 수 있도록 제공할 계획입니다.",
    },
    {
      q: "사용한 데이터나 입력 내용이 AI 학습에 사용되나요?",
      a: "사용자가 입력한 내용은 서비스 제공을 위한 용도로만 사용되며, 별도의 동의 없이 AI 학습에 사용되지 않습니다. 또한, 입력된 데이터는 안전하게 보호되도록 관리하고 있습니다.",
    },
  ];

  return (
    <section className="py-24 px-8 bg-white" id="faq">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full border border-[#0051d5] text-[#0051d5] text-[12px] font-semibold mb-4">
            FAQ
          </span>
          <h2 className="text-[32px] font-bold">
            자주 묻는 질문을 정리했습니다.
          </h2>
        </div>

        <div className="max-w-4xl mx-auto border-t border-[#c6c6cd]">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-[#c6c6cd]">
              <button
                className="w-full flex items-start gap-4 py-6 text-left group"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-[24px] font-bold text-[#45464d] pt-0.5">
                  Q
                </span>
                <span className="flex-1 text-[18px] font-semibold group-hover:text-[#0051d5] transition-colors">
                  {faq.q}
                </span>
                <span
                  className={`material-symbols-outlined transform transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                >
                  expand_more
                </span>
              </button>
              <div
                className={`accordion-content bg-[#f2f4f6] rounded-lg mx-4 mb-4 transition-all ${openIndex === index ? "p-6 block" : "h-0 overflow-hidden"}`}
              >
                {openIndex === index && (
                  <div className="flex gap-4">
                    <span className="text-[24px] font-bold text-[#0051d5]">
                      A
                    </span>
                    <p className="text-[16px] text-[#191c1e] leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
