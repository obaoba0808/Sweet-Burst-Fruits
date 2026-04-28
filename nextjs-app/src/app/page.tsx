import Hero from '@/components/Hero';
import Features from '@/components/Features';
import ProductGrid from '@/components/ProductGrid';
import About from '@/components/About';
import Journal from '@/components/Journal';
import { BRAND_NAME, PRODUCTS, JOURNAL_ARTICLES } from '@/lib/data';

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': 'https://sweet-burst-fruits.vercel.app/#website',
        url: 'https://sweet-burst-fruits.vercel.app',
        name: BRAND_NAME,
        description: '嚴選高品質當季鮮果，產地直達您的餐桌。',
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://sweet-burst-fruits.vercel.app/products/{search_term_string}',
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'LocalBusiness',
        '@id': 'https://sweet-burst-fruits.vercel.app/#business',
        name: BRAND_NAME,
        description: '嚴選高品質當季鮮果，產地直達。',
        url: 'https://sweet-burst-fruits.vercel.app',
        telephone: '+886-2-12345678',
        address: {
          '@type': 'PostalAddress',
          addressLocality: '台北市',
          addressCountry: 'TW',
        },
        priceRange: '$$',
        image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=1200',
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />
      <Features />
      <ProductGrid />
      <About />
      <Journal />
    </>
  );
}