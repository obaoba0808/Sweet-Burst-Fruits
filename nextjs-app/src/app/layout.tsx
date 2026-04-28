import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import Assistant from '@/components/Assistant';
import { CartProvider } from '@/components/CartProvider';
import { BRAND_NAME } from '@/lib/data';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sweet-burst-fruits.vercel.app'),
  title: `${BRAND_NAME} - 極致甘甜 產地直達`,
  description: `${BRAND_NAME} - 嚴選高品質當季鮮果，產地直達您的餐桌。`,
  keywords: ['水果', '鮮果', '爆甜', '愛文芒果', '麝香葡萄', '草莓', '西瓜'],
  openGraph: {
    title: `${BRAND_NAME} - 極致甘甜 產地直達`,
    description: '嚴選高品質當季鮮果，產地直達您的餐桌。',
    images: ['https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=1200'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-[#FCF9F2] text-[#1A2E1A]">
        <CartProvider>
          <Navbar />
          {children}
          <Footer />
          <CartDrawer />
          <Assistant />
        </CartProvider>
      </body>
    </html>
  );
}