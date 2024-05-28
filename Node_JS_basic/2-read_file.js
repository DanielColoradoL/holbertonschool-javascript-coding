const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');

    const strArr = data.split('\n');
    const arrStudents = [];
    for (const student of strArr) {
      const studentFil = student.split(',');
      if (student) {
        arrStudents.push({ name: studentFil[0], field: studentFil[3] });
      }
    }
    arrStudents.shift();
    // Print the total number of students
    console.log(`Number of students: ${arrStudents.length}`);
    const arrCs = [];
    const arrSwe = [];
    // For loop to filter based on field
    for (const student of arrStudents) {
      if (student.field === 'CS') {
        arrCs.push(student.name);
      } else {
        arrSwe.push(student.name);
      }
    }
    console.log(`Number of students in CS: ${arrCs.length}. List: ${arrCs.join(', ')}`);
    console.log(`Number of students in SWE: ${arrSwe.length}. List: ${arrSwe.join(', ')}`);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
