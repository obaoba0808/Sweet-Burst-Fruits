'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BRAND_NAME } from '@/lib/data';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  return (
    <footer className="bg-[#1A2E1A] text-[#F5F2EB] py-24 px-6 md:px-12">
      <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-12">
        <div className="md:col-span-1">
          <h3 className="text-3xl font-serif font-bold mb-6">{BRAND_NAME}</h3>
          <p className="text-[#A8A29E] font-medium leading-relaxed">
            源於土地，止於鮮甜。<br/>
            產地直達的極致甘甜。
          </p>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-[#D97706]">探索</h4>
          <ul className="space-y-3">
            <li><Link href="/" className="text-[#A8A29E] hover:text-white transition-colors">鮮果商城</Link></li>
            <li><Link href="/about" className="text-[#A8A29E] hover:text-white transition-colors">關於我們</Link></li>
            <li><Link href="/journal" className="text-[#A8A29E] hover:text-white transition-colors">美味誌</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-[#D97706]">服務</h4>
          <ul className="space-y-3">
            <li><span className="text-[#A8A29E]">配送說明</span></li>
            <li><span className="text-[#A8A29E]">退換貨政策</span></li>
            <li><span className="text-[#A8A29E]">常見問題</span></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-[#D97706]">訂閱電子報</h4>
          <p className="text-[#A8A29E] mb-4 text-sm">掌握最新鮮果資訊與優惠活動</p>
          <div className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="您的 Email"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 text-sm"
            />
            <button className="px-6 py-3 bg-[#D97706] text-white rounded-lg text-sm font-bold hover:bg-[#B45309] transition-colors">
              訂閱
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1800px] mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[#A8A29E] text-sm">© 2026 {BRAND_NAME}. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="text-[#A8A29E] hover:text-white transition-colors text-sm">隱私權政策</a>
          <a href="#" className="text-[#A8A29E] hover:text-white transition-colors text-sm">使用條款</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;