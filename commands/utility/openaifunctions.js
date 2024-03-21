// Create a new file named "openaiFunctions.js"

// Import the OpenAI library
const OpenAI = require("openai");

// Create a function to initialize OpenAI with the API key
function initializeOpenAI(apiKey) {
  return new OpenAI({ apiKey: apiKey });
}

// Export the function to initialize OpenAI
module.exports = {
  initializeOpenAI,
};
