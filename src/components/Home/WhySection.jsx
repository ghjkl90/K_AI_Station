import React from "react";

export default function WhySection() {
  return (
    <section className="why-section">
      <div className="why-header">
        <span className="badge-why">Why</span>
        <h2 className="why-title">K-AI Station이 왜 필요할까요?</h2>
      </div>

      <div className="why-content-card">
        <div className="glass-box box-top">
          <p>
            AI는 이미 우리 삶 곳곳에 들어와 있지만,
            <br />
            여전히 많은 사람들에게 <strong>AI는 어렵고 낯선 도구</strong>로
            느껴집니다.
          </p>
        </div>

        <div className="box-bottom-grid">
          <div className="glass-box box-green">
            <p>
              K-AI Station은
              <br />
              AI를 처음 접하는 순간의
              <br />
              <strong>막막함과 두려움을 줄이기 위해</strong>
              <br />
              만들어졌습니다.
            </p>
          </div>

          <div className="glass-box box-blue">
            <p>
              복잡한 설정이나 전문 지식 없이도,
              <br />
              <strong>누구나 자연스럽게</strong>
              <br />
              AI를 경험하고 활용할 수 있도록
              <br />
              돕습니다.
            </p>
          </div>

          <div className="glass-box box-purple">
            <p>
              장기적으로,
              <br />
              AI가 일부 전문가의 도구가 아닌
              <br />
              <strong>모두의 일상과 일에 도움이 되는</strong>
              <br />
              기술이 되도록 만들어가고자 합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
