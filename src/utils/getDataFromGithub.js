const puppeteer = require('puppeteer');
const getTime = require('./getTime');
const postToSlack = require('./postToSlack');

const getDataFromGithub = async (githubUser) => {

  const githubUrl = 'https://github.com/';

  const browser = await puppeteer.launch(); //lanzamos el navegador
  const page = await browser.newPage();

  await page.goto(`${githubUrl}${githubUser}`);
  await page.screenshot({ path: `src/images/${getTime()}-${githubUser}.png` });

  const githubCounter = await page.evaluate(() => document.getElementsByClassName('Counter hide-lg hide-md hide-sm')[0].innerText);
  const githubUserPhoto = await page.evaluate(() => document.getElementsByClassName('avatar width-full height-full rounded-2')[0].src);
  await postToSlack(githubUser, githubUserPhoto, githubCounter);
  await browser.close();

};

module.exports = getDataFromGithub ;
