export default function getListStudentsByLocation(students) {
  return students.reduce((prev, current) => prev + current.id, 0);
}
