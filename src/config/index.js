require('dotenv').config();

const config = {
  token: process.env.TOKEN,
  webhookURL: process.env.HOOK,
};

module.exports = config;
