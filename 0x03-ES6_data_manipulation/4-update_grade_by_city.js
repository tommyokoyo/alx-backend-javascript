function updateStudentGradeByCity(students, location, newGrades) {
  const newfilteredStudents = students.filter((student) => student.location);
  const mappedStud = newfilteredStudents.map((student) => {
    const studentWithNewGrades = newGrades.find((gradeObj) => gradeObj.studentId === student.id);

    const newGradesToDisplay = studentWithNewGrades ? studentWithNewGrades.grade : 'N/A';

    return {
      id: student.id,
      firstName: student.firstName,
      location: student.location,
      grade: newGradesToDisplay,
    };
  });
  return mappedStud;
}

export default updateStudentGradeByCity;
