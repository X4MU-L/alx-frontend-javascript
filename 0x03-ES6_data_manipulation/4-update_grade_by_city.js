import getStudentsByLocation from './2-get_students_by_loc';

export default function updateStudentGradeByCity(students, city, grades) {
  const gradesObj = {};
  grades.forEach((grade) => {
    gradesObj[grade.studentId] = grade.grade;
  });
  // eslint-disable-next-line arrow-body-style
  return getStudentsByLocation(students, city).map((student) => {
    return gradesObj[student.id] !== undefined
      ? { ...student, grade: gradesObj[student.id] }
      : { ...student, grade: 'N/A' };
  });
}
