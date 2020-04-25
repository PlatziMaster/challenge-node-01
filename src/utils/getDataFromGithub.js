const puppeteer = require('puppeteer');
const getTime = require('./getTime');
const postTo = require('./postToSlack');

const getDataFromGithub = async (githubUser) => {
  try {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    const githubUrl = 'https://github.com/';

    await page.goto(`${githubUrl}${githubUser}`);
    await page.screenshot({ path: `src/images/${getTime.getTime()}-${githubUser}.png` });

    const githubCounter = await page.evaluate(
      () => document.getElementsByClassName('Counter')[0].innerText,
    );
    const githubUserPhoto = await page.evaluate(
      () => document.getElementsByClassName('avatar-before-user-status')[0].src,
    );
    postTo.postToSlack(githubUser, githubUserPhoto, githubCounter);
    await browser.close();

  } catch (error) {
    throw new Error('oops');
  }

};

exports.getDataFromGithub = getDataFromGithub;
