import React from 'react';
import Link from 'next/link';
import { JournalArticle } from '@/lib/types';
import { BRAND_NAME } from '@/lib/data';

interface JournalDetailProps {
  article: JournalArticle;
}

const JournalDetail: React.FC<JournalDetailProps> = ({ article }) => {
  return (
    <div className="min-h-screen bg-[#FCF9F2] animate-fade-in-up">
      <div className="w-full h-[50vh] md:h-[60vh] relative overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div className="max-w-3xl mx-auto px-6 md:px-12 -mt-32 relative z-10 pb-32">
        <div className="bg-[#FCF9F2] p-8 md:p-16 shadow-2xl rounded-3xl">
          <div className="flex justify-between items-center mb-12 border-b border-[#D6C7B6] pb-8">
            <Link
              href="/journal"
              className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#2D5A27] hover:text-[#D97706] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 group-hover:-translate-x-1 transition-transform">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
              返回美味誌
            </Link>
            <span className="text-sm font-bold uppercase tracking-widest text-[#D97706]">{article.date}</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-serif text-[#1A2E1A] mb-12 leading-tight text-center font-bold">
            {article.title}
          </h1>

          <div className="prose prose-stone prose-lg mx-auto font-medium leading-loose text-[#3D4A3D]">
            {article.content.map((block, idx) => {
              if (block.type === 'paragraph') {
                return <p key={idx} className="mb-6 text-[#5D5A53]">{block.text}</p>;
              }
              if (block.type === 'blockquote') {
                return (
                  <blockquote key={idx} className="border-l-2 border-[#2C2A26] pl-6 italic text-xl text-[#2C2A26] my-10 font-serif">
                    {block.text}
                  </blockquote>
                );
              }
              if (block.type === 'poem') {
                return (
                  <div key={idx} className="my-12 p-8 bg-[#EBE7DE] font-serif text-[#2C2A26] italic text-center whitespace-pre-line">
                    {block.text}
                  </div>
                );
              }
              return null;
            })}
          </div>

          <div className="mt-16 pt-12 border-t border-[#D6C7B6] flex justify-center">
            <span className="text-3xl font-serif italic font-bold text-[#2D5A27]">{BRAND_NAME}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JournalDetail;