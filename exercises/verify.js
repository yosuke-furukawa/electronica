"use strict";

const cp = require('child_process');
const os = require('os');
const path = require('path');
const executeFilePath = path.join(os.tmpDir(), './program.js');
console.log(executeFilePath);

module.exports = function() {

  const env = Object.assign(process.env, { parent_filename: module.parent.parent.filename });
  cp.exec(`electronica verify ${executeFilePath}`, {
    env: env
  }, function(err, stdout, stderr){
    if (err || stderr) {
      console.error(err || stderr);
      console.error("FAILED!!!!!!");
    } else if (!stdout) {
      console.error("Result is empty");
      console.error("FAILED!!!!!!");
    } else {
      console.log(stdout);
      console.log("Congrats!!!!!!");
    }
  })
};
