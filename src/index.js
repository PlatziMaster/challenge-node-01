const prompt = require('prompt');
const util = require('./utils/getDataFromGithub');

const promptAttributes = [{
  name: 'githubUser',
}];

prompt.get(promptAttributes, (err, result) => {
  if (err) {
    return 1;
  }
  if (result['githubUser']) {
    util.getDataFromGithub(result['githubUser']);
  } else {
  }
});

prompt.start();
