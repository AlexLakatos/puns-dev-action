const core = require('@actions/core');
const github = require('@actions/github');
const puns = require('puns.dev');

try {
  let pun = puns.random();
  core.setOutput("pun", pun.pun);
  core.setOutput("punchline", pun.punchline);
  const payload = JSON.stringify(github.context.payload, undefined, 2)
} catch (error) {
  core.setFailed(error.message);
}