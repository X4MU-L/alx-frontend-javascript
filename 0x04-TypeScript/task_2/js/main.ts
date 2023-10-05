export interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

export interface TeacherInterface {
  workTeacherTasks(): string;
  workFromHome(): string;
  getCoffeeBreak(): string;
}

export class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }
  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }
  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

export class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }
  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }
  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

export type T = <Type extends number | string>(a: Type) => Teacher | Director;

export const createEmployee: T = (arg) => {
  if (typeof arg === 'number') {
    if (arg < 500) {
      return new Teacher();
    }
    return new Director();
  }
  return new Director();
};

console.log(createEmployee(200));

console.log(createEmployee(1000));

console.log(createEmployee('$500'));

export const isDirector = (employee: any): employee is Director => {
  return employee instanceof Director;
};

export const executeWork = (employee: Director | Teacher): string => {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  }
  return employee.workTeacherTasks();
};

console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));

type Subjects = 'Math' | 'History';

export const teachClass = (subject: Subjects): string => {
  if (subject === 'Math') {
    return 'Teaching Math';
  }
  return 'Teaching History';
};

console.log(teachClass('Math'));

console.log(teachClass('History'));
