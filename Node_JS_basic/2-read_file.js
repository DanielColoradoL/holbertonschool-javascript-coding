const fs = require('fs');

function countStudents(path) {
  fs.readFile(path, 'utf8', (error, data) => {
    if (error) {
      throw new Error('Cannot load the database');
    } else {    
      const strArr = data.trim().split('\n');
      strArr.shift();

      process.stdout.write(`Number of students: ${strArr.length}\n`);
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
          process.stdout.write(`Number of students in ${key}: ${dict[key].length}. List: ${dict[key].join(', ')}\n`);
        }
      }
    }
  });
}

module.exports = countStudents;
