import AboutSection from '@/components/About';
import { BRAND_NAME } from '@/lib/data';
import { Metadata } from 'next';

const BASE_URL = 'https://obaoba0808.github.io/Sweet-Burst-Fruits';

export const metadata: Metadata = {
  title: `關於 ${BRAND_NAME} - 產地直送的品牌故事`,
  description: '爆甜水果舖致力於將台灣各地最優質的水果直接送達消費者手中，從果園到餐桌的極致鮮甜。',
};

export default function AboutPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: `關於 ${BRAND_NAME}`,
    description: '爆甜水果行的品牌故事與理念，嚴選高品質當季鮮果，產地直達您的餐桌。',
    mainEntity: {
      '@type': 'Organization',
      name: BRAND_NAME,
      description: '嚴選高品質當季鮮果，產地直達',
      url: BASE_URL,
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <AboutSection />
    </>
  );
}
