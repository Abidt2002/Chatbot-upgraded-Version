import fetch from "node-fetch";

export async function handler(event, context) {
  const { prompt } = JSON.parse(event.body || "{}");
  if(!prompt) return { statusCode:400, body:"No prompt provided" };

  const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${OPENAI_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages:[{role:"user", content: prompt}],
      max_tokens:650
    })
  });

  const data = await response.json();
  return { statusCode:200, body: JSON.stringify(data) };
}
