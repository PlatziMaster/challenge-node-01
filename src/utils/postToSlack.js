const fetch = require('node-fetch');
const dotenv = require('dotenv');

dotenv.config();

const postToSlack = async (user, photo, count) => {
  const webhookURL = `${process.env.HOOK}/${process.env.TOKEN}`;
  const data = JSON.stringify({
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `*Reto Cumplido* \n https://github.com/${user} \n Numero de repositorios: ${count.trimStart()}`,
        },
        accessory: {
          type: 'image',
          image_url: photo,
          alt_text: user,
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
  });
};

module.exports = postToSlack;
