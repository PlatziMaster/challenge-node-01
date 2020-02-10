const prompt = require('prompt');

const count = 1;

const prompt_attributes = [{
  name: 'githubUser',
}];

prompt.get(prompt_attributes, (err, result) => {
  if (err) {
    console.log(err);
    return 1;
  }
  console.log('Command-line received data:');
});

prompt.start();
