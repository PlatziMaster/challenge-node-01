const fetch = require('node-fetch');

require('dotenv').config();

const { TOKEN, HOOK } = process.env;
//console.log(`${HOOK}/${TOKEN}`);
const postToSlack = async (user, photo, count) => {
  const webhookURL = `${HOOK}${TOKEN}`;
  const data = JSON.stringify({
    'blocks': [
      {
        'type': 'section',
        'text': {
          'type': 'mrkdwn',
          'text': `*Reto Cumplido* \n https://github.com/${user} \n Numero de repositorios: ${count}`,
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
    //console.log(response.size);
  });
};
module.exports = postToSlack;
