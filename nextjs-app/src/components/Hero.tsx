'use client';

import React from 'react';
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen min-h-[800px] overflow-hidden bg-[#2D5A27]">
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/images/hero-fruit.jpg"
          alt="Fresh vibrant fruits"
          className="w-full h-full object-cover brightness-[0.85] contrast-[1.1] animate-[pulse_20s_ease-in-out_infinite_alternate]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
      </div>

      <div className="relative z-10 h-full flex flex-col justify-center items-start text-left md:items-center md:text-center px-6">
        <div className="animate-fade-in-up w-full md:w-auto">
          <span className="block text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-[#D97706] mb-6 backdrop-blur-md bg-white/90 px-6 py-2 rounded-full mx-0 md:mx-auto w-fit shadow-xl">
            2026 夏季鮮果盛宴
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold text-white tracking-tight mb-8 drop-shadow-2xl">
            爆甜 <span className="italic text-[#D97706]">JUICY.</span>
          </h1>
          <p className="max-w-xl mx-0 md:mx-auto text-lg md:text-2xl text-white font-medium leading-relaxed mb-12 drop-shadow-md">
            產地直達的極致甘甜。 <br/>
            嚴選當季高品質鮮果，為您的生活帶來源自大地的純粹美味。
          </p>

          <Link
            href="/#products"
            className="group relative px-12 py-5 bg-[#D97706] text-white rounded-full text-base font-bold uppercase tracking-widest hover:bg-[#B45309] transition-all duration-500 overflow-hidden shadow-2xl hover:scale-105 active:scale-95 inline-block"
          >
            <span className="relative z-10">立即選購</span>
          </Link>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;