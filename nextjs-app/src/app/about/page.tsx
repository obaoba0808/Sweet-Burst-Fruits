import AboutSection from '@/components/About';
import { BRAND_NAME } from '@/lib/data';

export default function AboutPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: `關於 ${BRAND_NAME}`,
    description: '爆甜水果行的品牌故事與理念',
    mainEntity: {
      '@type': 'Organization',
      name: BRAND_NAME,
      description: '嚴選高品質當季鮮果，產地直達',
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <AboutSection />
    </>
  );
}