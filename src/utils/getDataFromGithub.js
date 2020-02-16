const puppeteer = require('puppeteer');
const { config } = require('../config');
const postToSlack = require('./postToSlack');
const getTime = require('./getTime');

const getDataFromGithub = async (githubUser) => {
  const githubUrl = config.gitHubUrl;
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(`${githubUrl}${githubUser}`);
  await page.screenshot({ path: `src/images/${getTime()}-${githubUser}.png`, type: 'png' });

  const githubCounter = await page.evaluate(() => document.getElementsByClassName('Counter')[0].innerText);
  const githubUserPhoto = await page.evaluate(() => document.getElementsByClassName('avatar width-full height-full')[0].src);
  await postToSlack(githubUser, githubUserPhoto, githubCounter);
  await browser.close();
};

module.exports = getDataFromGithub;
