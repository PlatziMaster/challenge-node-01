/* eslint-disable no-console */
const prompt = require("prompt");
const getDataFromGithub = require("./utils/getDataFromGithub");

// Configuración para prompt.
const promptAttributes = [
  {
    name: "githubUser",
    required: true,
    description: "Username de Github",
    type: "string",
    message: "Campo no valido.",
  },
];

prompt.get(promptAttributes, async (err, result) => {
  if (err) {
    return false;
  }

  const user = result.githubUser;
  await getDataFromGithub(user);
  console.log("Command-line received data:");
});

prompt.start();
