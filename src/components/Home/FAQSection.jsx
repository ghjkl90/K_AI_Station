import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    q: "AI를 처음 써보는 사람도 사용할 수 있나요?",
    a: "네, 가능합니다. K-AI Station은 AI를 처음 접하는 분들도 부담 없이 시작할 수 있도록 설계되었습니다. 복잡한 설정 없이 안내를 따라가며 경험할 수 있습니다.",
  },
  // ... add more from content
];

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-200 py-4">
      <button
        className="w-full flex justify-between items-center text-left py-2 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium">Q. {question}</span>
        <ChevronDown
          className={`transform transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <div className="mt-4 text-slate-600 leading-relaxed pl-6">
          A. {answer}
        </div>
      )}
    </div>
  );
};

const FAQSection = () => {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="px-4 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-bold uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="text-3xl font-bold mt-4">
            자주 묻는 질문을 정리했습니다.
          </h2>
        </div>
        <div className="space-y-2">
          {faqData.map((item, index) => (
            <FAQItem key={index} question={item.q} answer={item.a} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
