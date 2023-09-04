const fs = require('fs');
function countStudents(path) {
    const fieldCounts = {};
    const fields_in_obj = {};

    try {
        const data = fs.readFileSync(path, 'utf-8');
        const extracted_lines = data.split('\n').filter((line) => line.trim() !== '');
        const persons = extracted_lines.filter((person) => person).map((item) => item.split(','));

        persons.forEach((line) => {
            const field_0 = line[0];
            const field_3 = line[3];

            if (field_3 !== 'field') {
                if (!fieldCounts[field_3]) {
                    fieldCounts[field_3] = 0;
                    fields_in_obj[field_3] = [];
                }
                fields_in_obj[field_3].push(field_0);
                fieldCounts[field_3] += 1;
            }
        });

        const totalStudents = extracted_lines.length;

        console.log(`Number of students: ${totalStudents - 1}`);
        for (const key in fieldCounts) {
            console.log(`Number of students in ${key}: ${fieldCounts[key]}. List: ${fields_in_obj[key]}`)
        }

    } catch (error) {
        if (error.code === 'ENOENT') {
            console.error('Cannot load the database: File not found');
        } else {
            console.error('An error occurred while reading the database: ', error.message);
        }
    }
}

module.exports = countStudents;
