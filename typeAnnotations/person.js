/**
 * Represents a person
 * @class
 */
var Person = /** @class */ (function () {
    /**
     * Creates a new Person instance
     * @constructor
     * @param {string} name - The name of the person
     * @param {number} age - The age of the person
     * @param {string} email - The email of the person
     * @param {boolean} isStudent -
     */
    function Person(name, age, email, isStudent) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.isStudent = isStudent;
    }
    /**
     * Increase the age of the person everytime you call the function
     * @method
     */
    Person.prototype.haveBirthday = function () {
        this.age++;
    };
    return Person;
}());
var John = new Person("John", 34, "john@example.com", false);
//John's age
console.log(John.age);
John.haveBirthday();
John.haveBirthday();
John.haveBirthday();
console.log(John.age);
