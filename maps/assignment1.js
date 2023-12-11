/**
 * StudentRecord represents a student with an id and a name
 * @class
 */
var StudentRecord = /** @class */ (function () {
    /**
     * creates a new StudentRecord instance
     * @param {number} newId - The ID of a student
     * @param {string} newName - The name of a student
     */
    function StudentRecord(newId, newName) {
        this.id = newId;
        this.name = newName;
        this.grades = new Map();
    }
    /**
     * Adds a subject and its corresponding grade to the student's record. If the subject already exists, update the grade.
     * @param subject
     * @param grade
     */
    StudentRecord.prototype.addGrade = function (subject, grade) {
        this.grades.set(subject, grade);
    };
    /**
     * Calculates the average grade for the student.
     * @returns {number} The average grade for the student. If no grades are available, returns 0.
     */
    StudentRecord.prototype.getAverageGrade = function () {
        var gradeValues = Array.from(this.grades.values());
        if (gradeValues.length === 0) {
            return 0;
        }
        var sum = gradeValues.reduce(function (acc, nmb) { return acc += nmb; }, 0);
        return sum / gradeValues.length;
    };
    /**
      * Prints Student's info
      */
    StudentRecord.prototype.printStudentInfo = function () {
        console.log("Name: ".concat(this.name, " - ID: ").concat(this.id));
        console.log("Grades:");
        this.grades.forEach(function (subject, grade) {
            console.log("".concat(subject, ": ").concat(grade));
        });
    };
    return StudentRecord;
}());
// Student 1
var student1 = new StudentRecord(1, "Alice");
student1.addGrade("Math", 95);
student1.addGrade("Science", 88);
student1.addGrade("English", 81);
// Student 2
var student2 = new StudentRecord(2, "Bob");
student2.addGrade("Math", 90);
student2.addGrade("Science", 92);
student2.addGrade("English", 89);
// ...
// Student 3
var student3 = new StudentRecord(3, "John");
student3.addGrade("Math", 90);
student3.addGrade("Science", 92);
student3.addGrade("English", 73);
// ...
// Display student information
student1.printStudentInfo();
console.log("Average grade:", student1.getAverageGrade());
console.log(student1);
console.log();
student2.printStudentInfo();
console.log("Average grade:", student2.getAverageGrade());
console.log();
student3.printStudentInfo();
console.log("Average grade:", student3.getAverageGrade());
