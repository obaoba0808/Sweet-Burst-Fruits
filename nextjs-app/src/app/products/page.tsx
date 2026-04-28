import ProductGrid from '@/components/ProductGrid';
import { BRAND_NAME } from '@/lib/data';

const BASE_URL = 'https://obaoba0808.github.io/Sweet-Burst-Fruits';

export const metadata = {
  title: `鮮果商城 - ${BRAND_NAME}`,
  description: '嚴選高品質當季鮮果，產地直達您的餐桌。日本麝香葡萄、台灣愛文芒果、季節限定草莓…',
};

export default function ProductsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `鮮果商城 - ${BRAND_NAME}`,
    description: '嚴選高品質當季鮮果商城，提供巨峰麝香葡萄、愛文芒果、大湖草莓等當季鮮果禮盒。',
    url: `${BASE_URL}/products`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="pt-24">
        <ProductGrid />
      </div>
    </>
  );
}
