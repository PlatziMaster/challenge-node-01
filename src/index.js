const prompt = require('prompt');
const getDataFromGithub = require('./utils/getDataFromGithub');

const promptAttributes = [{
  name: 'githubUser',
}];

prompt.get(promptAttributes, (err, result) => {
  if (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    return 1;
  }

  const user = result.githubUser;

  if (user) {
    getDataFromGithub(result.githubUser);
  }

});

prompt.start();
