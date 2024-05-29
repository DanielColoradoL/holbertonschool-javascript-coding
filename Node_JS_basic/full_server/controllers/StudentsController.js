import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const path = process.argv[2];
      const students = readDatabase(path);
      let message = 'This is the list of our students\n';
      const dict = {};
      students[0].sort();
      students[1].sort();
      for (const key in students) {
        if (Object.prototype.hasOwnProperty.call(students, key)) {
          message += (`Number of students in ${key}: ${dict[key].length}. List: ${dict[key].join(', ')}\n`);
        }
      }
      res.status(200).send(message);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    try {
      const { major } = req.params;
      if (major !== 'CS' && major !== 'SWE') {
        res.status(500).send('Major parameter must be CS or SWE');
        return;
      }

      const database = process.argv[2];
      const students = await readDatabase(database);

      if (!students[major]) {
        res.status(200).send('List: ');
        return;
      }

      const names = students[major];
      res.status(200).send(`List: ${names.join(', ')}`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
