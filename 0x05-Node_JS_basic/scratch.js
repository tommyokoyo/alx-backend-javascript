const fs = require('fs');
const major = 'SWE'

const data = fs.readFileSync('database.csv', 'utf-8');
const students = data.split('\n')
    .filter((line) => line.trim() !== '')
    .map((value) => value.slice(0, -1)
        .split(',')).sort();
console.log('This is the list of our students \n');
const fields = {}
for (const i in students) {
    if ( students[i][0] !== 'firstname' ) {
        if (!fields[students[i][3]]) fields[students[i][3]] = [];
        fields[students[i][3]].push(students[i][0]);
    }
}
if (major === 'SWE') {
    console.log(`List: ${fields[' SWE'].join(', ')}`);
} else {
    console.log(`List: ${fields[' CS'].join(', ')}`);
}





