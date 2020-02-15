const moment = require('moment');

const getTime = () => moment().format('YYYY-MM-DD-HH:hh');

module.exports = getTime;
