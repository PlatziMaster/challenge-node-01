const prompt = require('prompt');
const getDataFromGitHub = require('./utils/getDataFromGithub');

const count = 1;

const promptAttributes = [{
  name: 'githubUser',
}];

prompt.get(promptAttributes, (err, result) => {
  const user = result.githubUser;
  if (err) {
    return count;
  }
  if (user) {
    getDataFromGitHub(user);
  };
});

prompt.start();

