/* eslint-disable no-console */
const prompt = require('prompt');
const dotenv = require('dotenv');
const { getDataFromGithub } = require('./utils/getDataFromGithub');

dotenv.config();

const PromptAttributes = [{
  name: 'githubUser',
}];

prompt.get(PromptAttributes, async (err, result) => {
  if (err) {
    console.log(err);
    return 1;
  }
  console.log('Command-line received data:', result);
  console.log('   Name:', result.githubUser);

  const user = result.githubUser;
  console.log('  ', user);
  if (!user) {
    console.log('Se requiere de algún usuario.');
  }
  await getDataFromGithub(user);
});

prompt.start();
