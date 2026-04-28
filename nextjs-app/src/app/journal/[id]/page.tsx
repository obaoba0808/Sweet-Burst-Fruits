import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import JournalDetail from '@/components/JournalDetail';
import { JOURNAL_ARTICLES, BRAND_NAME } from '@/lib/data';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return JOURNAL_ARTICLES.map((article) => ({
    id: String(article.id),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const article = JOURNAL_ARTICLES.find((a) => String(a.id) === id);
  if (!article) return { title: '找不到文章' };

  return {
    title: `${article.title} - ${BRAND_NAME} 美味誌`,
    description: article.excerpt,
    openGraph: {
      title: `${article.title} - ${BRAND_NAME} 美味誌`,
      description: article.excerpt,
      images: [article.image],
      type: 'article',
      publishedTime: article.date,
    },
  };
}

export default async function JournalPage({ params }: Props) {
  const { id } = await params;
  const article = JOURNAL_ARTICLES.find((a) => String(a.id) === id);
  if (!article) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    image: article.image,
    datePublished: article.date,
    author: {
      '@type': 'Organization',
      name: BRAND_NAME,
    },
    publisher: {
      '@type': 'Organization',
      name: BRAND_NAME,
      logo: {
        '@type': 'ImageObject',
        url: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=1200',
      },
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <JournalDetail article={article} />
    </>
  );
}