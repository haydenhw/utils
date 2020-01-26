const fs = require('fs');

const print = obj => (
  console.log(require('util').inspect(obj, false, null, true))
);

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

const toArray = (text) => {
  const logArray = text.split('\n'); 

  console.log('\n')

  logArray.forEach(entry => {
    const js = JSON.parse(entry);
    const { message } = js;
    
    if (typeof message === 'string' && message.match(/\*\*.*\*\*/)) {
      console.log(message);
    } else {
      print(js);
      console.log('\n');
    }
  });
};

readFile('./logs.js', toArray);