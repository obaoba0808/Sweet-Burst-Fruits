'use client';

import React from 'react';
import Link from 'next/link';
import { Product } from '@/lib/types';
import { useCart } from './CartProvider';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  const getUnit = (weight?: string) => {
    if (!weight) return '份';
    if (weight.includes('台斤')) return '盒';
    if (weight.includes('串')) return '盒';
    return '顆';
  };

  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100">
      {/* 產品圖片區 */}
      <Link href={`/products/${product.id}`} className="block relative w-full aspect-[4/3] overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </Link>

      {/* 底部文字區 */}
      <div className="p-4 relative">
        {/* 產品名稱 */}
        <h3 className="text-base font-bold text-gray-900 mb-1 truncate">
          {product.name}
        </h3>
        
        {/* 簡短描述 */}
        <p className="text-xs md:text-sm text-gray-500 truncate mb-2">
          {product.tagline}
        </p>
        
        {/* 價格 */}
        <span className="text-base font-bold" style={{ color: '#F97316' }}>
          NT$ {product.price} / {getUnit(product.weight)}
        </span>

        {/* 購物車按鈕 */}
        <button
          onClick={handleAddToCart}
          className="absolute bottom-4 right-4 w-9 h-9 bg-orange-500 text-white rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors duration-200 shadow-md"
          aria-label="加入購物車"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
