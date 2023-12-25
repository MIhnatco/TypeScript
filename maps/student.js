var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var StudentInfo = /** @class */ (function () {
    function StudentInfo() {
        this.account = new Map();
    }
    //add a new student
    StudentInfo.prototype.addStudent = function (studentID, studentDetails) {
        this.account.set(studentID, studentDetails);
    };
    //Retrieve Student Information
    StudentInfo.prototype.getStudentDetails = function (studentID) {
        return this.account.get(studentID);
    };
    //Update Student information
    StudentInfo.prototype.updateStudentDetails = function (studentID, updatedDetails) {
        var existingDetails = this.account.get(studentID);
        if (existingDetails) {
            var updatedStudentDetails = __assign(__assign({}, existingDetails), updatedDetails);
            this.account.set(studentID, updatedStudentDetails);
        }
    };
    return StudentInfo;
}());
var PeterDetail = {
    name: "Peter Doe",
    age: 21,
    score: 99,
};
var AliceDetail = {
    name: "Alice Peterson",
    age: 20,
    score: 87,
};
var JohnDetails = {
    name: "John Doset",
    age: 19,
    score: 78,
};
var roster = new StudentInfo();
roster.addStudent(1, PeterDetail);
roster.addStudent(2, AliceDetail);
roster.addStudent(3, JohnDetails);
console.log(roster.getStudentDetails(2));
roster.updateStudentDetails(2, { score: 82 });
roster.updateStudentDetails(2, { age: 23 });
console.log(roster.getStudentDetails(2));
