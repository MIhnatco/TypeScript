/**
 * Represents a person info collections
 * @class
 */
var Person = /** @class */ (function () {
    /**
     * Creates a new Person instance
     * @param {string} name - name of the person
     * @param {number} age - age of the person
     * @param {string} email - email of the person
     * @param {boolean} isStudent
     */
    function Person(info) {
        this.info = info;
    }
    Person.prototype.haveBirthday = function () {
        this.info.age++;
    };
    Person.prototype.showInfo = function () {
        console.log(this.info);
    };
    return Person;
}());
//a new instance
var JohnInfo = {
    name: "John",
    age: 34,
    email: "john@example.com",
    isStudent: true,
};
var John = new Person(JohnInfo);
//access the instance for age
console.log(John.info.age);
John.haveBirthday();
John.haveBirthday();
console.log(John.info.age);
