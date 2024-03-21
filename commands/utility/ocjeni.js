const { SlashCommandBuilder, MessageEmbed } = require("discord.js");
const { grade_img } = require("./openai.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ocjeni")
    .setDescription("Ocjenjuje sliku")
    .addStringOption((option) =>
      option.setName("url").setDescription("Url slike")
    ),

  async execute(interaction) {
    try {
      const url = interaction.options.getString("url");

      // Call the grade_img function to interact with the OpenAI API

      // Reply with a loading message
      reply = await interaction.reply("Processing...");

      reply;

      const response = await grade_img(url);

      // Extract the generated text from the response
      console.log(response);

      // Edit the message with the ChatGPT response
      await reply.edit(response);
    } catch (error) {
      console.error("An error occurred:", error);
      await interaction.reply(
        "There was an error while processing your request."
      );
    }
  },
};
