const puppeteer = require('puppeteer');
const getTime = require('./getTime.js');
const postToSlack = require('./postToSlack');

const getDataFromGithub = async (githubUser) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const githubUrl = 'https://github.com/';
  await page.goto(`${githubUrl}${githubUser}`);
  await page.screenshot({ path: `src/images/${getTime()}-${githubUser}.png` });

  const githubCounter = await page.evaluate(() => document.getElementsByClassName('Counter')[0].innerText);
  const githubUserPhoto = await page.evaluate(() => document.getElementsByClassName('avatar')[3].src);
  postToSlack(githubUser, githubUserPhoto, githubCounter);
  await browser.close();
};

module.exports = getDataFromGithub;
