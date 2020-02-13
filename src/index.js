const prompt = require('prompt');
const getDataFromGithub = require('./utils/getDataFromGithub');

const promptAttributes = [{
  name: 'githubUser',
}];

prompt.get(promptAttributes, async (err, result) => {
  if (err) {
    return 1;
  }
  const user = result.githubUser;
  if (user) {
    try {
      await getDataFromGithub(user);
    } catch (error) {
      return 1;
    }
  }
});

prompt.start();
