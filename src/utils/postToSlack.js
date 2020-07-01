const fetch = require('node-fetch');
const dotenv = require('dotenv');

dotenv.config();

const { TOKEN, HOOK } = process.env;
//const postToSlack = async (user, photo, count) => {
const postToSlack = async (user, photo) => {
  const webhookURL = `${HOOK}/${TOKEN}`;
  const data = JSON.stringify({
    'blocks': [
      {
        'type': 'section',
        'text': {
          'type': 'mrkdwn',
          'text': `*Reto Cumplido* \n https://github.com/${user}`,
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
