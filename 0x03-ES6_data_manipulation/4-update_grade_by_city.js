function updateStudentGradeByCity(students, location, newGrades) {
  const newGradedStudents = students.filter((student) => student.location === location)
    .map((student) => {
      const studentWithNewGrades = newGrades.find((gradeObj) => gradeObj.studentId === student.id);

      const newGradesToDisplay = studentWithNewGrades ? studentWithNewGrades.grade : 'N/A';

      return {
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        grade: newGradesToDisplay,
      };
    });
  return newGradedStudents;
}

export default updateStudentGradeByCity;
