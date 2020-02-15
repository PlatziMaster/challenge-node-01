const prompt = require('prompt');
const getDataFromGithub = require('./utils/getDataFromGithub');

const promptAttributes = [{
  name: 'githubUser',
}];

prompt.get(promptAttributes, (err, result) => {
  if (err) {
    return 1;
  }

  const { githubUser: user } = result;
  user && getDataFromGithub(user);

});

prompt.start();
