import openaiClient from "./api.js";

const generate = async (queryDesc) => {
  const response = await openaiClient.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "You are an AI assistant that converts natural language into SQL queries.",
      },
      {
        role: "user",
        content: `Convert the following natural language description into a SQL query:\n\n ${queryDesc} and only reply about SQL sentence.`,
      },
    ],
  });
  return response.choices[0].message.content.trim();
};

export default generate;
