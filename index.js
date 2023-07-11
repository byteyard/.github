const { Octokit } = require('@octokit/rest');
const term = require('terminal-kit').terminal;
const { syncLabels, syncMilestones } = require('./lib/sync.js');

// Load your configuration
const repos = require('./config/repos.json');
const labels = require('./config/labels.json');
const milestones = require('./config/milestones.json');

// Use the API token from the GitHub Codespaces secrets
githubToken = process.env.BYTEYARD_GITHUB_TOKEN;

// Instantiate Octokit with your token
const octokit = new Octokit({
  auth: githubToken,
});

term.white(`SYNC STARTED\n`);

async function run() {
  for (let repo of repos) {
    await syncLabels(octokit, repo, labels);
    await syncMilestones(octokit, repo, milestones);
  }
  term.white(`SYNC FINISHED\n`);
}

run().catch(err => {
  term.red(`SYNC ERROR\n`);
  console.error(err);
});
