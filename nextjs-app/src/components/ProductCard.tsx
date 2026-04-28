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

  return (
    <Link 
      href={`/products/${product.id}`} 
      className="group block bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden"
    >
      {/* 產品圖片區 */}
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* 底部文字區 */}
      <div className="p-4 relative">
        {/* 產品名稱 */}
        <h3 className="text-lg font-bold text-gray-900 mb-1 truncate">
          {product.name}
        </h3>
        
        {/* 簡短描述 */}
        <p className="text-sm text-gray-500 truncate mb-2">
          {product.tagline}
        </p>
        
        {/* 價格 */}
        <span className="text-lg font-bold" style={{ color: '#F97316' }}>
          NT$ {product.price}
        </span>

        {/* 購物車按鈕 */}
        <button
          onClick={handleAddToCart}
          className="absolute bottom-4 right-4 w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors duration-200 shadow-md hover:shadow-lg"
          aria-label="加入購物車"
        >
          🛒
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;