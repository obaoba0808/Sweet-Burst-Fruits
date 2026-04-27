/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const PROMOTIONS = [
  {
    id: 1,
    title: "夏季芒果慶典",
    subtitle: "屏東枋山愛文芒果，限時 88 折優惠",
    discount: "88折",
    bgColor: "bg-orange-500",
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 2,
    title: "麝香葡萄週",
    subtitle: "日本空運麝香葡萄，滿 3000 現折 300",
    discount: "現折$300",
    bgColor: "bg-green-700",
    image: "https://images.unsplash.com/photo-1537084642907-629340c7e59c?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 3,
    title: "首次購物紅利",
    subtitle: "新會員首單滿 $1000，即贈嚴選水果禮盒乙份",
    discount: "新客好禮",
    bgColor: "bg-red-600",
    image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&q=80&w=1000"
  }
];

const Promotions: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % PROMOTIONS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 px-6 md:px-12 bg-[#FCF9F2]">
      <div className="max-w-[1800px] mx-auto overflow-hidden relative rounded-[2rem] shadow-2xl h-[400px] md:h-[500px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={PROMOTIONS[currentIndex].id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className={`absolute inset-0 flex flex-col md:flex-row items-center overflow-hidden ${PROMOTIONS[currentIndex].bgColor}`}
          >
            {/* Image Section */}
            <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden">
               <img 
                 src={PROMOTIONS[currentIndex].image} 
                 alt={PROMOTIONS[currentIndex].title}
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-black/20 md:bg-transparent"></div>
            </div>

            {/* Text Section */}
            <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center items-start text-white relative z-10">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white/20 backdrop-blur-md px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
              >
                {PROMOTIONS[currentIndex].discount}
              </motion.span>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight"
              >
                {PROMOTIONS[currentIndex].title}
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg md:text-xl font-medium text-white/80 max-w-md"
              >
                {PROMOTIONS[currentIndex].subtitle}
              </motion.p>
              
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-10 px-10 py-4 bg-white text-black font-bold uppercase tracking-widest rounded-full hover:bg-black hover:text-white transition-all shadow-xl active:scale-95"
              >
                查看活動詳情
              </motion.button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Indicators */}
        <div className="absolute bottom-8 right-8 flex gap-3 z-20">
          {PROMOTIONS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1 mx-1 rounded-full transition-all duration-500 ${
                currentIndex === idx ? 'w-8 bg-white' : 'w-2 bg-white/40'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Promotions;
