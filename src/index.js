const prompt = require('prompt');
const getDataFromGitHub = require('./utils/getDataFromGithub');

const promptAttributes = [{
  name: 'githubUser',
}];

prompt.get(promptAttributes, async (err, result) => {
  if (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    return 1;
  }
  const user = result.githubUser;
  if (user) {
    try {
      // eslint-disable-next-line no-console
      console.log('Command-line received data:');
      await getDataFromGitHub(user);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('error');
    }
  }
});

prompt.start();
