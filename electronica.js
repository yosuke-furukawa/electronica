#!/usr/bin/env node

const workshopper = require('workshopper-adventure');
const path        = require('path');

function fpath (f) {
  return path.join(__dirname, f);
}

workshopper({
  name        : 'electronica',
  title       : 'Electronica',
  subtitle    : 'Rock and Roll, Electronica!',
  appDir      : __dirname,
  languages   : ['ja'],
  exerciseDir : fpath('./exercises/')
});
