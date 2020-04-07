const puppeteer = require('puppeteer');
const chalk = require('chalk');

const createDir = require('./manageFileSystem');
const getTime = require('./getTime');
const postToSlack = require('./postToSlack');

/**
 *
 * @param {string} githubUser Github user to get data
 */
const getDataFromGithub = async githubUser => {
  console.log(chalk.cyanBright('Launching Puppeteer...'));

  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const githubUrl = 'https://github.com/';

    await page.goto(`${githubUrl}${githubUser}`);
    await page.screenshot({
      // If the directory `src/images/` doesn't exist throw an error
      // createDir take care of create the dir before
      // try to save the image so it handle the error
      path: `${createDir('images')}/${getTime()}-${githubUser}.png`,
    });

    const githubRepositoriesCounter = await page.evaluate(() => {
      return document.getElementsByClassName('Counter')[0].innerText;
    });

    const githubUserPhotoSrc = await page.evaluate(() => {
      return document.getElementsByClassName('avatar-before-user-status')[0]
        .src;
    });

    postToSlack(githubUser, githubUserPhotoSrc, githubRepositoriesCounter);

    await browser.close();
    console.log(chalk.greenBright('Process finished successfully!'));
  } catch (error) {
    console.log('There was an error getting the github user data');
    console.log('Error:', error.message);
  }
};

module.exports = getDataFromGithub;
