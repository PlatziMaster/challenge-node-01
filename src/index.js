const prompt = require('prompt');
const dataGithub = require('./utils/getDataFromGithub');

// const count = 1

const promptAttributes = [{
  name: 'username',
}];

prompt.get(promptAttributes, (err, result) => {
  if (err) {
    return 1;
  };
  dataGithub(result.username);
});

prompt.start();
