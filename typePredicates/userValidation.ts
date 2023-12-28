/**
 * Defines a structure of a User object
 * @interface
 */

interface User {
  username: string;
  password: number;
  userID: number;
  type: string;
}

/**
 * Defines a structure of a Employee object
 * @interface
 */
interface Employee {
  username: string;
  password: string;
  employeeId: string;
  position: string;
  type: string;
}

type Person = User | Employee;

//type predicate function for a user
function isUser(person: Person): person is User {
  return person.type === "user";
}

//type predicate function for a employee
function isEmployee(person: Person): person is Employee {
  return person.type === "employee";
}

const people: Person[] = [
  { username: "John Doe", password: 321, userID: 125, type: "user" },
  {
    username: "Milton Friedman",
    password: "dss521ss",
    employeeId: "12sd21",
    position: "Manager",
    type: "employee",
  },
  { username: "Johny Deep", password: 145, userID: 126, type: "user" },
  { username: "London Smock", password: 475, userID: 127, type: "user" },
  {
    username: "Jereme Fries",
    password: "dsa266",
    employeeId: "12dd81",
    position: "Manager",
    type: "employee",
  },
  {
    username: "Old Herold",
    password: "dsadf4654",
    employeeId: "12wd51",
    position: "Digger",
    type: "employee",
  },
  {
    username: "Hurem Rorel",
    password: "212asdf",
    employeeId: "12wf31",
    position: "Packer",
    type: "employee",
  },
];

const users: User[] = people.filter(isUser);
console.log("Users");
console.log(users);

const employees: Employee[] = people.filter(isEmployee);
console.log("Employees")
console.log(employees);
