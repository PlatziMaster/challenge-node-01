const fetch = require('node-fetch');
const chalk = require('chalk');
const config = require('../config');

/**
 *
 * @param {string} user Github user
 * @param {string} photo Source of user avatar
 * @param {string} count Total repositories that github user has
 */
const postToSlack = async (user, photoSrc, repositoriesCounter) => {
  const webhookURL = `${config.webhookURL}${config.token}`;
  const data = JSON.stringify({
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `*Reto Cumplido* \n https://github.com/${user} \n Numero de repositorios: ${repositoriesCounter.trimStart()}`,
        },
        accessory: {
          type: 'image',
          image_url: photoSrc,
          alt_text: user,
        },
      },
    ],
  });

  try {
    const response = await fetch(webhookURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=UTF-8' },
      body: data,
    });

    console.log(response.size);
  } catch (error) {
    console.log(chalk.redBright('There was an error making the request'));
    console.log(chalk.red('Error:', error.message));
  }

  /*await fetch(`${config.webhookURL}/${config.token}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: data,
  }).then(response => {
    console.log(response.size);
  });*/
};

module.exports = postToSlack;
