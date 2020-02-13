require('dotenv').config();

const config = {
  hook: process.env.HOOK,
  token: process.env.TOKEN,
};

module.exports = { config };
