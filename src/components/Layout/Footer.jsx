import React from "react";

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-logo">K-AI Station</div>
          <div className="footer-links">
            <a href="#privacy">개인정보취급방침</a>
            <a href="#terms">이용약관</a>
          </div>
        </div>

        <div className="footer-info">
          <div className="info-row">
            <span>사업자명 : 주식회사 케이에이큐</span>
            <span className="divider">|</span>
            <span>사무실 : 경기도 수원시 장안구 서부로 2066, 27동 27403호</span>
            <span className="divider">|</span>
            <span>대표 : 노혜영</span>
            <span className="divider">|</span>
            <span>사업자번호 : 470-81-03049</span>
          </div>
          <div className="info-row">
            <span>Tel : 031-250-4233</span>
            <span className="divider">|</span>
            <span>E-Mail : kaq8560@gmail.com</span>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Copyright © KAQ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
