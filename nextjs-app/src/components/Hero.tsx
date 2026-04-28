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
    title: '產地直達',
    desc: '果園新鮮配送',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: '品質保證',
    desc: '嚴格挑選把關',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: '快速配送',
    desc: '宅配到府服務',
  },
];

const Hero: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-100 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* 左右分欄 */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* 左側文字區 */}
          <div className="w-full lg:w-1/2 flex flex-col items-start">

            {/* 小標 */}
            <span className="text-sm font-medium text-gray-500 tracking-widest mb-4 uppercase">
              新鮮水果 · 產地直送
            </span>

            {/* 主標題 */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#F97316] leading-tight mb-6"
              style={{ fontFamily: "'PingFang TC', 'Microsoft JhengHei', sans-serif" }}>
              爆甜多汁 ·
              <br />
              幸福滿分
            </h1>

            {/* 副標 */}
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10 max-w-lg">
              嚴選當季最新鮮的水果，給你與家人最天然的美味！
            </p>

            {/* 3個特色標籤 */}
            <div className="flex flex-wrap gap-5 mb-12">
              {features.map((f) => (
                <div key={f.title} className="flex items-start gap-3 min-w-[160px]">
                  {/* 綠色圓形背景 icon */}
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white shadow-sm">
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
              href="/#products"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-[#F97316] hover:bg-[#EA580C] text-white font-bold text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
            >
              <span>立即選購</span>
              <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

          {/* 右側圖片區 */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg lg:max-w-xl rounded-3xl overflow-hidden shadow-2xl">
              {/* 裝飾葉片角標 */}
              <div className="absolute top-4 left-4 z-10 w-16 h-16 bg-green-500/20 rounded-full blur-xl" />
              <div className="absolute bottom-4 right-4 z-10 w-20 h-20 bg-orange-400/20 rounded-full blur-xl" />

              <img
                src="/images/hero-fruit.jpg"
                alt="豐富水果組合"
                className="w-full h-80 md:h-[480px] lg:h-[520px] object-cover rounded-3xl"
              />

              {/* 圖片底部標籤 */}
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-lg">
                <div className="text-green-700 font-bold text-sm">🌿 當季嚴選</div>
                <div className="text-gray-600 text-xs mt-0.5">來自優質產地</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
