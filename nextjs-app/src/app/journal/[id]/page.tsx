import { notFound } from 'next/navigation';
import JournalDetail from '@/components/JournalDetail';
import { JOURNAL_ARTICLES, BRAND_NAME } from '@/lib/data';
import { Metadata } from 'next';

const BASE_URL = 'https://obaoba0808.github.io/Sweet-Burst-Fruits';

export async function generateStaticParams() {
  return JOURNAL_ARTICLES.map((article) => ({ id: article.id.toString() }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const article = JOURNAL_ARTICLES.find((a) => a.id.toString() === id);
  if (!article) return { title: '找不到文章' };

  return {
    title: `${article.title} - 美味誌`,
    description: article.excerpt,
    openGraph: {
      title: `${article.title} - 美味誌`,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.date,
      authors: [BRAND_NAME],
      images: [{ url: article.image, width: 800, height: 450, alt: article.title }],
    },
    alternates: { canonical: `${BASE_URL}/journal/${article.id}` },
  };
}

export default async function JournalArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const article = JOURNAL_ARTICLES.find((a) => a.id.toString() === id);
  if (!article) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    image: article.image,
    datePublished: article.date,
    dateModified: article.date,
    author: { '@type': 'Organization', name: BRAND_NAME },
    publisher: { '@type': 'Organization', name: BRAND_NAME, logo: { '@type': 'ImageObject', url: `${BASE_URL}/images/logo.png` } },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE_URL}/journal/${article.id}` },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <JournalDetail article={article} />
    </>
  );
}
