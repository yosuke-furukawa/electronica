#!/usr/bin/env node

const os = require('os');
const path = require('path');
const fs = require('fs');
const source = path.join(__dirname, '../exercises/program.js');
const target = path.join(tmpDir, './program.js');
const program = fs.readFileSync(source, target);
