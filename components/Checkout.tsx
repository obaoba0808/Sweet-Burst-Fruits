
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';
import { Product } from '../types';

interface CheckoutProps {
  items: Product[];
  onBack: () => void;
}

const Checkout: React.FC<CheckoutProps> = ({ items, onBack }) => {
  const subtotal = items.reduce((sum, item) => sum + item.price, 0);
  const shipping = 0; // Free shipping
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen pt-24 pb-24 px-6 bg-[#FCF9F2] animate-fade-in-up">
      <div className="max-w-6xl mx-auto">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#2D5A27] hover:text-[#D97706] transition-colors mb-12"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 group-hover:-translate-x-1 transition-transform">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          返回商店
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Form */}
          <div>
            <h1 className="text-4xl font-serif text-[#1A2E1A] mb-4 font-bold">結帳</h1>
            <p className="text-sm text-[#D97706] font-bold mb-12">此為展示網站，目前尚未開啟線上支付功能。</p>
            
            <div className="space-y-12">
              {/* Section 1: Contact */}
              <div>
                <h2 className="text-xl font-serif text-[#1A2E1A] font-bold mb-6">聯絡資訊</h2>
                <div className="space-y-4">
                   <input type="email" placeholder="電子信箱" className="w-full bg-transparent border-b border-[#D6C7B6] py-3 text-[#1A2E1A] placeholder-[#A8A29E] outline-none focus:border-[#D97706] transition-colors cursor-not-allowed" disabled />
                   <div className="flex items-center gap-2">
                     <input type="checkbox" id="newsletter" className="accent-[#2D5A27] cursor-not-allowed" disabled />
                     <label htmlFor="newsletter" className="text-sm text-[#3D4A3D] font-medium cursor-not-allowed">我也想收到優惠訊息與美味日誌</label>
                   </div>
                </div>
              </div>

              {/* Section 2: Shipping */}
              <div>
                <h2 className="text-xl font-serif text-[#1A2E1A] font-bold mb-6">收件地址</h2>
                <div className="space-y-4">
                   <div className="grid grid-cols-2 gap-4">
                      <input type="text" placeholder="姓氏" className="w-full bg-transparent border-b border-[#D6C7B6] py-3 text-[#1A2E1A] placeholder-[#A8A29E] outline-none focus:border-[#D97706] transition-colors cursor-not-allowed" disabled />
                      <input type="text" placeholder="名字" className="w-full bg-transparent border-b border-[#D6C7B6] py-3 text-[#1A2E1A] placeholder-[#A8A29E] outline-none focus:border-[#D97706] transition-colors cursor-not-allowed" disabled />
                   </div>
                   <input type="text" placeholder="地址" className="w-full bg-transparent border-b border-[#D6C7B6] py-3 text-[#1A2E1A] placeholder-[#A8A29E] outline-none focus:border-[#D97706] transition-colors cursor-not-allowed" disabled />
                   <input type="text" placeholder="樓層、公寓（選填）" className="w-full bg-transparent border-b border-[#D6C7B6] py-3 text-[#1A2E1A] placeholder-[#A8A29E] outline-none focus:border-[#D97706] transition-colors cursor-not-allowed" disabled />
                   <div className="grid grid-cols-2 gap-4">
                      <input type="text" placeholder="城市" className="w-full bg-transparent border-b border-[#D6C7B6] py-3 text-[#1A2E1A] placeholder-[#A8A29E] outline-none focus:border-[#D97706] transition-colors cursor-not-allowed" disabled />
                      <input type="text" placeholder="郵遞區號" className="w-full bg-transparent border-b border-[#D6C7B6] py-3 text-[#1A2E1A] placeholder-[#A8A29E] outline-none focus:border-[#D97706] transition-colors cursor-not-allowed" disabled />
                   </div>
                </div>
              </div>

               {/* Section 3: Payment (Mock) */}
              <div>
                <h2 className="text-xl font-serif text-[#1A2E1A] font-bold mb-6">付款方式</h2>
                <div className="p-6 border border-[#D6C7B6] bg-white/50 space-y-4 rounded-2xl">
                   <p className="text-sm text-[#3D4A3D] mb-2 font-medium">所有交易均經加密，確保您的財產安全。</p>
                   <input type="text" placeholder="信用卡號" className="w-full bg-transparent border-b border-[#D6C7B6] py-3 text-[#1A2E1A] placeholder-[#A8A29E] outline-none focus:border-[#D97706] transition-colors cursor-not-allowed" disabled />
                   <div className="grid grid-cols-2 gap-4">
                      <input type="text" placeholder="有效期限 (MM/YY)" className="w-full bg-transparent border-b border-[#D6C7B6] py-3 text-[#1A2E1A] placeholder-[#A8A29E] outline-none focus:border-[#D97706] transition-colors cursor-not-allowed" disabled />
                      <input type="text" placeholder="安全碼" className="w-full bg-transparent border-b border-[#D6C7B6] py-3 text-[#1A2E1A] placeholder-[#A8A29E] outline-none focus:border-[#D97706] transition-colors cursor-not-allowed" disabled />
                   </div>
                </div>
              </div>

              <div>
                <button 
                    disabled
                    className="w-full py-6 bg-[#A8A29E] text-white uppercase tracking-widest text-base font-bold cursor-not-allowed opacity-80 rounded-full shadow-lg"
                >
                    立即付款 — NT$ {total}
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Summary */}
          <div className="lg:pl-12 lg:border-l border-[#D6C7B6]">
            <h2 className="text-xl font-serif text-[#1A2E1A] font-bold mb-8">訂單摘要</h2>
            
            <div className="space-y-6 mb-8">
               {items.map((item, idx) => (
                 <div key={idx} className="flex gap-4">
                    <div className="w-16 h-16 bg-white rounded-lg relative overflow-hidden shadow-sm">
                       <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                       <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#D97706] text-white text-[10px] flex items-center justify-center rounded-full font-bold">1</span>
                    </div>
                    <div className="flex-1">
                       <h3 className="font-serif font-bold text-[#1A2E1A] text-base">{item.name}</h3>
                       <p className="text-xs text-[#D97706] font-bold uppercase">{item.category}</p>
                    </div>
                    <span className="text-sm font-bold text-[#1A2E1A]">NT$ {item.price}</span>
                 </div>
               ))}
            </div>

            <div className="border-t border-[#D6C7B6] pt-6 space-y-4">
              <div className="flex justify-between text-sm text-[#3D4A3D] font-bold">
                 <span>小計</span>
                 <span>NT$ {subtotal}</span>
              </div>
              <div className="flex justify-between text-sm text-green-600 font-bold">
                 <span>運費</span>
                 <span>免運費</span>
              </div>
            </div>
            
            <div className="border-t border-[#D6C7B6] mt-6 pt-6">
               <div className="flex justify-between items-center">
                 <span className="font-serif text-2xl text-[#1A2E1A] font-bold">總計</span>
                 <div className="flex items-end gap-2">
                   <span className="text-xs text-[#A8A29E] mb-1 font-bold tracking-tighter">TWD</span>
                   <span className="font-serif text-3xl text-[#1A2E1A] font-bold">NT$ {total}</span>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Checkout;