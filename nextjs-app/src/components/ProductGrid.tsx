'use client';

import React from 'react';
import Link from 'next/link';
import { PRODUCTS } from '@/lib/data';
import ProductCard from './ProductCard';

const ProductGrid: React.FC = () => {
  return (
    <section id="products" className="py-16 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* 區塊標題 */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            🌿 熱銷推薦
          </h2>
          <Link 
            href="/products" 
            className="text-orange-500 hover:text-orange-600 font-medium transition-colors duration-200"
          >
            查看更多 →
          </Link>
        </div>

        {/* 產品網格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;