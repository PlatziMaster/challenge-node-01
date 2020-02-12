const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  githubUrl: process.env.GITHUB_URL || 'https://github.com/',
  TOKEN: process.env.TOKEN || '',
  HOOK: process.env.HOOK || '',
};
