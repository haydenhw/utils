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



const sleep = () => {
console.log('sleeping');
runCmd('pmset sleepnow')
}

const time = 1000 * 5;
setTimeout(sleep, time);

