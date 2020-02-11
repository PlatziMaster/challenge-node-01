const prompt = require('prompt');
const getDataFromGithub = require('./utils/getDataFromGithub');

const promptAttributes = [{
  name: 'githubUser',
}];

prompt.get(promptAttributes, async (err, result) => {
  if (err) {
    return 1;
  }
  const { githubUser } = result;
  if (!githubUser && githubUser.lenght <= 0) {
    return 2;
  }
  await getDataFromGithub(githubUser);
  return 3;
});

prompt.start();
