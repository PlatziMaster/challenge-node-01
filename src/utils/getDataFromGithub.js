const puppeteer = require('puppeteer');
const cfg = require('../utils/configuration');
const time = require('../utils/getTime');
const slack = require('../utils/postToSlack');

const getDataFromGithub = async (githubUser) => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(`${cfg.githubUrl}${githubUser}`);
    await page.screenshot({ path: `src/images/${time.getTime()}-${githubUser}.png` });

    const githubCounter = await page.evaluate(() => document.getElementsByClassName('Counter')[0].innerText);
    const githubUserPhoto = await page.evaluate(() => document.getElementsByClassName('avatar-before-user-status')[0].src);

    slack.postToSlack(githubUser, githubUserPhoto, githubCounter);

    await browser.close();

  } catch (error) {
  }
};

exports.getDataFromGithub = getDataFromGithub;
