
import { GoogleGenAI, Type } from "@google/genai";

const getAI = () => new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateDesignAdvice = async (userInput: string) => {
  const ai = getAI();
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `User wants a warm house design with these preferences: ${userInput}. 
      Provide a concise, poetic, and architectural description of a warm house design that fits this description. 
      Focus on materials, lighting, and "cozy" feelings. Keep it under 100 words.`,
      config: {
        temperature: 0.7,
        topP: 0.9,
      }
    });
    return response.text || "I couldn't generate a description right now, but imagine a space filled with golden light and soft textures.";
  } catch (error) {
    console.error("Gemini Text Error:", error);
    return "The hearth is cooling... please check your connection or try again later.";
  }
};

export const generateHouseImage = async (prompt: string): Promise<string | null> => {
  const ai = getAI();
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            text: `A high-quality, professional architectural photograph of a cozy, warm house interior or exterior: ${prompt}. Cinematic lighting, warm amber tones, inviting atmosphere, 8k resolution, architectural digest style.`,
          },
        ],
      },
      config: {
        imageConfig: {
          aspectRatio: "16:9"
        }
      },
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    return null;
  } catch (error) {
    console.error("Gemini Image Error:", error);
    return null;
  }
};
