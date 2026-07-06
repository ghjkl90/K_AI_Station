import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#000000] text-white pt-16 pb-8 border-t border-[#76777d]">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
          <div className="space-y-4">
            <span className="text-32px font-bold text-[#0051d5]">
              K-AI Station
            </span>
            <div className="space-y-1 text-[14px] text-gray-400">
              <p>사업자명 : 주식회사 케이에이큐 | 대표 : 노혜영</p>
              <p>사무실 : 경기도 수원시 장안구 서부로 2066, 27동 27403호</p>
              <p>사업자번호 : 470-81-03049</p>
              <p>Tel : 031-250-4233 | E-Mail : kaq8560@gmail.com</p>
            </div>
          </div>
          <nav className="flex gap-8 text-[14px] text-gray-400">
            <a
              className="hover:text-[#0051d5] transition-colors underline"
              href="#"
            >
              개인정보취급방침
            </a>
            <a className="hover:text-[#0051d5] transition-colors" href="#">
              이용약관
            </a>
            <a className="hover:text-[#0051d5] transition-colors" href="#">
              Accessibility Statement
            </a>
          </nav>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-[12px] text-gray-500">
          <p>© 2024 K-AI Station. Corporate Modernism for Accessibility.</p>
          <p>Copyright © KAQ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
