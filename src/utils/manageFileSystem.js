const fs = require('fs');
const chalk = require('chalk');

/**
 * Checks if the directory exists. If it doesn't, it creates the directory.
 * @param {string} dirname The name for directory
 * @returns the path of created directory
 */
function createDir(dirname = 'unknown') {
  const path = `./src/${dirname}`;

  try {
    fs.statSync(`${path}`);
    console.log(
      chalk.cyan(
        `${path} directory already exists so it will not be created again`,
      ),
    );
  } catch (error) {
    fs.mkdirSync(`${path}`);
    console.log(chalk.greenBright(`Directory created successfully: ${path}`));
  }

  return path;
}

module.exports = createDir;
