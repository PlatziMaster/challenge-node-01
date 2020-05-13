/* eslint-disable no-console */
/* eslint-disable camelcase */
const prompt = require('prompt');
const dotenv = require('dotenv');
const { getDataFromGithub } = require('./utils/getDataFromGithub');

dotenv.config();

const prompt_attributes = [{
  name: 'githubUser',
}];

prompt.get(prompt_attributes, async (err, result) => {
  if (err) {
    console.log(err);
    return 1;
  }
  console.log('Command-line received data:', result);
  console.log('   Name:', result.githubUser);

  const user = result.githubUser;
  console.log('  ', user);
  if (!user) {
    console.log('No hay usuario');
  }
  await getDataFromGithub(user);
});

prompt.start();
