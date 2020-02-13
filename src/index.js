const console = require('Console');
const prompt = require('prompt');
const getDataFromGithub = require('./utils/getDataFromGithub');

const promptAttributes = {
  properties: {
    name: {
      pattern: /^[a-zA-Z0-9_-]+$/,
      message: 'Solo letras y guiones',
      required: true,
    },
  },
};

prompt.get(promptAttributes, async (err, result) => {

  if (err) {
    console.error('Datos no validos');
  }
  const user = result.name;

  console.log(`  Username: ${user}`);
  await getDataFromGithub(user);

});

prompt.start();
