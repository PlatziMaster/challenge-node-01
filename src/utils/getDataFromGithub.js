const puppeteer = require('puppeteer');
const config = require('../utils/config');
const getTime = require('./getTime');
const slackHook = require('./postToSlack');

const getDataFromGithub = async (githubUser) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const githubUrl = config.githubUrl();
  await page.goto(`${githubUrl}/${githubUser}`);
  await page.screenshot({ path: `src/images/${getTime.getTime()}-${githubUser}.png` });
  const githubUserPhoto = await page.evaluate(() => document.getElementsByClassName('avatar-before-user-status')[0].src);
  const githubCounter = await page.evaluate(() => document.getElementsByClassName('Counter')[0].innerText);
  slackHook.postToSlack(githubUser, githubUserPhoto, githubCounter);
  await browser.close();
};

exports.getDataFromGithub = getDataFromGithub;
