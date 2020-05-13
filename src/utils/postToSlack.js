/* eslint-disable no-console */
const fetch = require('node-fetch');
const config = require('./config');

const postToSlack = async (user, photo, count) => {
  const webhookURL = `${process.env.HOOK}/${config.TOKEN()}`;
  const data = JSON.stringify({
    'blocks': [
      {
        'type': 'section',
        'text': {
          'type': 'mrkdwn',
          'text': `*Reto Cumplido* \n https://github.com/${user} \n Número de repositorios: ${count.trimStart()}`,
        },
        'accessory': {
          'type': 'image',
          'image_url': photo,
          'alt_text': user,
        },
      },
    ],
  });
  await fetch(webhookURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: data,
  }).then((response) => {
    console.log(response.size);
  });
};

module.exports = postToSlack;
