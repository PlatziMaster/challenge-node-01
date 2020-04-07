const prompt = require('prompt');
const chalk = require('chalk');

const getDataFromGithub = require('./utils/getDataFromGithub');

const promptAttributes = [
  {
    name: 'githubUser',
    description: 'Enter your github user',
    // Check if the user enter a valid github username
    // if not, throw an error until provide a valid one
    pattern: /^[^\W_][a-zA-Z0-9]+-{0,1}[a-zA-Z0-9]+[^\W_]$/,
    message:
      'Username may only contain alphanumeric characters or single hyphens, and cannot begin or end with a hyphen.',
    required: true,
  },
];

// Start the prompt
prompt.start();
console.log(chalk.cyanBright('Starting the prompt...'));

prompt.get(promptAttributes, (error, result) => {
  if (error) {
    console.log(
      chalk.redBright('There was a error capturing the data. Please try again!'),
    );
    return 1;
  }

  const user = result.githubUser;
  getDataFromGithub(user);
});
