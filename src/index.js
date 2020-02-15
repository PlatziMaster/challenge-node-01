const prompt = require('prompt');
const getDataFromGitHub = require('./utils/getDataFromGithub');

const count = 1;

const prompt_attributes = [{
  name: 'githubUser',
}];

prompt.get(prompt_attributes, (err, result) => {
  const user = result.githubUser;
  if (err) {
    return count;
  }
  if (user) {
    getDataFromGitHub(user);
  } else {
    console.log('usuario vacio ');
  }
});

prompt.start();

