const prompt = require('prompt');
const dotenv = require('dotenv');
const github = require('./utils/getDataFromGithub.js');

const count = 1;

const prompt_attributes = [
  {
    name: 'githubUser',
  },
];

prompt.get(prompt_attributes, async (err, result) => {
  if (err) {
    return 1;
  }

  if (result.githubUser.length <= 0 ?? !result.githubUser) {
    return 1;
  }

  await github.getDataFromGithub(result.githubUser);

});

prompt.start();
