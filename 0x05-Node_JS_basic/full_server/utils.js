const fs = require('fs');

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    try {
      fs.readFile(filePath,
        { encoding: 'utf8' },
        (error, data) => {
          if (error) {
            reject(new Error('Cannot Load the database'));
          } else {
            const students = data.split('\n')
              .filter((line) => line.trim() !== '')
              .map((value) => value.slice(0, -1)
                .split(',')).sort();
            const fields = {};
            for (const i in students) {
              if (students[i][0] !== 'firstname') {
                if (!fields[students[i][3]]) fields[students[i][3]] = [];
                fields[students[i][3]].push(students[i][0]);
              }
            }
            resolve(fields);
          }
        });
    } catch (error) {
      reject(new Error('Cannot Load the database'));
    }
  });
}

module.exports = readDatabase;
