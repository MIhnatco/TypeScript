// Define a type alias for the person's information
type PersonInfo = {
  name: string;
  age: number;
  email: string;
  isStudent: boolean;
};

/**
 * Represents a person info collections
 * @class
 */

class Person {
  //use the type alias to define properties
  info: PersonInfo;

  /**
   * Creates a new Person instance
   * @param {string} name - name of the person
   * @param {number} age - age of the person
   * @param {string} email - email of the person
   * @param {boolean} isStudent
   */
  constructor(info: PersonInfo) {
    this.info = info;
  }

  haveBirthday() {
    this.info.age++;
  }

  showInfo() {
    console.log(this.info);
  }
}

//a new instance
const JohnInfo: PersonInfo = {
  name: "John",
  age: 34,
  email: "john@example.com",
  isStudent: true,
};

const John = new Person(JohnInfo);

//access the instance for age
console.log(John.info.age);
John.haveBirthday();
John.haveBirthday();
console.log(John.info.age);
