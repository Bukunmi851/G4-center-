
import { GoogleGenAI } from "@google/genai";
import { G4_INFO, AIActionType } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateMarketingContent = async (type: AIActionType): Promise<string> => {
  const model = "gemini-3-flash-preview";
  
  const prompts: Record<AIActionType, string> = {
    social: `Create a professional and high-energy business description for social media (Instagram/Facebook) for ${G4_INFO.name} in Akure. Include details like: rating ${G4_INFO.rating}, address at ${G4_INFO.address}, and equipment like dumbbells, barbells, benches, and cardio machines. Use engaging emojis and a strong call to action.`,
    proposal: `Write a professional proposal message to send to the gym owner of ${G4_INFO.name}. The message should suggest a potential collaboration or business improvement initiative. Keep it respectful, concise, and professional. Mention the gym's location in Akure.`,
    bio: `Create a compelling Google Business bio for ${G4_INFO.name}. Focus on the personal fitness atmosphere, state-of-the-art equipment (weights and cardio), and the convenient Akure location. Keep it within 750 characters.`,
    flyer: `Design a catchy and persuasive caption for a promotional flyer for ${G4_INFO.name}. Highlight why locals in Akure should join, mentioning the quiet morning/late evening hours and the professional atmosphere. Include the contact: ${G4_INFO.phone}.`
  };

  try {
    const response = await ai.models.generateContent({
      model,
      contents: prompts[type],
      config: {
        temperature: 0.7,
        topP: 0.9,
      },
    });

    return response.text || "Sorry, I couldn't generate the content at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error generating content. Please check your API key or connection.";
  }
};
