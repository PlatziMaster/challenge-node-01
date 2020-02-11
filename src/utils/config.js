const dotEnv = require('dotenv');

dotEnv.config();

module.exports = {
  githubUrl: process.env.GITHUB_URL || '',
  slackUrl: process.env.HOOK || '',
  token: process.env.TOKEN || '',
};
