// Import modules
const puppeteer = require('puppeteer');
const date = require('./getTime');
const slack = require('./postToSlack');
// Import dotenv data
require('dotenv').config();

getDataFromGithub = async (githubUser) => {
  // console.log('Launch Puppeteer');
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const githubLoginUrl = 'https://github.com/login';
  const githubUrl = 'https://github.com/';

  // Go to GitHub login form
  await page.goto(`${githubLoginUrl}`, { waitUntil: 'networkidle0' });
  await page.type('#login_field', process.env.GITHUB_EMAIL);
  await page.type('#password', process.env.GITHUB_PASSWORD);
  // Click login button and wait for navigation
  await Promise.all([
    page.click('[type=submit]'),
    page.waitForNavigation({ waitUntil: 'networkidle0' }),
  ]);

  // Go to profile page
  await page.goto(`${githubUrl}${githubUser}`);
  await page.screenshot({
    path: `src/images/${date.getTime()}-${githubUser}.png`,
    type: 'jpeg',
    fullPage: true,
  });
  const githubCounter = await page.evaluate(() => document.getElementsByClassName('Counter')[0].innerText);
  const githubUserPhoto = await page.evaluate(() => document.getElementsByClassName('avatar-before-user-status')[0].src);
  slack.postToSlack(githubUser, githubUserPhoto, githubCounter);

  await browser.close();
};

// Export function
module.exports.getDataFromGithub = getDataFromGithub;
