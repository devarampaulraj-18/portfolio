
import { GoogleGenAI } from "@google/genai";
import { PROJECTS, EXPERIENCES, SKILLS } from "./constants";

const apiKey = process.env.API_KEY || "";
const ai = new GoogleGenAI({ apiKey });

const PORTFOLIO_CONTEXT = `
You are an AI assistant representing Devaram Paulraj. 
Devaram is a Full-Stack & AI Developer and a B.Tech IT student at Sri Ramakrishna Engineering College.

Background:
- B.Tech IT student, Expected 2027.
- Google Student Ambassador.
- CGPA: 8.53/10.

Skills:
${Object.entries(SKILLS).map(([cat, list]) => `- ${cat}: ${list.join(', ')}`).join('\n')}

Featured Projects:
${PROJECTS.map(p => `- ${p.title}: ${p.description}`).join('\n')}

Experience:
${EXPERIENCES.map(e => `- ${e.role} at ${e.company} (${e.period})`).join('\n')}

Guidelines:
- Be professional, helpful, and concise.
- If someone asks to hire him, provide his email: devarampaulraj@gmail.com
- Do not make up information.
- Use a friendly, enthusiastic tone.
`;

export const getAiResponse = async (userMessage: string) => {
  if (!apiKey) return "The AI assistant is currently resting (API key missing). Please contact Devaram directly at devarampaulraj@gmail.com";

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userMessage,
      config: {
        systemInstruction: PORTFOLIO_CONTEXT,
        temperature: 0.7,
        maxOutputTokens: 300,
      },
    });
    return response.text || "I'm sorry, I couldn't process that. Feel free to ask about Devaram's projects!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having a bit of trouble connecting to my brain right now. Try again in a second!";
  }
};
