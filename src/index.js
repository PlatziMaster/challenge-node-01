const prompt = require('prompt');
const getDataFromGithub = require('./utils/getDataFromGithub');

const promptAttributes = [{
  name: 'githubUser',
}];

prompt.get(promptAttributes, (err, result) => {
  if (err) {
    return 1;
  }

  const user = result.githubUser;

  if (user) {
    getDataFromGithub(user);
  } else {
    return 1;
  }
});

prompt.start();
