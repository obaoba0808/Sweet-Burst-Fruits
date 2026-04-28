import React from 'react';
import Link from 'next/link';
import { JOURNAL_ARTICLES } from '@/lib/data';

const Journal: React.FC = () => {
  return (
    <section id="journal" className="bg-[#FCF9F2] py-32 px-6 md:px-12">
      <div className="max-w-[1800px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 pb-8 border-b border-[#D6C7B6]">
          <div>
            <span className="block text-xs font-bold uppercase tracking-[0.2em] text-[#D97706] mb-4">美味專欄</span>
            <h2 className="text-4xl md:text-6xl font-serif text-[#1A2E1A] font-bold">鮮果美味誌</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {JOURNAL_ARTICLES.map((article) => (
            <Link key={article.id} href={`/journal/${article.id}`} className="group cursor-pointer flex flex-col text-left">
              <div className="w-full aspect-[4/3] overflow-hidden mb-8 bg-white rounded-3xl shadow-lg">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col flex-1 text-left">
                <span className="text-xs font-bold uppercase tracking-widest text-[#D97706] mb-3">{article.date}</span>
                <h3 className="text-2xl font-serif text-[#1A2E1A] font-bold mb-4 leading-tight group-hover:text-[#2D5A27] transition-colors">{article.title}</h3>
                <p className="text-[#3D4A3D] font-medium leading-relaxed">{article.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journal;