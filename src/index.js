const prompt = require('prompt');
const getDataFromGithub = require('./utils/getDataFromGithub');

const count = 1;

const prompt_attributes = [{
  name: 'githubUser', 
}];

prompt.get(prompt_attributes, async (err, result) => {
  if (err) {
    console.log(err);
    return 1;
  }
  if (result.githubUser && result.githubUser.length >= 1) {
    console.log('Command-line received data:');
    console.log(`username: ${result.githubUser}`);
    await getDataFromGithub(result.githubUser);
  } else return 1;
});

prompt.start();
