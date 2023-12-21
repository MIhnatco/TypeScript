/**
 * Represents a person
 * @class
 */

class Person {
  //the properties
  name: string;
  age: number;
  email: string;
  isStudent: boolean;

  /**
   * Creates a new Person instance
   * @constructor
   * @param {string} name - The name of the person
   * @param {number} age - The age of the person
   * @param {string} email - The email of the person
   * @param {boolean} isStudent -
   */

  constructor(name: string, age: number, email: string, isStudent: boolean) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.isStudent = isStudent;
  }

  /**
   * Increase the age of the person everytime you call the function
   * @method
   */
  haveBirthday() {
    this.age++;
  }
}

let John = new Person("John", 34, "john@example.com", false);

//John's age
console.log(John.age);
John.haveBirthday();
John.haveBirthday();
John.haveBirthday();
console.log(John.age);
