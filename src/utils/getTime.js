function getTime() {
  const date = Math.round(new Date().getTime() / 1000);
  return date;
};

module.exports = getTime;
