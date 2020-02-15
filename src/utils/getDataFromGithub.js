const puppeteer = require('puppeteer');
const postToSlack = require('./postToSlack');
const getTime = require('./getTime');

const getDataFromGithub = async (githubUser) => {

  const githubUrl = 'https://github.com/';
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const pageUrl = `${githubUrl}${githubUser}/`;
  const imgUrl = `./src/images/${getTime()}-${githubUser}.png`;

  await page.goto(pageUrl);
  await page.screenshot({ path: imgUrl });

  const githubCounter = await page.evaluate(() => document.getElementsByClassName('Counter')[0].innerText);
  const githubUserPhoto = await page.evaluate(() => document.getElementsByClassName('avatar-before-user-status')[0].src);

  postToSlack(githubUser, githubUserPhoto, githubCounter);
  await browser.close();
};

module.exports = getDataFromGithub;
