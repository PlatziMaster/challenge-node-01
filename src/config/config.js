require('dotenv').config();

const config = {
  webhookURL: process.env.HOOK + process.env.TOKEN,
  githubUrl: process.env.GITHUB_URL,
};

module.exports = config;
