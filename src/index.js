const prompt = require('prompt');
// # 1.1 SE IMPORTA LA FUNCION getDataFromGithub DEL ARCHIVO getDataFromGithub.js
const { getDataFromGithub } = require('./utils/getDataFromGithub');
// INSTALA DOTENV EN EL PROYECTO Y AÑADE LA CONFIGURACIÓN A postToSlack.js
// require('dotenv').config();

const count = 1;

const PromptAttributes = [{
  name: 'githubUser',
}];

// # 1.4 EJECUTA LA FUNCION getDataFromGithub
prompt.get(PromptAttributes, async (err, result) => {
  if (err) {
    console.log(err);
    return 1;
  }
  console.log('Command-line received data: ', result.githubUser);

  // # 1.2 EXTRAE EL VALOR ASIGNADO DESDE CONSOLA Y ASIGNALO A LA VARIABLE LLAMADA `user`.
  const user = result.githubUser;
  // # 1.3 VALIDA QUE `user` QUE TENGA UN VALOR ASIGNADO
  if (!user) {
    console.log('Falta dato de user name: ');
  }
  // # 1.4 EJECUTA LA FUNCION getDataFromGithub
  await getDataFromGithub(user);
});

prompt.start();
