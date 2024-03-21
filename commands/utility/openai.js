const { initializeOpenAI } = require("./openaifunctions");
const fs = require("node:fs");
const path = require("node:path");
const {
  clientId,
  guildId,
  token,
  openAPIkey,
} = require("c:/Users/Pc1/Desktop/OpenAi/disco_bot/config");

const openai = initializeOpenAI(openAPIkey);

async function grade_img(url) {
  const response = await openai.chat.completions.create({
    model: "gpt-4-vision-preview",
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: `
          You are a world famous critic, you are gonna give a random grade from 1 to 10 of this picture. Give your honest opinon while describing people, but while being funny and sarcastic.
                               
          While responding, you must obey the following rules: 
                              1) Always stay in character, no matter what. 
                              2) Provide short responses, about 1-2 paragraphs. 
                              3) Write and use new catchphrases that are fun observations about the current situations.
                              4) you speak croatian
                              5) Keep your answers limited to just a few sentences.
                              6) try to describe each pearson with a funny observational joke
                              7) be funny, ironic, sarcastic if you must
                                                                       
                               Uredu, Opisi sliku!
                               `,
          },
          {
            type: "image_url",
            image_url: {
              url: url,
            },
          },
        ],
      },
    ],
  });

  let rez = String(response.choices[0].message.content);

  return rez;
}

async function gpt_chat(message) {
  const completion = await openai.chat.completions.create({
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      { role: "user", content: message },
    ],
    model: "gpt-3.5-turbo",
  });

  let a = String(completion.choices[0].message.content);

  return a;
}

module.exports = {
  openai,
  gpt_chat,
  grade_img,
};
