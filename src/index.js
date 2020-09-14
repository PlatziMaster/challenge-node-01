/* eslint-disable no-console */
const prompt = require('prompt');
const getDataFromGithub = require('./utils/getDataFromGithub');

const promptAttributes = [{
  name: 'githubUser',
}];

prompt.get(promptAttributes, async (err, result) => {
  if (err) {
    console.log(err);
    return 1;
  }
  const user = result.githubUser;
  if (user) {
    try {
      console.log('Command-line received data:');
      await getDataFromGithub(user);

    } catch (error) {
      console.error(error);
    }
  }
});

prompt.start();
