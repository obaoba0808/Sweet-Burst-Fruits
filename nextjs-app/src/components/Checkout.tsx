'use client';

import React from 'react';
import Link from 'next/link';
import { useCart } from './CartProvider';

const Checkout: React.FC = () => {
  const { cartItems, clearCart } = useCart();
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-[#FCF9F2] pt-24">
      <div className="max-w-4xl mx-auto px-6 md:px-12 py-16">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#1A2E1A] mb-12">結帳</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-[#3D4A3D] mb-8">您的購物車是空的</p>
            <Link href="/" className="text-[#D97706] font-bold uppercase tracking-widest">繼續購物</Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-xl font-bold text-[#1A2E1A] mb-6">訂單明細</h2>
              <div className="space-y-4 mb-8">
                {cartItems.map((item, index) => (
                  <div key={`${item.id}-${index}`} className="flex justify-between items-center py-4 border-b border-[#D6C7B6]">
                    <div>
                      <p className="font-bold text-[#1A2E1A]">{item.name}</p>
                      <p className="text-sm text-[#3D4A3D]">NT$ {item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between items-center text-xl font-bold text-[#1A2E1A]">
                <span>總計</span>
                <span>NT$ {total}</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-xl font-bold text-[#1A2E1A] mb-6">聯絡資訊</h2>
              <div className="space-y-4">
                <input type="text" placeholder="姓名" disabled className="w-full p-4 border border-[#D6C7B6] rounded-lg bg-gray-100 text-[#A8A29E]" />
                <input type="tel" placeholder="電話" disabled className="w-full p-4 border border-[#D6C7B6] rounded-lg bg-gray-100 text-[#A8A29E]" />
                <input type="email" placeholder="Email" disabled className="w-full p-4 border border-[#D6C7B6] rounded-lg bg-gray-100 text-[#A8A29E]" />
                <textarea placeholder="配送地址" disabled rows={3} className="w-full p-4 border border-[#D6C7B6] rounded-lg bg-gray-100 text-[#A8A29E]" />
              </div>
              <button
                disabled
                className="w-full mt-8 py-4 bg-[#A8A29E] text-white uppercase tracking-widest text-sm font-bold rounded-full cursor-not-allowed"
              >
                此為展示網站，暫不提供結帳功能
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;