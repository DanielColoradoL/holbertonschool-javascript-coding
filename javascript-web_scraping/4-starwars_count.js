#!/usr/bin/node
const request = require('request');
const url = process.argv[2];

request.get(url, function (error, response, body) {
  if (error) {
    console.log(error);
  } else {
    const readData = JSON.parse(body);
    let count = 0;
    for (const element of readData.results) {
      if (element.characters.includes('https://swapi-api.hbtn.io/api/people/18/')) {
        count = count + 1;
      }
    }
    console.log(count);
  }
});
