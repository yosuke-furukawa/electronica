#!/usr/bin/env node

const os = require('os');
const path = require('path');
const fs = require('fs');
const source = path.join(__dirname, '../exercises/program.js');
const target = path.join(os.tmpDir(), './program.js');
fs.createReadStream(source).pipe(fs.createWriteStream(target));
