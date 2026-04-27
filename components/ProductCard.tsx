/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <div className="group flex flex-col gap-6 cursor-pointer" onClick={() => onClick(product)}>
      <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#EBE7DE]">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-110 sepia-[0.1]"
        />
        
        {/* Hover overlay with "Quick View" - minimalistic */}
        <div className="absolute inset-0 bg-[#1A2E1A]/0 group-hover:bg-[#1A2E1A]/5 transition-colors duration-500 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <span className="bg-[#D97706] text-white px-8 py-3 rounded-full text-sm uppercase tracking-widest font-bold shadow-lg">
                    查看詳情
                </span>
            </div>
        </div>
      </div>
      
      <div className="text-center">
        <p className="text-xs font-bold text-[#D97706] mb-2 tracking-widest uppercase">{product.category}</p>
        <h3 className="text-2xl font-serif font-bold text-[#1A2E1A] mb-2 group-hover:text-[#D97706] transition-colors">{product.name}</h3>
        <span className="text-lg font-bold text-[#1A2E1A] block">NT$ {product.price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
