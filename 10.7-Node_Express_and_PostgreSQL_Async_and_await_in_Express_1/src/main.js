const {
  generateMessage,
  goodbye,
  generateSlogan,
} = require("../utils/slogan-generator");

async function getSlogan(request) {
  const response = await generateSlogan(request);
  console.log(`Your request was: ${request}`);
  console.log(`Your slogan is: ${response.slogan}`);
}

async function fullSession(request) {
  console.log(await generateMessage());
  const slogan = await getSlogan(request);
  console.log(await goodbye());
}

module.exports = { getSlogan, fullSession };
