const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  TOKEN: process.env.TOKEN || '',
  HOOK: process.env.HOOK || '',
};
