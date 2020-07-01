const puppeteer = require('puppeteer');
const getTime = require('./getTime');
const githubUrl = 'https://github.com/';
const postToSlack = require('./postToSlack');

const getDataFromGithub = async (githubUser) => {
  console.log('Launch Puppeteer');
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(`${githubUrl}${githubUser}`);
  await page.screenshot({ path: `src/images/${getTime()}-${githubUser}.png` });
  
  const githubUserPhoto = await page.evaluate(() => document.getElementsByClassName('avatar-user')[0].src);
 // const githubCounter = await page.evaluate(() => document.getElementsByClassName('Counter')[0].innerText);

  //await postToSlack(githubUser, githubUserPhoto, githubCounter);
  await postToSlack(githubUser, githubUserPhoto);
  await browser.close();
};

module.exports = getDataFromGithub;
