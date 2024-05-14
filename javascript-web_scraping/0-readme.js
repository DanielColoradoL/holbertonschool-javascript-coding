#!/usr/bin/node
const fs = require('fs');
const fName = process.argv[2];
fs.readFile(fName, 'utf8', function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
