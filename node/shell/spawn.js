const { spawn } = require('child_process');

const child = spawn('node', ['app.js'], {
  detached: true,
  stdio: 'ignore'
});

child.unref();