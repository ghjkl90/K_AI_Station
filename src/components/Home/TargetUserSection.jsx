import React from "react";
import main5 from "../assets/main5.png";
import main6 from "../assets/main6.png";
import main7 from "../assets/main7.png";

export default function TargetUserSection() {
  return (
    <section className="target-section">
      <div className="target-header">
        <span className="badge-target">Target User</span>
        <h2 className="target-title">이런 분들께 추천합니다.</h2>
      </div>

      <div className="target-grid">
        <div className="grid-item image-item">
          <img src={main5.src} alt="추천 대상 인물 1" />
        </div>

        <div className="grid-item text-item bg-blue">
          <p>
            AI를 활용해
            <br />
            <strong>업무와 일상의 생산성</strong>을<br />
            높이고 싶은 사람
          </p>
        </div>

        <div className="grid-item image-item">
          <img src={main6.src} alt="추천 대상 인물 2" />
        </div>

        <div className="grid-item text-item bg-green">
          <p>
            AI를 처음 접하며
            <br />
            <strong>어디서부터 시작해야 할지</strong>
            <br />
            고민하는 사람
          </p>
        </div>

        <div className="grid-item image-item">
          <img src={main7.src} alt="추천 대상 인물 3" />
        </div>

        <div className="grid-item text-item bg-pink">
          <p>
            최신 AI 모델을
            <br />
            <strong>직접 비교하며</strong>
            <br />
            사용해보고 싶은 사람
          </p>
        </div>
      </div>
    </section>
  );
}
