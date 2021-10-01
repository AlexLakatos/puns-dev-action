const core = require('@actions/core');
const github = require('@actions/github');
const puns = require('puns.dev');

try {
  let pun = puns.random();
  core.setOutput("pun", JSON.stringify(pun));
  console.log(`The pun: ${JSON.stringify(pun)}`);
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}