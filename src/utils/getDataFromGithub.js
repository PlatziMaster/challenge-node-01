const puppeteer = require('puppeteer');
const getTime = require('./getTime');
const postToSlack = require('./postToSlack');

const githubUrl = 'https://github.com/';

const getDataFromGithub = async (githubUser) => {

  //ya que no se lanzaba el navegador se le agrego el parametro { headless: false } a puppeteer.launch()
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(`${githubUrl}${githubUser}`);
  await page.screenshot({ path: `src/images/${getTime()}-${githubUser}.png` });

  const githubCounter = await page.evaluate(() => document.getElementsByClassName('Counter')[0].innerText);
  /*se cambio la clase de avatar-before-user-status a avatar width-full height-full
  ya que con la original generaba un error al no encontrar el elemento*/
  const githubUserPhoto = await page.evaluate(() => document.getElementsByClassName('avatar width-full height-full')[0].src);

  postToSlack(githubUser, githubUserPhoto, githubCounter);
  await browser.close();
};

module.exports = getDataFromGithub;
