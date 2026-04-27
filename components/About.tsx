/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-[#FCF9F2]">
      
      {/* Introduction / Story */}
      <div className="py-24 px-6 md:px-12 max-w-[1800px] mx-auto flex flex-col md:flex-row items-start gap-16 md:gap-32">
        <div className="md:w-1/3">
          <h2 className="text-4xl md:text-6xl font-serif text-[#1A2E1A] leading-tight font-bold">
            源於土地，<br/> 止於鮮甜。
          </h2>
        </div>
        <div className="md:w-2/3 max-w-2xl">
          <p className="text-lg md:text-xl text-[#3D4A3D] font-medium leading-relaxed mb-8">
            「爆甜水果行」創立於一個簡單的信念：每個人都值得品嚐到最新鮮、最甘甜的果實。我們不只是水果商，我們是陽光與甘霖的搬運工。
          </p>
          <p className="text-lg md:text-xl text-[#3D4A3D] font-medium leading-relaxed mb-8">
            在快速收成、追求產量的時代，我們堅持「完熟採收」。我們深入產地，與不願妥協的老農合作，守護著那一顆顆在枝頭吸飽養分的紅寶石與翡翠。
          </p>
          <img 
            src="https://images.unsplash.com/photo-1595190833423-43da10feb618?auto=format&fit=crop&q=80&w=1200" 
            alt="Fresh fruit crates" 
            className="w-full h-[400px] object-cover mt-12 shadow-2xl rounded-2xl"
          />
          <p className="text-sm font-bold uppercase tracking-widest text-[#D97706] mt-4">
            產地直送的堅持
          </p>
        </div>
      </div>

      {/* Philosophy Blocks */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
        <div className="order-2 lg:order-1 relative h-[500px] lg:h-auto overflow-hidden group">
           <img 
             src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1200" 
             alt="Vibrant market stall" 
             className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
           />
        </div>
        <div className="order-1 lg:order-2 flex flex-col justify-center p-12 lg:p-24 bg-[#E8F5E9]">
           <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#2D5A27] mb-6">嚴選品質</span>
           <h3 className="text-4xl md:text-5xl font-serif mb-8 text-[#1A2E1A] leading-tight font-bold">
             不夠爆甜，<br/> 絕不上架。
           </h3>
           <p className="text-lg text-[#3D4A3D] font-medium leading-relaxed mb-12 max-w-md">
             每一批水果進场，都要經過嚴格的甜度測試與外觀篩選。我們對糖度的執著，是為了看見您品嚐時驚艷的表情。
           </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
        <div className="flex flex-col justify-center p-12 lg:p-24 bg-[#1A2E1A] text-[#F5F2EB]">
           <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D97706] mb-6">產地直達</span>
           <h3 className="text-4xl md:text-5xl font-serif mb-8 text-[#F5F2EB] leading-tight font-bold">
             從枝頭到餐桌。
           </h3>
           <p className="text-lg text-white/80 font-normal leading-relaxed mb-12 max-w-md">
             我們建立與小農的直供網絡，省去層層疊疊的運銷，確保您手中的果實，還帶著產地的晶瑩露水。
           </p>
        </div>
        <div className="relative h-[500px] lg:h-auto overflow-hidden group">
           <img 
             src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=1200" 
             alt="Lush orchard" 
             className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105 brightness-90"
           />
        </div>
      </div>
    </section>

  );
};

export default About;