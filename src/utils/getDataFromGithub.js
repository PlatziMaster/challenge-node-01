const puppeteer = require('puppeteer');
const { GIT_HUB_URL } = require('../config');

const githubUrl = GIT_HUB_URL;
const getTime = require('./getTime');
const postToSlack = require('./postToSlack');

const getDataFromGithub = async (githubUser) => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(`${githubUrl}${githubUser}`);
    // console.log(await page.content());
    await page.screenshot({ path: `src/images/${getTime()}-${githubUser}.png` });

    const githubCounter = await page.evaluate(() => document.getElementsByClassName('Counter')[0].innerText);
    const githubUserPhoto = await page.evaluate(() => document.getElementsByClassName('avatar')[0].src); 
    postToSlack(githubUser, githubUserPhoto, githubCounter);

    await browser.close();
  } catch (err) {
    // console.error(`ERROR EN GET DATA: ${err}`);
  }
};

module.exports = getDataFromGithub;
