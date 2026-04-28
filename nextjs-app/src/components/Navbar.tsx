'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BRAND_NAME } from '@/lib/data';
import { useCart } from './CartProvider';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { cartItems, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = pathname === '/';
  const textColorClass = (scrolled || mobileMenuOpen || !isHome) ? 'text-[#1A2E1A]' : 'text-white';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${
          scrolled || mobileMenuOpen || !isHome ? 'bg-white/95 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'
        }`}
      >
        <div className="max-w-[1800px] mx-auto px-8 flex items-center justify-between">
          <Link
            href="/"
            className={`text-3xl font-serif font-bold tracking-tight z-50 relative transition-colors duration-500 ${textColorClass}`}
          >
            {BRAND_NAME}
          </Link>

          <div className={`hidden md:flex items-center gap-12 text-sm font-semibold tracking-widest uppercase transition-colors duration-500 ${textColorClass}`}>
            <Link href="/#products" className="hover:text-[#D97706] transition-colors">鮮果商城</Link>
            <Link href="/about" className="hover:text-[#D97706] transition-colors">關於我們</Link>
            <Link href="/journal" className="hover:text-[#D97706] transition-colors">美味誌</Link>
          </div>

          <div className={`flex items-center gap-6 z-50 relative transition-colors duration-500 ${textColorClass}`}>
            <button
              onClick={() => setIsCartOpen(true)}
              className="text-sm font-semibold uppercase tracking-widest hover:text-[#D97706] transition-colors hidden sm:flex items-center gap-2"
            >
              購物車 ({cartItems.length})
            </button>

            <button
              className={`block md:hidden focus:outline-none transition-colors duration-500 ${textColorClass}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      <div className={`fixed inset-0 bg-[#F5F2EB] z-40 flex flex-col justify-center items-center transition-all duration-500 ease-in-out ${
        mobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-10 pointer-events-none'
      }`}>
        <div className="flex flex-col items-center space-y-8 text-xl font-serif font-medium text-[#2C2A26]">
          <Link href="/#products" onClick={() => setMobileMenuOpen(false)} className="hover:opacity-60 transition-opacity">鮮果商城</Link>
          <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="hover:opacity-60 transition-opacity">關於我們</Link>
          <Link href="/journal" onClick={() => setMobileMenuOpen(false)} className="hover:opacity-60 transition-opacity">美味誌</Link>
          <button
            onClick={() => { setMobileMenuOpen(false); setIsCartOpen(true); }}
            className="hover:opacity-60 transition-opacity text-base uppercase tracking-widest font-sans mt-8"
          >
            購物車 ({cartItems.length})
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;