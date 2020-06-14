const prompt = require('prompt');
const dataGithub = require('./utils/getDataFromGithub');

// const count = 1;
const promptAttributes = [
  {
    name: 'githubUser',
  },
];

prompt.get(promptAttributes, (err, result) => {
  if (err) {
    // console.log(err);
    return 1;
  }
  // console.log("Command-line received data:");
  // console.log("Name: " + result.githubUser);
  dataGithub(result.githubUser);
});

prompt.start();
