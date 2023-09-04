const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;
const args = process.argv.slice(2);
const database = args[0];

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const msg = 'This is the list of our students\n';
  try {
    const students = await countStudents(database);
    res.send(`${msg}${students.join('\n')}`);
  } catch (error) {
    res.end(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;
