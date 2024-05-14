#!/usr/bin/node
const request = require('request');
const fs = require('fs');
const url = process.argv[2];
const fPath = process.argv[3];

request.get(url, function (error, response, body) {
  if (error) {
    console.log(error);
  } else {
    const readData = body;
    fs.writeFile(fPath, readData, 'utf8', function (err) {
      if (err) {
        console.log(err);
      }
    });
  }
});
