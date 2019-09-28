const fs = require('fs');

const writeFile = (fileHandle, text) => {
  fs.writeFile(fileHandle, text, (err) => {
    if (err) {
      throw new Error(err);
    }

    console.log('The file was saved!');
  });
};

const readFile = (fileHandle, callback) => {
  fs.readFile(fileHandle, { encoding: 'utf-8' }, (err, data) => {
    if (err) {
      throw new Error(err);
    }

    callback(data);
  });
};

const logContents = (text) => { console.log(text); };