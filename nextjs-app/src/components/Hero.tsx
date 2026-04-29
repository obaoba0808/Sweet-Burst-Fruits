'use client';

import React from 'react';
import Link from 'next/link';

const features = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: '產地直送',
    desc: '新鮮直達',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: '品質保證',
    desc: '嚴格挑選',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: '快速配送',
    desc: '宅配到府',
  },
];

const Hero: React.FC = () => {
  return (
    <section className="w-full bg-white pt-8 pb-12 md:pt-12 md:pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 左右分欄 */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

          {/* 左側文字區 */}
          <div className="w-full lg:w-[45%] flex flex-col items-start pt-4">

            {/* 小標 */}
            <span className="text-base md:text-lg font-medium text-gray-700 tracking-wide mb-3">
              新鮮水果 · 產地直送
            </span>

            {/* 主標題 */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4"
              style={{ color: '#F97316', fontFamily: "'PingFang TC', 'Microsoft JhengHei', sans-serif" }}>
              爆甜多汁·幸福滿分
              {/* 裝飾小葉子 */}
              <span className="inline-block ml-2 text-green-500 align-top text-3xl md:text-4xl">🌿</span>
            </h1>

            {/* 副標 */}
            <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-8 max-w-md">
              嚴選當季最新鮮的水果，給你與家人最天然的美味！
            </p>

            {/* 3個特色標籤 */}
            <div className="flex flex-wrap gap-6 mb-8">
              {features.map((f) => (
                <div key={f.title} className="flex items-center gap-2.5 min-w-[140px]">
                  {/* 綠色圓形背景 icon */}
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-50 border border-green-200 flex items-center justify-center text-green-600">
                    {f.icon}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-800 leading-tight">{f.title}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA 按鈕 */}
            <Link
              href="/products"
              className="group inline-flex items-center gap-2 px-7 py-3 bg-[#F97316] hover:bg-[#EA580C] text-white font-bold text-base rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 active:scale-95"
            >
              <span>立即選購</span>
              <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-sm transition-transform duration-300 group-hover:translate-x-0.5">
                →
              </span>
            </Link>
          </div>

          {/* 右側圖片區 — 精確還原圖片中的水果大圖 */}
          <div className="w-full lg:w-[55%] flex justify-center lg:justify-end">
            <div className="relative w-full max-w-xl lg:max-w-2xl">
              <img
                src="/images/hero-fruits.jpg"
                alt="新鮮水果組合 - 芒果草莓葡萄橙子鳳梨"
                className="w-full h-auto object-cover rounded-none"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
