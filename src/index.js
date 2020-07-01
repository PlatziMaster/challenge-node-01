/* eslint-disable no-console */
const prompt = require('prompt');
const getDataFromGithub = require('./utils/getDataFromGithub');

const promptAttributes = [{
  name: 'githubUser',
}];

prompt.get(promptAttributes, async (err, result) => {
  const user = result.githubUser;
  if (err) {
    console.error(err);
    return 1;
  }
  if (!user) {
    console.log('Por favor digite un nombre de usuario');
    return 1;
  }
  console.log('Command-line received data:');
  await getDataFromGithub(user);
});

prompt.start();
