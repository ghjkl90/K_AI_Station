import React from "react";
import { Download, MessageSquare } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6 text-center bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
          누구나, 어렵지 않게
          <br />
          AI를 시작할 수 있는 곳.
        </h1>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
          <button className="flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all">
            <Download size={20} />
            소개자료 받기
          </button>
          <button className="flex items-center justify-center gap-2 px-8 py-4 border border-slate-300 rounded-lg font-semibold hover:bg-slate-50 transition-all">
            <MessageSquare size={20} />
            문의하기
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
