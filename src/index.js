const prompt = require('prompt');
const getDataFromGithub = require('./utils/getDataFromGithub');

const promptAttributes = [{
  name: 'githubUser',
  pattern: /^[a-zA-Z0-9_-]+$/,
  message: 'Name must be only letters, numbers or dashes. No spaces',
  required: true,
}];

prompt.get(promptAttributes, (error, result) => {
  if (error) return 1;
  getDataFromGithub(result.githubUser);
});

prompt.start();
