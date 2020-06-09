const prompt = require('prompt');
const getDataFromGithub = require('./utils/getDataFromGithub');

const promptAttributes = [{
  name: 'githubUser',
}];

prompt.get(promptAttributes, (err, { githubUser }) => {
  if (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    return 1;
  }
  getDataFromGithub(githubUser);
});

prompt.start();
