
import { GoogleGenAI } from "@google/genai";

// Initialize Gemini API client directly with the environment variable as per guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getFinancialAdvice = async (userPrompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: "You are 'TrackPay Buddy', a friendly, concise, and smart AI financial advisor for a fintech app. Your goal is to explain how TrackPay can help users track UPI expenses, save for goals, and manage money better. Keep answers short and professional.",
        temperature: 0.7,
      },
    });
    // Extracting text output from GenerateContentResponse using the .text property
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having trouble connecting to my brain right now, but TrackPay will soon make your finance tracking seamless!";
  }
};