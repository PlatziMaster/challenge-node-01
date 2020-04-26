const prompt = require('prompt');
const getDataFromGithub = require('./utils/getDataFromGithub');

const promptAttributes = [{
  name: 'githubUser',
}];

prompt.start();

prompt.get(promptAttributes, (err, result) => {
  if (err) {
    return error;
  }
  const user = result.githubUser;
  if (user !== '') {
    getDataFromGithub(user);
  } else {
    return null;
  }
});
