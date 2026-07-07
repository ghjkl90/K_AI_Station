import React from "react";

export default function Hero() {
  return (
    <section className="hero-section">
      {/* 쨍하게 살아 움직이는 하이퍼 오로라 백그라운드 스크린 */}
      <div className="aurora-bg"></div>

      <div className="hero-container">
        <h1 className="hero-title">
          누구나, 어렵지 않게
          <br />
          AI를 시작할 수 있는 곳.
        </h1>

        <p className="hero-subtitle">
          내 나이, 내 직업, 내 관심사로 AI를 직접 체험하는 공간입니다.
        </p>

        {/* 메인 핵심 버튼 */}
        <div className="main-action-area">
          <button className="btn-primary btn-experience">
            <span>체험하기</span>
            <svg
              className="icon-arrow"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
        </div>

        {/* 완벽 균형 서브 버튼 듀오 킷 */}
        <div className="sub-buttons-group">
          <button className="btn-sub-cta">
            <svg
              className="btn-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              ></path>
            </svg>
            <span>소개자료 받기</span>
          </button>

          <button className="btn-sub-cta">
            <svg
              className="btn-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              ></path>
            </svg>
            <span>문의하기</span>
          </button>
        </div>
      </div>
    </section>
  );
}
