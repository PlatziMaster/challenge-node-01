/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable comma-dangle */
/* eslint-disable no-console */
const puppeteer = require("puppeteer");
const getTime = require("./getTime");
const postToSlack = require("./postToSlack");

const getDataFromGithub = async (githubUser) => {
  console.log("Launch Puppeteer...");

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const githubUrl = "https://github.com/";

  await page.goto(`${githubUrl}${githubUser}`);
  await page.screenshot({
    path: `./src/images/${getTime()}-${githubUser}.png`,
  });

  const githubCounter = await page.evaluate(
    () => document.getElementsByClassName("Counter")[0].innerText
  );
  const githubUserPhoto = await page.evaluate(
    () => document.getElementsByClassName("avatar width-full height-full rounded-2")[0].src
  );

  console.log(githubCounter);
  console.log(githubUserPhoto);

  await postToSlack(githubUser, githubUserPhoto, githubCounter);

  await browser.close();
};

module.exports = getDataFromGithub;
