const { exec } = require('child_process');
// pass any bash command to this function wrapped in a quotes
const runCmd = (cmd) => {
  exec(cmd, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(stdout);
  });
};

module.exports = { runCmd };