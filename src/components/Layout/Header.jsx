import React from "react";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#f7f9fb] border-b border-[#c6c6cd]">
      <div className="flex justify-between items-center px-8 max-w-[1280px] mx-auto h-16">
        <div className="flex items-center gap-4 cursor-pointer active:scale-95 duration-150">
          <span className="material-symbols-outlined text-[#0051d5]">
            language
          </span>
          <span className="text-24px font-bold text-black">K-AI Station</span>
        </div>
        <nav className="hidden md:flex gap-8 items-center">
          <a
            className="text-[#0051d5] font-semibold hover:bg-[#e6e8ea] transition-colors px-3 py-2 rounded"
            href="#why"
          >
            Home
          </a>
          <a
            className="text-[#45464d] hover:bg-[#e6e8ea] transition-colors px-3 py-2 rounded"
            href="#features"
          >
            Features
          </a>
          <a
            className="text-[#45464d] hover:bg-[#e6e8ea] transition-colors px-3 py-2 rounded"
            href="#target"
          >
            Target
          </a>
          <a
            className="text-[#45464d] hover:bg-[#e6e8ea] transition-colors px-3 py-2 rounded"
            href="#faq"
          >
            FAQ
          </a>
        </nav>
        <div className="cursor-pointer active:scale-95 duration-150 p-2 rounded-full hover:bg-[#e6e8ea] transition-colors">
          <span className="material-symbols-outlined text-[#0051d5]">
            settings_accessibility
          </span>
        </div>
      </div>
    </header>
  );
}
