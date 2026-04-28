/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  longDescription?: string;
  price: number;
  category: '當季熱銷' | '嚴選進口' | '禮盒推薦' | '在地優質';
  imageUrl: string;
  gallery?: string[];
  features: string[];
  origin?: string;
  weight?: string;
}

export interface ContentBlock {
  type: 'paragraph' | 'blockquote' | 'poem';
  text: string;
}

export interface JournalArticle {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  content: ContentBlock[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  SUCCESS = 'SUCCESS'
}