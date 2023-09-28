const readDatabase = require('../utils');

class StudentsController {
  static async getAllStudents(req, res) {
    const response = [];
    let msg;
    response.push('This is the list of our students');
    try {
      const { studentsData } = await readDatabase();

      for (const key of Object.keys(studentsData)) {
        msg = `Number of students in ${key}: ${studentsData[key].length}. List: ${studentsData[key].join(', ')}`;
        response.push(msg);
      }
      res.status(200).send(response);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major !== 'SWE' && major !== 'CS') {
      res.status(500).send('Major parameter must be CS or SWE');
    }
    try {
      const { studentData } = await readDatabase();
      if (major === 'SWE') {
        res.status(200).send(`List: ${studentData[' SWE'].join(', ')}`);
      } else {
        res.status(200).send(`List: ${studentData[' CS'].join(', ')}`);
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}

module.exports = StudentsController;
