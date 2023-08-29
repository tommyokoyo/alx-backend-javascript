export default class HolbertonCourse {
  constructor(name = '', length = 0, students = ['']) {
    if (typeof name !== 'string') {throw TypeError('Name must be a string')}
    else if (typeof length !== 'number') {throw TypeError('Length must be an number')}
    else if (students.constructor !== Array && students.every((val) => typeof val === 'string')) {
      throw TypeError('students must be an array of strings');
    } else {
    this._name = name;
    this._length = length;
    this._students = students;
    }
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

  set name(newName) {
    if (typeof newName !== 'string') throw TypeError('Name must be a string');
    this._name = newName;
  }

  set length(newLength) {
    if (typeof newLength !== 'number') throw TypeError('Length must be a number');
    this._name = newLength;
  }

  set students(newStudents) {
    if (newStudents.constructor !== Array && newStudents.every((val) => typeof val === 'string')) {
      throw TypeError('students must be an array of strings');
    }
    this._students = newStudents;
  }
}
