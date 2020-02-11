const prompt = require('prompt');
const getDataFromGithub = require('./utils/getDataFromGithub');

const promptAttributes = [{
  name: 'githubUser',
}];

prompt.get(promptAttributes, (err, result) => {
  if (err) {
    console.log(err);
    return 1;
  };
  if (result.githubUser) {
    getDataFromGithub(result.githubUser);
  } else {
    console.log('Ingresa un nombre de usuario');
  };
});

prompt.start();
