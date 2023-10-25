/**
 * Defines the structure of a student object
 * @type Interface
 */
/**
 * Represents a StudentRecord class with name, id and testScores
 * @class
 */
var StudentRecord = /** @class */ (function () {
    /**
     * initializes a new StudentRecord instance
     */
    function StudentRecord(name, studentId, testScores) {
        this.name = name;
        this.studentId = studentId;
        this.testScores = testScores;
    }
    /**
     * Add a score to an array
     * @param score
     */
    StudentRecord.prototype.addTestScore = function (score) {
        return this.testScores.push(score);
    };
    /**
     * Calculates the average score for the student.
     * @returns {number} The average score
     */
    StudentRecord.prototype.getAverageTestScore = function () {
        return Math.round(this.testScores.reduce(function (nmb, acc) { return acc += nmb; }) / this.testScores.length);
    };
    return StudentRecord;
}());
var John = new StudentRecord("John Doe", 1, []);
John.addTestScore(89);
John.addTestScore(91);
John.addTestScore(73);
var Lena = new StudentRecord("Lena Doest", 2, []);
Lena.addTestScore(76);
Lena.addTestScore(81);
Lena.addTestScore(83);
var Xendar = new StudentRecord("Xendar Lomidrevo", 3, []);
Xendar.addTestScore(51);
Xendar.addTestScore(63);
Xendar.addTestScore(62);
var StudentsRecords = [John, Lena, Xendar];
StudentsRecords.forEach(function (student) {
    console.log("Student's name: ".concat(student.name));
    console.log("Student's ID: ".concat(student.studentId));
    console.log("Student's Average score: ".concat(student.getAverageTestScore()));
});
