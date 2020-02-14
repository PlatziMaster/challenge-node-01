const prompt = require('prompt');
const getData = require('./utils/getDataFromGithub');

let user = '';

const promptAttributes = [
  {
    name: 'githubUser',
  },
];

const exectPrompt = () => {
  prompt.get(promptAttributes, (err, result) => {
    user = result.githubUser;
    if (user !== '' || undefined) {
      getData(user);

      //console.log('Command-line received data:');
    } else {
      //console.log('Favor de ingresar tu githubUser');
      exectPrompt();
    }
    if (err) {
      //console.log(err);
      return 1;
    }
  });

  prompt.start();
};

exectPrompt();
