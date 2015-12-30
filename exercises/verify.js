"use strict";

const path = require('path');
const fs = require('fs');
const workshopperExercise = require('workshopper-exercise');
const expectedKeywords = [/done/i, /button/i, /script/i];

module.exports = function() {
  const file = module.parent.parent.filename;
  const content = fs.readFileSync(file).toString();
  const answers = expectedKeywords.filter((keyword) => content.match(keyword));
  console.log(workshopperExercise);
  if (answers.length === expectedKeywords.length) {
    console.log(`Congrats`);
  } else {
    console.log(`Failure`);
  }
};
