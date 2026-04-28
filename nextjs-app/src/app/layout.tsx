import type { Metadata } from 'next';
import { Noto_Sans_TC } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/components/CartProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BRAND_NAME } from '@/lib/data';

const notoSansTC = Noto_Sans_TC({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-noto-sans-tc',
});

const BASE_URL = 'https://obaoba0808.github.io/Sweet-Burst-Fruits';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: `${BRAND_NAME} - 極致甘甜 產地直達`,
    template: `%s - ${BRAND_NAME}`,
  },
  description: `${BRAND_NAME} - 嚴選高品質當季鮮果，產地直達您的餐桌。日本麝香葡萄、台灣愛文芒果、季節限定草莓，新鮮配送。`,
  keywords: ['水果', '鮮果', '水果禮盒', '產地直送', '台灣水果', '日本水果', '麝香葡萄', '愛文芒果', '草莓', BRAND_NAME],
  authors: [{ name: BRAND_NAME }],
  creator: BRAND_NAME,
  publisher: BRAND_NAME,
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: 'website',
    locale: 'zh_TW',
    url: BASE_URL,
    siteName: BRAND_NAME,
    title: `${BRAND_NAME} - 極致甘甜 產地直達`,
    description: '嚴選高品質當季鮮果，產地直達您的餐桌',
    images: [{ url: '/images/hero-fruits.jpg', width: 1200, height: 630, alt: `${BRAND_NAME} 鮮果禮盒` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${BRAND_NAME} - 極致甘甜 產地直達`,
    description: '嚴選高品質當季鮮果，產地直達您的餐桌',
    images: ['/images/hero-fruits.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: BASE_URL },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-TW" className={notoSansTC.variable}>
      <body className="font-sans antialiased">
        <CartProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
