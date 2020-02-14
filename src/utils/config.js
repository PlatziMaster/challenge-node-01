exports.githubUrl = () => process.env.GITHUB_URL || 'https://github.com/';

exports.slackUrl = () => process.env.HOOK || '';

exports.tokenSlack = () => process.env.TOKEN || '';
