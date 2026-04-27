/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Product, JournalArticle } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: '日本麝香葡萄',
    tagline: '翡翠般的寶石，濃郁果香。',
    description: '空運直達，果肉Q彈緊實，無籽可連皮食用，帶有獨特的浪漫荔枝香氣。',
    longDescription: '來自日本長野縣的頂級麝香葡萄（Shine Muscat），每一顆都飽滿如翡翠。我們嚴選糖度達18度以上的契作果園，保證每一口都能感受到爆漿的清甜。其特有的無籽特性與薄而脆的果皮，讓您無需剝皮即可享用最純粹的美味。',
    price: 1280,
    category: '嚴選進口',
    origin: '日本長野縣',
    weight: '單盒約600g',
    imageUrl: 'https://images.unsplash.com/photo-1625493403040-3023223f063a?auto=format&fit=crop&q=80&w=1000',
    gallery: [
      'https://images.unsplash.com/photo-1625493403040-3023223f063a?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1596364776417-fe905384ea43?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['產地空運直達', '糖度18度以上', '無籽可連皮']
  },
  {
    id: 'p2',
    name: '台灣愛文芒果',
    tagline: '盛夏的紅寶石，甜入心扉。',
    description: '屏東枋山老欉，果肉細緻無絲，濃郁芒果香，是夏天最期待的滋味。',
    longDescription: '屏東枋山得天獨厚的山海風與充足日照，孕育出外皮紅潤、果肉金黃的愛文芒果。我們挑選自然完熟、不催熟的老欉芒果，甜度極高且香氣厚實。切開後的細緻果肉，幾乎感受不到纖維，入口即化。',
    price: 880,
    category: '當季熱銷',
    origin: '台灣屏東枋山',
    weight: '每箱5台斤(約8-10顆)',
    imageUrl: 'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&q=80&w=1000',
    gallery: [
      'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1591073113125-e46713c829ed?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['產地直送', '外銷等級', '自然完熟']
  },
  {
    id: 'p3',
    name: '熊本縣紅臉頰草莓',
    tagline: '草莓界的貴族，酸甜完美比例。',
    description: '鮮紅誘人的色澤，飽滿多汁，每口都是初戀般的酸甜滋味。',
    longDescription: '來自九州熊本縣的「紅臉頰」草莓，因其果肉連中心都呈現迷人紅色而得名。其特色在於極高的糖度伴隨著平衡的果酸，香氣逼人。每一顆都是手工摘採，細心保護在防震格中，確保送到您手中的是最高品質的鮮果。',
    price: 1580,
    category: '禮盒推薦',
    origin: '日本熊本縣',
    weight: '2盤/箱',
    imageUrl: 'https://images.unsplash.com/photo-1543528176-61b2395143a4?auto=format&fit=crop&q=80&w=1000',
    gallery: [
      'https://images.unsplash.com/photo-1543528176-61b2395143a4?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['手採嚴選', '禮盒包裝', '濃郁果香']
  },
  {
    id: 'p4',
    name: '特級黑鑽西瓜',
    tagline: '清涼消暑，清爽脆口。',
    description: '果肉沙甜多汁，是夏日裡最天然的解渴聖品。',
    longDescription: '產自蘭陽平原的高品質黑鑽西瓜，皮薄肉紅。我們只選取一株一果的高級品，確保養分完全集中。果肉質地帶有獨特的「沙感」，甜而不膩，水分極其充足，是炎炎夏日的救贖。',
    price: 490,
    category: '在地優質',
    origin: '台灣宜蘭',
    weight: '約15-18台斤',
    imageUrl: 'https://images.unsplash.com/photo-1589606795096-724391624c9c?auto=format&fit=crop&q=80&w=1000',
    gallery: [
      'https://images.unsplash.com/photo-1589606795096-724391624c9c?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1589984662646-e7b2e4962f18?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['產地直達', '保證沙甜', '一株一果']
  }
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
    {
        id: 1,
        title: "如何挑選最甜的蜜柑？",
        date: "2026年4月12日",
        excerpt: "教你從外皮、蒂頭與重量，一眼看出多汁飽滿的頂級鮮果。",
        image: "https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&q=80&w=1000",
        content: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "mb-6 first-letter:text-5xl first-letter:font-serif first-letter:mr-3 first-letter:float-left text-[#5D5A53]" },
                "在爆甜水果行，我們每天都要與成千上萬的果實打交道。很多人問我們，挑選水果有什麼秘訣？其實，果實會自己說話。"
            ),
            React.createElement("p", { className: "mb-8 text-[#5D5A53]" },
                "以蜜柑為例，外皮的細緻程度反映了水分的飽和感。蒂頭若是凹矮且帶有朝氣的深綠色，代表它是緩緩熟成而非催熟。最重要的一點——沉甸甸的手感，那是飽滿果汁的保證。"
            ),
            React.createElement("blockquote", { className: "border-l-2 border-[#2C2A26] pl-6 italic text-xl text-[#2C2A26] my-10 font-serif" },
                "「好的水果，是陽光、雨水與農人熱情的結晶。」"
            ),
            React.createElement("p", { className: "mb-6 text-[#5D5A53]" },
                "我們走遍台灣各地，深入日本產區，只為了找出那顆能讓您在那一瞬間，感受到生命律動與自然的贈禮。挑選，是我們對品質唯一的堅持。"
            )
        )
    },
    {
        id: 2,
        title: "農場直連：枋山果農的一天",
        date: "2026年3月28日",
        excerpt: "聽聽在烈日下守護紅寶石的職人們，如何堅持不催熟的完熟哲學。",
        image: "https://images.unsplash.com/photo-1528605248644-14dd04cb220d?auto=format&fit=crop&q=80&w=1000",
        content: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "mb-6 text-[#5D5A53]" },
                "屏東枋山的清晨，當多數人還在睡夢中時，果農阿成已經在巡視他的芒果園。這裡的人堅持「在枝頭紅透」，哪怕產期會延後、風險會增加。"
            ),
            React.createElement("p", { className: "mb-8 text-[#5D5A53]" },
                "「催熟的果心帶酸，只有自然熟成的，甜度才能進到骨子裡。」阿成憨厚地笑著。在爆甜水果行，我們不只是買賣，我們是在傳遞這份對大地母親的敬畏與熱情。"
            ),
            React.createElement("div", { className: "my-12 p-8 bg-[#EBE7DE] font-serif text-[#2C2A26] italic text-center" },
                React.createElement("p", null, "太陽升起"),
                React.createElement("p", null, "汗水滴落在紅土之上"),
                React.createElement("p", null, "果實漸漸轉紅"),
                React.createElement("p", null, "那是大地的色彩"),
                React.createElement("p", null, "那是家鄉的味道。")
            ),
            React.createElement("p", { className: "mb-6 text-[#5D5A53]" },
                "下一次當您品味手中那片香甜時，別忘了這份來自枋山的誠懇日曬。"
            )
        )
    }
];

export const BRAND_NAME = '爆甜水果行';
export const PRIMARY_COLOR = 'green-900'; 
export const ACCENT_COLOR = 'orange-500';
