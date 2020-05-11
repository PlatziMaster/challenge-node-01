const prompt = require('prompt');
const getDataFromGithub = require('./utils/getDataFromGithub');

const promptAttributes = [
  {
    name: 'githubUser',
    required: true,
    description: 'Username de Github',
    type: 'string',
    message: 'Usuario de Github',
  },
];

prompt.get(promptAttributes, async (err, result) => {
  if (err) {
    return 1;
  }
  if (!result.githubUser) {
    return 1;
  }
  await getDataFromGithub(result.githubUser);
});

prompt.start();
