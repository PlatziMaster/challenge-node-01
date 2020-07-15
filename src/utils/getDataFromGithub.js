
const puppeteer = require('puppeteer');

const githubUrl = 'https://github.com/';

const slack = require('./postToSlack');

const todayDate = new Date();

const getDataFromGithub = async (githubUser) => {
  //console.log(`${githubUrl}${githubUser}`);
  //console.log('Launch Puppeteer');

  const browser = await puppeteer.launch();

  const page = await browser.newPage();
  await page.goto(`${githubUrl}${githubUser}`);
  await page.screenshot({ path: `src/images/${todayDate.getTime()}-${githubUser}.png` });

  const githubCounter = await page.evaluate(() => document.getElementsByClassName('Counter').innerText);
  const githubUserPhoto = await page.evaluate(() => document.getElementsByClassName('avatar-user').src);

  slack(githubUser, githubUserPhoto, githubCounter);

  await browser.close();
};
module.exports = getDataFromGithub;
