const puppeteer = require('puppeteer');
const getTime = require('./getTime');
const postToSlack = require('./postToSlack');

const getDataFromGithub = async (githubUser) => {

  console.log('Launch Puppeteer');
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto(`https://github.com/${githubUser}`);

  await page.screenshot({
    path: `src/images/${getTime()}-${githubUser}.png`,
    type: 'png',
  });

  const githubCounter = await page.evaluate(
    () => document.getElementsByClassName('Counter')[0].innerText,
  );
  const githubUserPhoto = await page.evaluate(
    () => document.getElementsByClassName('avatar width-full height-full')[0].src,
  );

  await browser.close();

  await postToSlack(githubUser, githubUserPhoto, githubCounter);
};

module.exports = getDataFromGithub;
