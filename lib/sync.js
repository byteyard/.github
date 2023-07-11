const term = require('terminal-kit').terminal;

function isLabelDifferent(existing, label) {
    return existing.name !== label.name
        || existing.color !== label.color
        || existing.description !== label.description;
}

function isMilestoneDifferent(existing, milestone) {
    return existing.title !== milestone.title
        || existing.state !== milestone.state
        || existing.description !== milestone.description
        || existing.due_on !== milestone.due_on;
}

async function syncLabels(octokit, repo, labels) {
    term.cyan(`Syncing labels for "${repo}"\n`);
    let [owner, repoName] = repo.split('/');

    // Get all labels
    const existingLabels = await octokit.paginate(octokit.rest.issues.listLabelsForRepo, {
        owner: owner,
        repo: repoName
    });

    term.green(`Fetched ${existingLabels.length} labels from "${repo}"\n`);

    // Create or update labels
    for (let label of labels) {
        const existingLabel = existingLabels.find(
        l => label.previousTitles?.includes(l.name) || l.name === label.name
        );

        if (existingLabel) {
        if (isLabelDifferent(existingLabel, label)) {
            // Update the existing label
            await octokit.rest.issues.updateLabel({
            owner,
            repo: repoName,
            current_name: existingLabel.name,
            name: label.name,
            color: label.color,
            description: label.description
            });
            term.yellow(`Updated label "${label.name}" in "${repo}"\n`);
        } else {
            term.green(`Label "${label.name}" in "${repo}" is up to date\n`);
        }
        } else {
        // Create a new label
        await octokit.rest.issues.createLabel({
            owner,
            repo: repoName,
            name: label.name,
            color: label.color,
            description: label.description
        });
        term.yellow(`Created label "${label.name}" in "${repo}"\n`);
        }
    }

    // Delete labels that do not exist in our labels.json
    for (let existingLabel of existingLabels) {
        if (!labels.find(l => l.name === existingLabel.name)) {
        await octokit.rest.issues.deleteLabel({
            owner,
            repo: repoName,
            name: existingLabel.name
        });
        term.magenta(`Deleted label "${existingLabel.name}" from "${repo}"\n`);
        }
    }
}

async function syncMilestones(octokit, repo, milestones) {
    term.cyan(`Syncing milestones for "${repo}"\n`);
    let [owner, repoName] = repo.split('/');

    // Get all milestones
    const existingMilestones = await octokit.paginate(octokit.rest.issues.listMilestones, {
        owner: owner,
        repo: repoName,
        state: 'all'  // Fetch both open and closed milestones
    });

    term.green(`Fetched "${existingMilestones.length}" milestones from "${repo}"\n`);

    // Create or update milestones
    for (let milestone of milestones) {
        try {
        const existingMilestone = existingMilestones.find(
            m => milestone.previousTitles?.includes(m.title) || m.title === milestone.title
        );
    
        if (existingMilestone) {
            if (isMilestoneDifferent(existingMilestone, milestone)) {
            // Update the existing milestone
            await octokit.rest.issues.updateMilestone({
                owner,
                repo: repoName,
                milestone_number: existingMilestone.number,
                title: milestone.title,
                state: milestone.state,
                description: milestone.description,
                due_on: milestone.due_on
            });
            term.yellow(`Updated milestone "${milestone.title}" in "${repo}"\n`);
            } else {
            term.green(`Milestone "${milestone.title}" in "${repo}" is up to date\n`);
            }
        } else {
            // Create a new milestone
            await octokit.rest.issues.createMilestone({
            owner,
            repo: repoName,
            title: milestone.title,
            state: milestone.state,
            description: milestone.description,
            due_on: milestone.due_on
            });
            term.yellow(`Created milestone "${milestone.title}" in "${repo}"\n`);
        }
        } catch (err) {
        if (err.status === 422) {
            term.red(`Milestone "${milestone.title}" already exists in "${repo}", skipping.\n`);
        } else {
            throw err;
        }
        }
    }
  

    // Delete milestones that do not exist in our milestones.json
    for (let existingMilestone of existingMilestones) {
        if (!milestones.find(m => m.title === existingMilestone.title)) {
        await octokit.rest.issues.deleteMilestone({
            owner,
            repo: repoName,
            milestone_number: existingMilestone.number
        });
        term.magenta(`Deleted milestone "${existingMilestone.title}" from "${repo}"\n`);
        }
    }
}

module.exports = {
    syncLabels,
    syncMilestones
};
