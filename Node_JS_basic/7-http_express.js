const express = require('express');
const fs = require('fs');

const filePath = process.argv[2];
const app = express();
const port = 1245;

// Defining a route for handling client communication
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});
app.get('/students', (req, res) => {
  const output = [];
  // Task 2
  fs.readFile(filePath, 'utf8', (error, data) => {
    if (error) {
      res.status(500).send(`This is the list of our students\n${error.message}`);
    } else {
      const strArr = data.trim().split('\n');
      strArr.shift();
      output.push(`Number of students: ${strArr.length}\n`);
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
          output.push(`Number of students in ${key}: ${dict[key].length}. List: ${dict[key].join(', ')}\n`);
        }
      }
      res.send(`This is the list of our students\n${output.join('')}`);
    }
  });
});

// Starting the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

module.exports = app;
