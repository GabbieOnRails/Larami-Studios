import { GoogleGenAI, Type } from "@google/genai";
import { rooms } from "../data/rooms";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const SYSTEM_INSTRUCTION = `
You are the Larami Content Studio AI Assistant. Your goal is to help users find the perfect creative space for their photography, videography, or brand content needs.

Studio Overview:
Larami Content Studio offers 9 unique, curated spaces in Lagos, Nigeria. Each space has a distinct vibe, rate, and features.

Available Rooms:
${rooms.map(room => `- ${room.name}: ${room.description} (Rate: ₦${room.rate.toLocaleString()}/hr, Max Guests: ${room.maxGuests}, Features: ${room.features.join(", ")})`).join("\n")}

Your Capabilities:
1. Recommend rooms based on user requirements (e.g., "I need natural light", "I want a moody vibe").
2. Provide details about specific rooms.
3. Help users understand the booking process and policies.
4. If a user wants to book, guide them to the booking section or ask for their preferred date and time to "start" a booking process (simulated).

Tone:
Professional, creative, helpful, and elevated. Use a minimalist and sophisticated tone.

Guidelines:
- **PROACTIVELY encourage users to upload a reference image** if they are unsure which room to choose. Explain that you can analyze the "vibe" of their image to find the perfect match.
- If a user asks for a recommendation, analyze their needs and suggest 1-2 most relevant rooms.
- If a user uploads an image, match it to the vibe of our rooms.
- Be concise but informative.
- If you don't know something, suggest contacting the studio manager.
`;

export async function getChatResponse(messages: { role: "user" | "model", parts: { text: string }[] }[]) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: messages,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I'm having trouble connecting right now. Please try again or contact us directly.";
  }
}

export async function analyzeImageVibe(base64Image: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        {
          parts: [
            { text: "Analyze the aesthetic, lighting, and vibe of this image. Then, recommend the best matching room from Larami Content Studio (Verre, Eclat, Velour, Zenia, Kyomi, Nova, Avaia, Zahara, Astra). Explain why it matches." },
            { inlineData: { mimeType: "image/jpeg", data: base64Image } }
          ]
        }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });

    return response.text;
  } catch (error) {
    console.error("Gemini Image Analysis Error:", error);
    return "I couldn't analyze the image. Could you describe the vibe you're looking for?";
  }
}
