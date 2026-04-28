import JournalSection from '@/components/Journal';
import { BRAND_NAME } from '@/lib/data';

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