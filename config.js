require('dotenv').config();

const config = {
  token: process.env.TOKEN || '',
  hook: process.env.HOOK || '',
};

module.exports = { config };

