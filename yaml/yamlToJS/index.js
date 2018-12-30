'use strict';

const fs   = require('fs');
const path = require('path');
const util = require('util');
const yaml = require('js-yaml');

const yamlToJS = (file) => {
  try {
    const contents = fs.readFileSync(file, 'utf8');
    const data = yaml.load(contents);

    return util.inspect(data, false, 10, true);
  } catch (err) {
    console.log(err.stack || String(err));
  }
}

module.exports = yamlToJS;
