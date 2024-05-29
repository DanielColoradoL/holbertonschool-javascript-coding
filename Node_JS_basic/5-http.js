const http = require('http');
const url = require('url');
const fs = require('fs');

const filePath = process.argv[2];

const port = 1245;
const app = http.createServer((req, res) => {
  const reqUrl = url.parse(req.url).pathname;

  if (reqUrl === '/') {
    res.write('Hello Holberton School!');
    res.end();
  } else if (reqUrl === '/students') {
    res.write('This is the list of our students\n');
    // Task 2
    fs.readFile(filePath, 'utf8', (error, data) => {
      if (error) {
        throw new Error('Cannot load the database');
      } else {
        const strArr = data.trim().split('\n');
        strArr.shift();
        res.write(`Number of students: ${strArr.length}\n`);
        const dict = {};
        // format the data
        for (const line of strArr) {
          const clearLine = line.split(',');
          if (!dict[clearLine[3]]) {
            dict[clearLine[3]] = [];
          }
          dict[clearLine[3]].push(clearLine[0]);
        }
        // iterate over each key and concatenate the value array
        for (const key in dict) {
          if (Object.prototype.hasOwnProperty.call(dict, key)) {
            res.write(`Number of students in ${key}: ${dict[key].length}. List: ${dict[key].join(', ')}\n`);
          }
        }
        res.end();
      }
    });
  }
}).listen(port);

module.exports = app;
