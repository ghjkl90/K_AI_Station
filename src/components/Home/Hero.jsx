import React from "react";
import main2 from "../assets/main2.png";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <h1 className="hero-title">
          누구나, 어렵지 않게
          <br />
          AI를 시작할 수 있는 곳.
        </h1>

        <div className="hero-buttons">
          <button className="btn-cta btn-download">
            <svg
              className="icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="24"
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
          <button className="btn-cta btn-contact">
            <svg
              className="icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="24"
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

        <div className="hero-mockup-wrapper">
          <img
            src={main2.src}
            alt="K-AI Station Dashboard"
            className="hero-mockup-image"
          />
        </div>
      </div>
    </section>
  );
}
