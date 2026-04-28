import { notFound } from 'next/navigation';
import ProductDetail from '@/components/ProductDetail';
import { PRODUCTS, BRAND_NAME } from '@/lib/data';
import { Metadata } from 'next';

const BASE_URL = 'https://obaoba0808.github.io/Sweet-Burst-Fruits';

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({ id: product.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const product = PRODUCTS.find((p) => p.id === id);
  if (!product) return { title: '找不到商品' };

  return {
    title: `${product.name} - 鮮果商城`,
    description: product.description,
    openGraph: {
      title: `${product.name} - ${BRAND_NAME}`,
      description: product.description,
      type: 'website',
      images: [{ url: product.imageUrl, width: 600, height: 600, alt: product.name }],
    },
    alternates: { canonical: `${BASE_URL}/products/${product.id}` },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = PRODUCTS.find((p) => p.id === id);
  if (!product) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.imageUrl,
    brand: { '@type': 'Brand', name: BRAND_NAME },
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: 'TWD',
      availability: 'https://schema.org/InStock',
      url: `${BASE_URL}/products/${product.id}`,
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ProductDetail product={product} />
    </>
  );
}
