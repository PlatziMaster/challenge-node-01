const prompt = require('prompt');
const getDataFromGithub = require('./utils/getDataFromGithub');

const promptAttributes = [
  {
    name: 'githubUser',
  },
];

prompt.get(promptAttributes, (err, result) => {
  if (err) {
    return false;
  }
  if (result.githubUser.length > 0) {
    getDataFromGithub(result.githubUser);
  }
});

prompt.start();
