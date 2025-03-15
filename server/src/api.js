import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const openAIApiKey = process.env.OPENAI_API_KEY;

if (!openAIApiKey) {
  console.error("OPENAI_API_KEY is not set");
  process.exit(1);
}

const openai = new OpenAI({
  apiKey: openAIApiKey,
});

export default openai;
