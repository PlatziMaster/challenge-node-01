require('dotenv').config();

exports.githubUrl = process.env.GITHUB || '';
exports.hook = process.env.HOOK || '';
exports.token = process.env.TOKEN || '';
