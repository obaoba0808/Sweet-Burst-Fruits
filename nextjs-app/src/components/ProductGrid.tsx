'use client';

import React, { useState, useMemo } from 'react';
import { PRODUCTS } from '@/lib/data';
import ProductCard from './ProductCard';

const categories = ['全部', '當季熱銷', '嚴選進口', '禮盒推薦', '在地優質'];

const ProductGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('全部');

  const filteredProducts = useMemo(() => {
    if (activeCategory === '全部') return PRODUCTS;
    return PRODUCTS.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="products" className="py-32 px-6 md:px-12 bg-[#FCF9F2]">
      <div className="max-w-[1800px] mx-auto">
        <div className="flex flex-col items-center text-center mb-24 space-y-8">
          <h2 className="text-4xl md:text-6xl font-serif text-[#1A2E1A] font-bold">精選鮮果</h2>
          <div className="flex flex-wrap justify-center gap-8 pt-4 border-t border-[#D6D1C7]/50 w-full max-w-4xl">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-sm font-bold uppercase tracking-widest pb-1 border-b-2 transition-all duration-300 ${
                  activeCategory === cat
                    ? 'border-[#D97706] text-[#D97706]'
                    : 'border-transparent text-[#A8A29E] hover:text-[#1A2E1A]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;