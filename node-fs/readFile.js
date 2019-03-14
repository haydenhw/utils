const fs = require('fs');

fs.readFile('test.js', { encoding: 'utf-8' }, (error, data) => {
  if (error) {
    throw new Error(error);
  }

  console.log(data);
});
