const { exec } = require('child_process');

const apiKey = process.env.BYTEYARD_OPENAI_API_KEY;
const model = 'gpt-3.5-turbo';
const maxLength = 60;
if (!apiKey) {
  console.error('API Key not found');
  process.exit(1);
}

// Add your command that should be executed with the API key.
// The command is executed in a shell, so you can include environment variables.
const cmd = `aicommits config set OPENAI_KEY=${apiKey} && aicommits config set model=${model} && aicommits config set max-length=${maxLength} && npx aicommits hook install`;

exec(cmd, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Stderr: ${stderr}`);
    return;
  }
  console.log(`Stdout: ${stdout}`);
});
