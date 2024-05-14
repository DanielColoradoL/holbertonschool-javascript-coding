#!/usr/bin/node
const fs = require('fs');
const fName = process.argv[2];
const textWrite = process.argv[3];

fs.writeFile(fName, textWrite, 'utf8', function (err) {
  if (err) {
    console.log(err);
  }
});
