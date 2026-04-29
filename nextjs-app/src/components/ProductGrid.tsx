'use client';

import React from 'react';
import Link from 'next/link';
import { PRODUCTS } from '@/lib/data';
import ProductCard from './ProductCard';

const ProductGrid: React.FC = () => {
  return (
    <section id="products" className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* 區塊標題 */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 flex items-center gap-2">
            <span className="text-green-600">🌿</span>
            熱銷推薦
          </h2>
          <Link 
            href="/products" 
            className="text-sm text-gray-500 hover:text-orange-500 font-medium transition-colors duration-200 flex items-center gap-1"
          >
            查看更多
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* 產品網格 */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {PRODUCTS.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
