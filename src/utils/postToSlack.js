const fetch = require('node-fetch');
const { TOKEN, HOOK } = require('../config');

const webhookURL = `${HOOK}${TOKEN}`;

const postToSlack = async (user, photo, count) => {
  const data = JSON.stringify({
    'blocks': [
      {
        'type': 'section',
        'text': {
          'type': 'mrkdwn',
          'text': `*Reto Cumplido* \n https://github.com/${user} \n Numero de repositorios: ${count.trimStart()}`,
        },
        'accessory': {
          'type': 'image',
          'image_url': photo,
          'alt_text': user,
        },
      },
    ],
  });
  try {
    await fetch(webhookURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: data,
    }).then((response) => {
      // console.log(response);
    });
  } catch (err) {
    // console.error(`ERROR EN FETCH: ${err}`);
  }
};

module.exports = postToSlack;
