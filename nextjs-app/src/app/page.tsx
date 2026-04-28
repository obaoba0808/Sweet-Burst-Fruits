import Hero from '@/components/Hero';
import Promotions from '@/components/Promotions';
import ProductGrid from '@/components/ProductGrid';
import About from '@/components/About';
import Journal from '@/components/Journal';
import { BRAND_NAME } from '@/lib/data';

const BASE_URL = 'https://obaoba0808.github.io/Sweet-Burst-Fruits';

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${BASE_URL}/#website`,
        url: BASE_URL,
        name: BRAND_NAME,
        description: '嚴選高品質當季鮮果，產地直達您的餐桌。',
        publisher: { '@id': `${BASE_URL}/#organization` },
        potentialAction: {
          '@type': 'SearchAction',
          target: `${BASE_URL}/products?q={search_term_string}`,
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'LocalBusiness',
        '@id': `${BASE_URL}/#organization`,
        name: BRAND_NAME,
        description: '嚴選高品質當季鮮果，產地直達',
        url: BASE_URL,
        telephone: '+886-2-2345-6789',
        address: { '@type': 'PostalAddress', addressLocality: '台北', addressCountry: 'TW' },
        priceRange: '$$',
        image: `${BASE_URL}/images/hero-fruits.jpg`,
        sameAs: [],
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '09:00',
          closes: '21:00',
        },
      },
    ],
  };

  return (
    <>
      {/* DEBUG: v2 - remove after confirming deployment */}
      <div style={{position:'fixed',top:0,left:0,background:'red',color:'white',padding:'4px 12px',zIndex:99999,fontSize:'14px'}}>✅ DEPLOY v2 - 04/29</div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />
      <Promotions />
      <ProductGrid />
      <About />
      <Journal />
    </>
  );
}
