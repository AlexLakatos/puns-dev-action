const core = require('@actions/core');
const github = require('@actions/github');
const puns = require('puns.dev');

try {
  core.setOutput("pun", puns.random());
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}