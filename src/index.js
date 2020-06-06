const prompt = require('prompt');

const getGitHubData = require('./utils/getDataFromGithub');

const count = 1;

const promptAttributes = [{
  properties: {
    name: {
      description: 'Type your GitHub username',
      message: 'Username must not be empty',
      required: true,
    },
  },
}];

prompt.get(promptAttributes, (err, result) => {
  if (err) {
    // console.log(err);
    return count;
  }
  // console.log('Command-line received data:', result);

  const user = result.name;
  // console.log('User:', user);
  getGitHubData.getDataFromGithub(user);
});

prompt.start();
