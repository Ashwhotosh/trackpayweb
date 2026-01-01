
import { GoogleGenAI } from "@google/genai";

// Ensure we have a safe way to access the AI client
let aiInstance: GoogleGenAI | null = null;

const getAi = () => {
  if (!aiInstance) {
    // The API key must be obtained from process.env.API_KEY
    const apiKey = process.env.API_KEY || '';
    aiInstance = new GoogleGenAI({ apiKey });
  }
  return aiInstance;
};

export const getFinancialAdvice = async (userPrompt: string) => {
  try {
    const ai = getAi();
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: "You are 'TrackPay Buddy', a friendly, concise, and smart AI financial advisor for a fintech app. Your goal is to explain how TrackPay can help users track UPI expenses, save for goals, and manage money better. Keep answers short and professional.",
        temperature: 0.7,
      },
    });
    
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having trouble connecting to my brain right now, but TrackPay will soon make your finance tracking seamless!";
  }
};
