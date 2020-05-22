const puppeteer = require('puppeteer');
// # 3.1 CREA UNA FUNCIÓN LLAMADA GETTIME QUE RETORNA LA FECHA EN UNIX Timestamp
const getTime = require('./getTime');
// # 4 IMPORTA LA FUNCIÓN postToSlack EN getDataFromGithub Y EJECUTA ESTA LLAMADA ASIGNANDO LOS ARGUMENTOS NECESARIOS ANTES DE browser.close();
const postToSlack = require('./postToSlack');

const getDataFromGithub = async (githubUser) => {
  console.log('Launch Puppeteer');
  const browser = await puppeteer.launch({
    headless: false, args: ['--no-sandbox']
  });
  const page = await browser.newPage();
  // # 2 CREA UNA VARIABLE LLAMADA `githubUrl` CON LA URL DE GITHUB EN LA FUNCIÓN `getDataFromGithub`
  const githubUrl = 'https://github.com/';

  await page.goto(`${githubUrl}${githubUser}`);
  await page.screenshot({ path: `src/images/${getTime()}-${githubUser}.png` });

  const githubCounter = await page.evaluate(() => document.getElementsByClassName('Counter')[0].innerText);
  const githubUserPhoto = await page.evaluate(() => document.getElementsByClassName('avatar width-full height-full')[0].src);
  // # 4 IMPORTA LA FUNCIÓN postToSlack EN getDataFromGithub Y EJECUTA ESTA LLAMADA ASIGNANDO LOS ARGUMENTOS NECESARIOS ANTES DE browser.close();
  postToSlack(githubUser, githubUserPhoto, githubCounter);

  await browser.close();
};

// module.exports = getDataFromGithub;
module.exports = {
  getDataFromGithub,
};