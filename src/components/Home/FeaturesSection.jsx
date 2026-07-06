import React, { useState, useEffect, useRef } from "react";
import main4 from "../assets/main4.png";

export default function FeaturesSection() {
  const [activeIndex, setActiveIndex] = useState(1);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in-visible");
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const featuresData = [
    {
      title: "AI 초심자 체험 모드",
      content: [
        "AI를 처음 접하는 사용자도 쉽게 따라 할 수 있는 가이드 모드를 제공합니다.",
        "복잡한 프롬프트 입력 없이 클릭 몇 번만으로 원하는 결과를 만들어보세요.",
      ],
    },
    {
      title: "전문가 프롬프트 제공",
      content: [
        "각 분야 전문가들이 실제로 사용하는 검증된 프롬프트를 제공합니다.",
        "AI를 잘 몰라도, 전문가가 설계한 방식 그대로 실행해 완성도 높은 결과물을 만들 수 있습니다.",
        "앞으로는 전문가들이 직접 프롬프트를 공유하고, 사용자가 선택해 활용할 수 있는 전문가 프롬프트 마켓으로 확장될 예정입니다.",
      ],
    },
    {
      title: "다양한 AI 모델 제공",
      content: [
        "최신 AI 모델을 포함한 다양한 AI 모델을 한 곳에서 비교하고 체험할 수 있습니다.",
        "목적에 따라 어떤 AI가 적합한지, 직접 사용해 보며 선택해 보세요.",
      ],
    },
  ];

  return (
    <section className="features-section fade-in-section" ref={sectionRef}>
      <div className="features-header">
        <span className="badge-features">Features</span>
        <h2 className="features-title">이런 특징을 갖고 있습니다.</h2>
      </div>

      <div className="features-container">
        <div className="features-accordion-group">
          {featuresData.map((item, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className={`accordion-item ${isOpen ? "active" : "collapsed"}`}
              >
                <div
                  className="accordion-header"
                  onClick={() => setActiveIndex(index)}
                >
                  <h3>{item.title}</h3>
                  <span className="icon-toggle">{isOpen ? "−" : "+"}</span>
                </div>
                {isOpen && (
                  <div className="accordion-body">
                    <ul>
                      {item.content.map((text, i) => (
                        <li key={i}>{text}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="features-image-wrapper">
          <img
            src={main4.src}
            alt="Features Visualization"
            className="features-image"
          />
        </div>
      </div>
    </section>
  );
}
