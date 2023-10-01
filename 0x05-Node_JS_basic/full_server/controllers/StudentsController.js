const readDatabase = require('../utils');

class StudentsController {
  static async getAllStudents(req, res) {
    const response = {};
    let msg;
    try {
      let studentsData = await readDatabase('../database.csv');
      const data = Object.entries(studentsData);
      let final_data
      res.status(200).send(SWE);
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
      const studentData = await readDatabase('../database.csv');
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
