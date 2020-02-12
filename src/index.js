const prompt = require('prompt');
const getDataFromGithub = require('./utils/getDataFromGithub');

// const count = 1;

const promptAttributes = [{
  name: 'githubUser',
}];

let user = '';
prompt.get(promptAttributes, (err, result) => {
  if (err) {
    console.log(err);
    return 1;
  }

  user = result.githubUser;
  if (!user) {
    console.log('El dato que ingresaste viene vacio!!!');
    return false;
  }

  console.log(`Command-line received data: ${user}`);
  getDataFromGithub(user);
});

prompt.start();
