/**
 * Defines a structure of a User object
 * @interface
 */
//type predicate function for a user
function isUser(person) {
    return person.type === "user";
}
//type predicate function for a employee
function isEmployee(person) {
    return person.type === "employee";
}
var people = [
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
var users = people.filter(isUser);
console.log("Users");
console.log(users);
var employees = people.filter(isEmployee);
console.log("Employees");
console.log(employees);
