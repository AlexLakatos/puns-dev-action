const core = require('@actions/core');
const puns = require('puns.dev');

try {
  let pun = puns.random();
  core.setOutput("pun", pun.pun);
  core.setOutput("punchline", pun.punchline);
} catch (error) {
  core.setFailed(error.message);
}
