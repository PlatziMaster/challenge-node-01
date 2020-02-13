const prompt = require('prompt');
const getDataFromGithub = require('./utils/getDataFromGithub');

const count = 1;

const prompt_attributes = [{
  name: 'githubUser',
}];

prompt.get(prompt_attributes, async (err, result) => {
  if (err) {
    console.log(err);
    return 1;
  }
  const user = result.githubUser;
  if (user) {
    try {
      console.log('Command-line received data:');
      console.log('  githubUser:  ${user}');  
      console.log( await getDataFromGithub(user));
    }catch(error) {
      console.log(error);
    }
  }
});

prompt.start();
