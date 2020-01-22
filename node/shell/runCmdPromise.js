const { exec } = require('child_process');
// pass any bash command to this function wrapped in a quotes
const runCmd = (cmd) => {
  return new Promise((resolve, reject) => {
    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        reject(error);
        return;
      }
      console.log(stdout);
      resolve();
    });
  });
};

module.exports = runCmd;
