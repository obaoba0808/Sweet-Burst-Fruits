'use client';

import React from 'react';
import Link from 'next/link';
import { useCart } from './CartProvider';

const CartDrawer: React.FC = () => {
  const { cartItems, isCartOpen, setIsCartOpen, removeFromCart } = useCart();
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsCartOpen(false)} />
      <div className="absolute right-0 top-0 h-full w-full max-w-lg bg-[#FCF9F2] shadow-2xl flex flex-col animate-slide-in-right">
        <div className="flex justify-between items-center p-8 border-b border-[#D6C7B6]">
          <h2 className="text-2xl font-serif font-bold text-[#1A2E1A]">購物車</h2>
          <button onClick={() => setIsCartOpen(false)} className="text-[#3D4A3D] hover:text-[#1A2E1A] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-8">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <svg className="w-24 h-24 text-[#D6C7B6] mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <p className="text-[#3D4A3D] font-medium mb-6">您的購物車是空的</p>
              <button onClick={() => setIsCartOpen(false)} className="text-[#D97706] font-bold uppercase tracking-widest text-sm hover:underline">
                繼續購物
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {cartItems.map((item, index) => (
                <div key={`${item.id}-${index}`} className="flex gap-4 items-start bg-white p-4 rounded-xl shadow-sm">
                  <img src={item.imageUrl} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                  <div className="flex-1">
                    <h3 className="font-serif font-bold text-[#1A2E1A]">{item.name}</h3>
                    <p className="text-sm text-[#3D4A3D]">NT$ {item.price}</p>
                  </div>
                  <button onClick={() => removeFromCart(index)} className="text-[#A8A29E] hover:text-red-500 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.54 48.54 0 00-3.32-.395m-4 .395L4.326 5.79" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="p-8 border-t border-[#D6C7B6] bg-white">
            <div className="flex justify-between items-center mb-6">
              <span className="text-lg font-bold text-[#1A2E1A]">總計</span>
              <span className="text-2xl font-bold text-[#1A2E1A]">NT$ {total}</span>
            </div>
            <Link
              href="/checkout"
              onClick={() => setIsCartOpen(false)}
              className="block w-full py-4 bg-[#2D5A27] text-white text-center uppercase tracking-widest text-sm font-bold rounded-full hover:bg-[#1A2E1A] transition-colors"
            >
              前往結帳
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;