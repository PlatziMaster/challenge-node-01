const prompt = require('prompt');
const getDataFromGithub = require('./utils/getDataFromGithub');

const promptAttributes = [{
  name: 'githubUser',
}];

prompt.get(promptAttributes, async (err, result) => {
  if (err) {
    // console.log(err);
    return 1;
  }
  if (result.githubUser && result.githubUser.length >= 1) {
    // console.log('Command-line received data:');
    // console.log(`username: ${result.githubUser}`);
    try {
      await getDataFromGithub(result.githubUser);
    } catch (err) {
      // console.error(`ERROR: ${err.message}`);
    }
  } else return 1;
});

prompt.start();
