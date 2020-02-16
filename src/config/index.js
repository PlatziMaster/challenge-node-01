require('dotenv').config();

const config = {
  gitHubUrl: process.env.GITHUB,
  slackHookUrl: process.env.HOOK,
  slackToken: process.env.TOKEN,
};
module.exports = { config };
