const fs = require('fs');

const data = fs.readFileSync('database.csv', 'utf-8');
const lines = data.split('\n').filter((line) => line.trim() !== '');
const persons = lines.map((item) => item.split(','));
console.log(persons[0][0]);


