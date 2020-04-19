const prompt = require('prompt');
const getDataFromGithub = require('./utils/getDataFromGithub');

const promptAttributes = [{
  name: 'githubUser',
}];

prompt.get(promptAttributes, (err, result) => {
  if (err) {
    return new Error('Error');
  }
  user = result.githubUser;
  if (!user) {
    throw new Error('No se mandó un user');
  }
  getDataFromGithub(user);
});

prompt.start();
