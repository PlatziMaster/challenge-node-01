const puppeteer = require('puppeteer');
const getData = require('./getTime');

const getDataFromGithub = async (githubUser) => {
  console.log('Launch Puppeteer');
  const githubUrl = config.github;
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(`${githubUrl}${githubUser}`);
  await page.screenshot({ path: `src/images/${getTime()}-${githubUser}.png` });

  const githubCounter = await page.evaluate(() => document.getElementsByClassName('Counter')[0].innerText);
  const githubUserPhoto = await page.evaluate(() => document.getElementsByClassName('avatar-before-user-status')[0].src);
  await browser.close();
};

exports.getDataFromGithub = getDataFromGithub;
