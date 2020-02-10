const prompt = require('prompt')
const getDataFromGithub = require('./utils/getDataFromGithub')

const count = 1

const prompt_attributes = [{
  name: 'githubUser',
}]

prompt.get(prompt_attributes, (err, result) => {
  if (err) {
    console.log(err);
    return 1;
  }
  console.log('Command-line received data:');
  console.log(result)
  getDataFromGithub(result.githubUser);
  
})

prompt.start()
