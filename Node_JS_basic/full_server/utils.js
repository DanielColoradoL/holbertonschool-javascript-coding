const fs = require('fs').promises;

async function readDatabase(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const strArr = data.trim().split('\n');
    strArr.shift();
    const dict = {};
    // format the data
    for (const line of strArr) {
      const clearLine = line.split(',');
      if (!dict[clearLine[3]]) {
        dict[clearLine[3]] = [];
      }
      dict[clearLine[3]].push(clearLine[0]);
    }
    return dict;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = readDatabase;
