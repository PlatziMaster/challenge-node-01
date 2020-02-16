const puppeteer = require('puppeteer');
const fs = require('fs');
const getTime = require('./getTime');

const githubUrl = 'https://github.com/';
const pathBase = 'src/images/';

const getDataFromGithub = async (githubUser) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(`${githubUrl}${githubUser}`);
  fs.existsSync(pathBase) ? '' : fs.mkdirSync(pathBase);
  await page.screenshot({ path: `${pathBase}${getTime()}-${githubUser}.png` });

  const githubCounter = await page.evaluate(() => document.getElementsByClassName('Counter')[0].innerText);
  const githubUserPhoto = await page.evaluate(() => document.getElementsByClassName('avatar-before-user-status')[0].src);
  await browser.close();
};

module.exports = getDataFromGithub;
