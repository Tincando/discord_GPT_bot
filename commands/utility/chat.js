const { SlashCommandBuilder } = require("discord.js");
const { gpt_chat } = require("./openai.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("chat")
    .setDescription("daje misljenje")
    .addStringOption((option) =>
      option.setName("govor").setDescription("pitaj ")
    ),

  async execute(interaction) {
    const message = interaction.options.getString("govor");

    const response = await gpt_chat(message);

    console.log(response);

    await interaction.reply(response);
  },
};
