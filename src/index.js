const prompt = require('prompt');
const github = require('./utils/getDataFromGithub');

const promptAttributes = [{
  name: 'githubUser',
}];

prompt.get(promptAttributes, (err, result) => {
  if (err) {
    //console.error(err);
    return 1;
  }
  //console.log('Command-line received data:');
  const user = result.githubUser;
  github(user);

});

prompt.start();
