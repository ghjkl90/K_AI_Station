import React from "react";
import main4 from "../assets/main4.png";

export default function FeaturesSection() {
  return (
    <section className="features-section">
      <div className="features-header">
        <span className="badge-features">Features</span>
        <h2 className="features-title">이런 특징을 갖고 있습니다.</h2>
      </div>

      <div className="features-container">
        <div className="features-accordion-group">
          <div className="accordion-item collapsed">
            <div className="accordion-header">
              <h3>AI 초심자 체험 모드</h3>
              <span className="icon-toggle">+</span>
            </div>
          </div>

          <div className="accordion-item collapsed">
            <div className="accordion-header">
              <h3>전문가 프롬프트 제공</h3>
              <span className="icon-toggle">+</span>
            </div>
          </div>

          <div className="accordion-item active">
            <div className="accordion-header">
              <h3>다양한 AI 모델 제공</h3>
              <span className="icon-toggle">−</span>
            </div>
            <div className="accordion-body">
              <ul>
                <li>
                  최신 AI 모델을 포함한 다양한 AI 모델을 한 곳에서 비교하고
                  체험할 수 있습니다.
                </li>
                <li>
                  목적에 따라 어떤 AI가 적합한지, 직접 사용해 보며 선택해
                  보세요.
                </li>
              </ul>
            </div>
          </div>
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
