/* eslint-disable no-console */
const prompt = require('prompt');
const dotenv = require('dotenv');

dotenv.config();

const GIT_HUB_URL = require('./utils/getDataFromGithub');

const promptAttributes = [
  {
    name: 'githubUser',
  },
];

prompt.get(promptAttributes, async (err, result) => {
  if (err) {
    console.log(err);
    return 1;
  }
  const user = result.githubUser;
  if (!user) {
    console.log('El usuario no puede estar vacio');
    return 1;
  }
  await GIT_HUB_URL(user);
  console.log('Command-line received data:');
});

prompt.start();
