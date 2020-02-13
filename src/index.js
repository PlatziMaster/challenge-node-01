const prompt = require('prompt');
const getDataFromGithub = require('./utils/getDataFromGithub');

const promptAttributes = [
  {
    name: 'githubUser',
  },
];

prompt.start();

prompt.get(promptAttributes, (err, result) => {
  if (err) {
    // eslint-disable-next-line no-console
    console.log(err);
    return 1;
  }
  getDataFromGithub(result.githubUser);
});
