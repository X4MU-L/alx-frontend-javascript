interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const studentsList: Student[] = [
  {
    firstName: 'Micheal',
    lastName: 'Charles',
    age: 30,
    location: 'Abuja, Nigeria',
  },
  {
    firstName: 'Angela',
    lastName: 'Charles',
    age: 28,
    location: 'Abuja, Nigeria',
  },
];

const table = document.createElement('table');
const tableHead = document.createElement('thead');
const tableBody = document.createElement('tbody');

tableHead.appendChild(document.createElement('tr'));
tableHead.querySelector('tr').append(
  ...['firstName', 'location'].map((text) => {
    const th = document.createElement('th');
    th.textContent = text;
    return th;
  })
);

tableBody.append(
  ...studentsList.map((student) => {
    const tr = document.createElement('tr');
    tr.append(
      ...['firstName', 'location'].map((text: 'firstName' | 'location') => {
        const td = document.createElement('td');
        td.textContent = student[text];
        return td;
      })
    );
    return tr;
  })
);

table.append(tableHead, tableBody);
document.body.append(table);
