/* eslint-disable no-underscore-dangle */
export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    }
    this._name = name;
  }

  set length(length) {
    if (typeof length !== 'number') {
      throw TypeError('Length must be a string');
    }
    this._length = length;
  }

  set students(students) {
    if (students instanceof Array) {
      for (const item of students) {
        if (typeof item !== 'string') {
          throw TypeError('Students must be an array of strings');
        }
      }
      this._students = students;
    } else {
      throw TypeError('Students must be an array');
    }
  }
}
