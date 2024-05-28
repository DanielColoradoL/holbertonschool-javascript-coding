const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const strArr = data.split('\n');
    strArr.shift();

    console.log(`Number of students: ${strArr.length}`);
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
        console.log(`Number of students in ${key}}: ${dict[key].length}. List: ${dict[key].join(', ')}`);
      }
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
