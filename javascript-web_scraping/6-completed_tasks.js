#!/usr/bin/node
const request = require('request');
const url = process.argv[2];

request.get(url, function (error, response, body) {
  if (error) {
    console.log(error);
  } else {
    const readData = JSON.parse(body);
    // console.log(readData);
    const output = {};
    for (const item of readData) {
      if (item.completed === true) {
        if (output[item.userId]) {
          output[item.userId]++;
        } else {
          output[item.userId] = 1;
        }
      }
    }
    console.log(output);
  }
});
