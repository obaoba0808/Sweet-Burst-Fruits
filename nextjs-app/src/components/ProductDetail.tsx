'use client';

import React from 'react';
import Link from 'next/link';
import { Product } from '@/lib/types';
import { useCart } from './CartProvider';

interface ProductDetailProps {
  product: Product;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="pt-24 min-h-screen bg-[#FCF9F2] animate-fade-in-up">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 pb-24">
        <Link
          href="/#products"
          className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#2D5A27] hover:text-[#D97706] transition-colors mb-8"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 group-hover:-translate-x-1 transition-transform">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          返回商店
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <div className="flex flex-col gap-4">
            <div className="w-full aspect-[4/5] bg-white rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-full object-cover animate-fade-in-up"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center max-w-xl">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-xs font-bold text-white bg-[#D97706] px-3 py-1 rounded-full uppercase tracking-widest">{product.category}</span>
              {product.origin && (
                <span className="text-xs font-bold text-[#2D5A27] uppercase tracking-widest">產地：{product.origin}</span>
              )}
            </div>
            <h1 className="text-4xl md:text-6xl font-serif text-[#1A2E1A] mb-4 font-bold">{product.name}</h1>
            <div className="flex items-baseline gap-4 mb-8">
              <span className="text-3xl font-bold text-[#1A2E1A]">NT$ {product.price}</span>
              {product.weight && (
                <span className="text-sm text-[#3D4A3D] font-medium">/ {product.weight}</span>
              )}
            </div>

            <p className="text-[#3D4A3D] leading-relaxed font-medium text-lg mb-8 border-b border-[#D6C7B6] pb-8">
              {product.longDescription || product.description}
            </p>

            <div className="flex flex-col gap-6">
              <button
                onClick={() => addToCart(product)}
                className="w-full py-6 bg-[#2D5A27] text-white uppercase tracking-widest text-base font-bold rounded-full hover:bg-[#1A2E1A] transition-all shadow-xl hover:scale-[1.02] active:scale-[0.98]"
              >
                加入購物車 — NT$ {product.price}
              </button>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {product.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white/50 p-4 rounded-xl border border-[#D6C7B6]/30">
                    <svg className="w-5 h-5 text-[#D97706]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-bold text-[#1A2E1A]">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;