const prompt = require('prompt');
const dotenv = require('dotenv');
const github = require('./utils/getDataFromGithub.js');

dotenv.config();

const promptAttributes = [
  {
    name: 'githubUser',
  },
];

prompt.get(promptAttributes, async (err, result) => {
  if (err) {
    return 1;
  }

  if (result.githubUser.length <= 0 ?? !result.githubUser) {
    return 1;
  }

  await github.getDataFromGithub(result.githubUser);

});

prompt.start();
