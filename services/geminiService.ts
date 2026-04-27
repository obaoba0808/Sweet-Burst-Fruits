/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import { GoogleGenAI } from "@google/genai";
import { PRODUCTS } from '../constants';

const getSystemInstruction = () => {
  const productContext = PRODUCTS.map(p => 
    `- ${p.name} (NT$ ${p.price}): ${p.description}. 產地: ${p.origin}, 重量: ${p.weight}. 特點: ${p.features.join(', ')}`
  ).join('\n');

  return `你是「爆甜水果行」的 AI 鮮果管家。
  你的語氣應該充滿熱情、親切且專業，展現出對高品質水果的熱愛。
  使用「爆甜」、「多汁」、「產地直送」、「嚴選」等詞彙。
  
  這是我們目前的產品目錄：
  ${productContext}
  
  回答客戶關於水果口感、產地、保存方式及推薦的需求。
  回答請簡短有力（通常在 3 句以內），以配合聊天界面。
  請一律使用繁體中文回答。
  如果客戶問及非我們販售的水果，請委婉地引導他們看我們的精選產品。`;
};

export const sendMessageToGemini = async (history: {role: string, text: string}[], newMessage: string): Promise<string> => {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    
    if (!apiKey) {
      return "抱歉，目前無法連接到伺服器。（缺少 API 金鑰）";
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const chat = ai.chats.create({
      model: 'gemini-1.5-flash',
      config: {
        systemInstruction: getSystemInstruction(),
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessage({ message: newMessage });
    return result.text;

  } catch (error) {
    console.error("Gemini API Error:", error);
    return "非常抱歉，系統目前出現一點小狀況，請稍後再試。";
  }
};
