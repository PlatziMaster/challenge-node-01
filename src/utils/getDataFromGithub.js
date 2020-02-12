// const puppeteer = require('puppeteer');
const getTime = require('./getTime');

const getDataFromGithub = async (githubUser) => {
  console.log('Launch Puppeteer');
  console.log(`Tu usuario es: ${githubUser}`);
  const githubUrl = 'https://github.com/';
  console.log(`Page GitHub ${githubUrl}${githubUser}`);
  console.log(`La fecha es: ${getTime()}`)
  // const browser = await puppeteer.launch();
  // const page = await browser.newPage();

  // await page.goto(`${githubUrl}${githubUser}`);
  // await page.screenshot({ path: `src/images/${getTime()}-${githubUser}.png` });

  // const githubCounter = await page.evaluate(() => document.getElementsByClassName('Counter')[0].innerText);

  // const githubUserPhoto = await page.evaluate(() => document.getElementsByClassName('avatar-before-user-status')[0].src);
  // await browser.close();
};

module.exports = getDataFromGithub;
