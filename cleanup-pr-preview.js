// cleanup-pr-preview.js
const { execSync } = require('child_process');

const prNumber = process.argv[2]; // PR number passed as a command-line argument

if (!prNumber) {
  console.error('Please provide a PR number.');
  process.exit(1);
}

try {
  // Check out the gh-pages branch
  execSync('git fetch --all && git checkout gh-pages', { stdio: 'inherit' });

  // Delete the PR preview directory
  execSync(`git rm -rf ./pr-${prNumber}`, { stdio: 'inherit' });

  // Commit the changes
  execSync(`git commit -m "Cleanup preview for PR #${prNumber}"`, { stdio: 'inherit' });

  // Push the changes back to the repository
  execSync('git push origin gh-pages', { stdio: 'inherit' });

  console.log(`Cleanup completed for PR #${prNumber}`);
} catch (error) {
  console.error('Failed to cleanup PR preview:', error);
  process.exit(1);
}
