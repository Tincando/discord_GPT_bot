const { Client, GatewayIntentBits } = require("discord.js");
require("dotenv").config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
});

const token = process.env.TOKEN; // Accessing the TOKEN variable from environment

// Event listener for when the bot is ready
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// Event listener for when a message is received
client.on("messageCreate", (msg) => {
  // Check if the message starts with "!hello"
  if (msg.content.toLowerCase() === "!hello") {
    // Respond with a greeting
    msg.reply("Hello there!");
  }
});

client.on("error", (error) => {
  console.error("An error occurred:", error);
});

// Log in to Discord with your bot token
client.login(token);
