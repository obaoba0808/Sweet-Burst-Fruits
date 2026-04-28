import JournalSection from '@/components/Journal';
import { BRAND_NAME } from '@/lib/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `${BRAND_NAME} 美味誌 - 鮮果知識與產地故事`,
  description: '了解水果保存方法、認識台灣各產地故事與挑選技巧。所有內容由爆甜水果舖原創撰寫。',
};

export default function JournalListPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: `${BRAND_NAME} 美味誌`,
    description: '鮮果知識、產地故事與挑選秘訣',
    publisher: {
      '@type': 'Organization',
      name: BRAND_NAME,
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <JournalSection />
    </>
  );
}
