/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useState } from 'react';
import { BRAND_NAME } from '../constants';

interface FooterProps {
  onLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onLinkClick }) => {
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (!email) return;
    setSubscribeStatus('loading');
    setTimeout(() => {
      setSubscribeStatus('success');
      setEmail('');
    }, 1500);
  };

  return (
    <footer className="bg-[#1A2E1A] pt-24 pb-12 px-6 text-white/60">
      <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        
        <div className="md:col-span-4">
          <h4 className="text-3xl font-serif text-white mb-6 font-bold">{BRAND_NAME}</h4>
          <p className="max-w-xs font-medium leading-relaxed italic">
            極致甘甜，產地直達。專業嚴選當季高品質水果，為您帶來爆表的味覺饗宴。
          </p>
        </div>

        <div className="md:col-span-2">
          <h4 className="font-bold text-white mb-6 tracking-wide text-sm uppercase">鮮果商城</h4>
          <ul className="space-y-4 font-medium">
            <li><a href="#products" onClick={(e) => onLinkClick(e, 'products')} className="hover:text-[#D97706] transition-colors">全部商品</a></li>
            <li><a href="#products" onClick={(e) => onLinkClick(e, 'products')} className="hover:text-[#D97706] transition-colors">當季熱銷</a></li>
            <li><a href="#products" onClick={(e) => onLinkClick(e, 'products')} className="hover:text-[#D97706] transition-colors">禮盒推薦</a></li>
          </ul>
        </div>
        
        <div className="md:col-span-2">
          <h4 className="font-bold text-white mb-6 tracking-wide text-sm uppercase">關於我們</h4>
          <ul className="space-y-4 font-medium">
            <li><a href="#about" onClick={(e) => onLinkClick(e, 'about')} className="hover:text-[#D97706] transition-colors">品牌故事</a></li>
            <li><a href="#about" onClick={(e) => onLinkClick(e, 'about')} className="hover:text-[#D97706] transition-colors">農客契作</a></li>
            <li><a href="#journal" onClick={(e) => onLinkClick(e, 'journal')} className="hover:text-[#D97706] transition-colors">美味誌</a></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <h4 className="font-bold text-white mb-6 tracking-wide text-sm uppercase">訂閱優惠電子報</h4>
          <div className="flex flex-col gap-4">
            <input 
              type="email" 
              placeholder="請輸入您的電子信箱" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={subscribeStatus === 'loading' || subscribeStatus === 'success'}
              className="bg-transparent border-b border-white/30 py-2 text-lg outline-none focus:border-[#D97706] transition-colors placeholder-white/30 text-white disabled:opacity-50" 
            />
            <button 
              onClick={handleSubscribe}
              disabled={subscribeStatus !== 'idle' || !email}
              className="self-start text-sm font-bold uppercase tracking-widest mt-2 hover:text-[#D97706] disabled:cursor-default disabled:opacity-50 transition-colors"
            >
              {subscribeStatus === 'idle' && '立即訂閱'}
              {subscribeStatus === 'loading' && '訂閱中...'}
              {subscribeStatus === 'success' && '感謝您的訂閱'}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1800px] mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs uppercase tracking-widest opacity-60">
        <p>© 2026 爆甜水果行 版權所有</p>
        <p className="mt-4 md:mt-0">產地直送 | 真心選購</p>
      </div>
    </footer>
  );
};

export default Footer;
