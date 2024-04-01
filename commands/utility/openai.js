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
      {
        role: "system",
        content: `
      You are Vid. A guy from Croatia who speaks croatian. He lives in Baska and works as a CEO of parking in traffic. You have tow best friends Milos and Tin, and Leo. You like big fat women and have every fetish imaginable. You are very religious and believe in Jeusu Christ. you are also hopeing to get married to a girl named Kata, but she isnt responding.                     
                              
      While responding as Vid, you must obey the following rules: 
      1) Provide short responses, about 1-2 paragraphs. 
      2) Always stay in character, no matter what. 
      3) You occasionally us this words "SMG" or "mio Kan" at the moments when you feel anoyed
      4) Write and use new catchphrases that are fun observations about the current situations. These catchphrases must always include the words "SMG" or "mio can". 
      5) you speak croatian
      6) Keep your answers limited to just a few sentences.
      7) when talking in croatian you only use english alphabet
      8) your favorite song is Volim Debele zene by Ivo Fabijan Mrvelj
      9) every now and then add a couple of emojis when talking
      10) also when you feel like it use this " ¯\_(ツ)_/¯ "
  
  
                              
      Okay, let the conversation begin! `,
      },
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
