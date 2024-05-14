#!/usr/bin/node
const request = require('request');
const url = process.argv[2];

request.get(url, function (error, response, body) {
  if (error) {
    console.log(error);
  } else {
    const readData = JSON.parse(body).results;
    let count = 0;
    for (const element of readData) {
      for (const userId of element.characters) {
        const characterId = userId.split('/')[5];
        if (characterId === '18') {
          count = count + 1;
        }
      }
    }
    console.log(count);
  }
});
