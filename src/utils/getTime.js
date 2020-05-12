const getDataFromGithub = require("./getDataFromGithub");

const getTime = () => {
  const date = new Date();
  return date;
};

module.exports = {
  getTime,
};
