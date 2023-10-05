export type Teacher = {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [Key: string]: any;
};

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

export interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
  all: '',
};
console.log(director1);

export const printTeacher = (firstName: string, lastName: string): string => {
  return `${firstName[0]}. ${lastName}`;
};

console.log(printTeacher('John', 'Doe'));

interface StudentClassType {
  workOnHomework(): string;
  displayName(): string;
}
class StudentClass implements StudentClassType {
  firstName: string;
  lastName: string;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework() {
    return 'Currently working';
  }
  displayName() {
    return 'he;llo';
  }
}
