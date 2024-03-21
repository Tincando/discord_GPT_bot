const OpenAI = require("openai");
const { openAPIkey } = require("./config.json");

const openai = new OpenAI({ apiKey: openAPIkey });

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "how are you?" }],
    model: "gpt-3.5-turbo",
  });

  let a = String(completion.choices[0].message.content);

  console.log(a);
}

main();
