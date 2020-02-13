const prompt = require('prompt');
const getDataFromGithub = require('./utils/getDataFromGithub');

const promptAttributes = [{
  name: 'githubUser',
}];

prompt.get(promptAttributes, async (err, result) => {
  if (err) {
    console.error(err);
    return 1;
  }
  const user = result.githubUser;
  if (user) {
    try {
      console.log('Command-line received data:');
      console.log(`  githubUser:  ${user} `);
      await getDataFromGithub(user);
    } catch (error) {
      console.log(error);
    }
  }
});

prompt.start();
