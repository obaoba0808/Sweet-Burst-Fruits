/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product, JournalArticle } from './types';

export const BRAND_NAME = '爆甜水果舖';

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: '巨峰麝香葡萄',
    tagline: '皮薄多汁·香氣濃郁',
    description: '日本品種，甜度極高，果肉Q彈，入口即化。',
    longDescription: '嚴選日本進口麝香葡萄，果粒碩大飽滿，甜度高達18度以上，皮薄肉Q無籽，清洗即可食用，是送禮自用兩相宜的首選。每一串皆由專業農夫手工採收，確保最佳品質。',
    price: 1280,
    category: '當季鮮果',
    origin: '日本麝香葡萄園',
    weight: '約2串禮盒組',
    imageUrl: '/images/p1-grape.jpg',
    gallery: [
      '/images/p1-cherry.jpg',
      '/images/hero-fruit.jpg'
    ],
    features: ['產地直送保鮮', '甜度達18度以上', '無籽即食']
  },
  {
    id: 'p2',
    name: '愛文芒果',
    tagline: '香甜多汁·產地直送',
    description: '台灣屏東枋寮愛文芒果，陽光充足，香甜浓郁。',
    longDescription: '來自屏東枋寮的優質愛文芒果，採用自然農法種植，在充足的陽光下成長，果肉金黃細緻，香味浓郁，口感绵密多汁。每顆皆達到最佳的成熟度採收，甜度均勻，入口即感受濃郁芒果香氣。',
    price: 880,
    category: '當季熱銷',
    origin: '屏東枋寮芒果園',
    weight: '約2入5台斤禮盒',
    imageUrl: '/images/p2-mango.jpg',
    gallery: [
      '/images/p2-mango-2.jpg',
      '/images/hero-fruit.jpg'
    ],
    features: ['產地直送', '自然農法', '自然成熟']
  },
  {
    id: 'p3',
    name: '大湖草莓',
    tagline: '大湖直送·保證新鮮',
    description: '苗栗大湖草莓，色泽鲜红饱满，香甜可口。',
    longDescription: '來自苗栗大湖草莓專區的頂級草莓，每顆皆為專人手工採摘，色澤鮮紅有光澤，果肉紧实多汁，酸甜比例完美。大湖草莓因日夜溫差大而擁有絕佳甜度，是冬季最受歡迎的水果之一，送禮自用皆宜。',
    price: 1580,
    category: '禮盒精選',
    origin: '苗栗大湖草莓園',
    weight: '2盒組（共600g）',
    imageUrl: '/images/p3-strawberry.jpg',
    gallery: [
      '/images/p3-strawberry-2.jpg',
      '/images/hero-fruit.jpg'
    ],
    features: ['低溫保鮮配送', '大湖產地直送', '保證無農藥']
  },
  {
    id: 'p4',
    name: '台南小玉西瓜',
    tagline: '清脆爽口·夏日消暑',
    description: '台南學甲小玉西瓜，皮薄肉甜，夏季首選。',
    longDescription: '台南學甲特產小玉西瓜，生長於曾文溪畔的沙質土壤，排水良好、日照充足，果肉呈玉白色澤，肉質清脆爽口，甜度極高且不膩口。傳統農法種植，由經驗豐富的瓜農細心照顧每一株瓜藤，確保每顆西瓜都能達到最佳品質。',
    price: 490,
    category: '季节水果',
    origin: '台南學甲',
    weight: '每顆約5-8台斤',
    imageUrl: '/images/p4-watermelon.jpg',
    gallery: [
      '/images/hero-fruit.jpg',
      '/images/p3-strawberry.jpg'
    ],
    features: ['產地直送', '傳統沙地種植', '夏日消暑首選']
  }
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: 1,
    title: '如何保存水果？專家教您保鮮術',
    date: '2026/04/02',
    excerpt: '很多人都想知道如何讓水果保存更久，本文介紹常見水果的保存方法，讓您天天吃到最新鮮的水果。',
    image: '/images/hero-fruit.jpg',
    content: [
      { type: 'paragraph', text: '水果保存是每個家庭都會遇到的問題。一般來說，多數水果應放入冰箱保鮮，但部分水果如香蕉、奇異果等，常溫保存更能保持風味。' },
      { type: 'paragraph', text: '草莓保存時，可先鋪上廚房紙巾吸收多餘水分，再以保鮮盒放入冰箱冷藏，建議3天內食用完畢。芒果則適合室溫保存至稍微軟化後再冷藏，口感最佳。' },
      { type: 'blockquote', text: '專業果農建議：水果保存的關鍵在於「分類」與「盡早食用」，越早食用越能品嚐到最佳風味。' },
      { type: 'paragraph', text: '葡萄保存時，應將整串放入保鮮袋中，冷藏可保存約7-10天。西瓜則切開後用保鮮膜包覆，冷藏可保存3-5天。掌握這些小技巧，水果保鮮不再困難。' }
    ]
  },
  {
    id: 2,
    title: '認識水果的產地：從果園到餐桌的故事',
    date: '2026/04/08',
    excerpt: '每一顆水果都經過農夫的用心照顧，才能送到您手中。本篇文章帶您認識台灣主要水果產區的故事。',
    image: '/images/hero-fruit.jpg',
    content: [
      { type: 'paragraph', text: '台灣水果聞名國際，得益於獨特的地理環境與氣候條件。從北部的草莓園到南部的芒果產區，每個地區都有其代表性的水果作物。' },
      { type: 'paragraph', text: '苗栗大湖是全台灣最大的草莓產區，每年的12月到隔年3月是草莓的盛產季。屏東枋寮的愛文芒果，則在5到8月進入最佳品嚐期。這些水果從播種到結果，都需要果農數月的細心照料。' },
      { type: 'poem', text: '春風吹拂果園綠\n陽光雨露滋潤甜\n一粒果實一滴汗\n送到您的餐桌上' },
      { type: 'paragraph', text: '爆甜水果舖與各地優質果園建立長期合作關係，確保每一份水果都是當季最新鮮的。我們的使命是將農夫的心血結晶，直接送到消費者的餐桌上。' }
    ]
  }
];

export const PRIMARY_COLOR = 'green-900';
export const ACCENT_COLOR = 'orange-500';
