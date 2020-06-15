const prompt = require('prompt');
const { getDataFromGithub } = require('./utils/getDataFromGithub');

const promptAttributes = [{
  name: 'githubUser',
  type: 'string',
  message: 'Is your username on github.',
  default: 'Razielini',
  required: true,
}];

prompt.get(promptAttributes, (err, result) => {
  if (err) {
    return 1;
  }

  const user = result.githubUser;

  if (!user) return false;

  getDataFromGithub(user);

});

prompt.start();
