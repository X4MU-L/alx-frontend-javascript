export default function updateStudentGradeByCity(students, city, grades) {
  const gradesObj = {};
  grades.forEach((grade) => {
    gradesObj[grade.studentId] = grade.grade;
  });

  return (
    students
      .filter((student) => student.location === city)
      // eslint-disable-next-line arrow-body-style
      .map((student) => {
        return gradesObj[student.id] !== undefined
          ? { ...student, grade: gradesObj[student.id] }
          : { ...student, grade: 'N/A' };
      })
  );
}
