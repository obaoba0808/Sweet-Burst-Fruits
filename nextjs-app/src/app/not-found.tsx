import Link from 'next/link';
import { BRAND_NAME } from '@/lib/data';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FCF9F2] flex flex-col items-center justify-center px-6">
      <h1 className="text-6xl md:text-8xl font-serif font-bold text-[#1A2E1A] mb-6">404</h1>
      <p className="text-xl md:text-2xl text-[#3D4A3D] font-medium mb-4">找不到您要的頁面</p>
      <p className="text-[#A8A29E] mb-12">就像一顆找不到的甜蜜果實...</p>
      <Link
        href="/"
        className="px-8 py-4 bg-[#2D5A27] text-white rounded-full font-bold uppercase tracking-widest hover:bg-[#1A2E1A] transition-colors"
      >
        回到 {BRAND_NAME}
      </Link>
    </div>
  );
}