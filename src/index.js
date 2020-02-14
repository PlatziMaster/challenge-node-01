const prompt = require('prompt');
const dotenv = require('dotenv');
const github = require('./utils/getDataFromGithub');

dotenv.config();

const promptAttributes = [{
  name: 'githubUser',
}];

prompt.get(promptAttributes, async (err, result) => {
  if (err) {
    return 1;
  }
  if (!result.githubUser || result.githubUser.lenght <= 0) {
    return 1;
  } 
  await github.getDataFromGithub(result.githubUser);
});

prompt.start();
