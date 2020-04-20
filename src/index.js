const prompt = require('prompt');
const getDataFromGithub = require('./utils/getDataFromGithub');

const promptAttributes = [
  {
    name: 'githubUser',
  },
];

prompt.get(promptAttributes, (err, result) => {
  if (err) {
    process.stdout.write(`${err} \n`);
    return 1;
  }
  const user = result.githubUser;
  process.stdout.write('Command-line received data: \n');
  process.stdout.write(`username: ${user} \n`);
  getDataFromGithub(user);
});

prompt.start();

