import ProductGrid from '@/components/ProductGrid';
import { BRAND_NAME } from '@/lib/data';

export const metadata = {
  title: `鮮果商城 - ${BRAND_NAME}`,
  description: '嚴選高品質當季鮮果，產地直達您的餐桌。日本麝香葡萄、台灣愛文芒果、季節限定草莓…',
};

export default function ProductsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `鮮果商城 - ${BRAND_NAME}`,
    description: '嚴選高品質當季鮮果商城',
    url: 'https://sweet-burst-fruits.vercel.app/products',
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