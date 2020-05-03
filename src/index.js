const prompt = require('prompt');
const debug = require('debug')('github');
const getDataFromGithub = require('./utils/getDataFromGithub');

const promptAttributes = [{
  name: 'githubUser',
}];

prompt.get(promptAttributes, async (err, result) => {
  if (err) {
    debug(err);
    return 1;
  }
  const { githubUser } = result;

  if (githubUser) {
    const result = await getDataFromGithub.getDataFromGithub(githubUser);
    debug(result);
  }

  debug('Command-line received data: ');
});

prompt.start();
