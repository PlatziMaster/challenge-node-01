const prompt = require('prompt');
const { getDataFromGithub } = require('./utils/getDataFromGithub');

//const count = 1;

const promptAttributes = [{
  name: 'githubUser',
}];

prompt.get(promptAttributes, (err, result) => {
  if (err) {
    return 1;
  }
  const user = result.githubUser;
  getDataFromGithub(user);
});

prompt.start();
