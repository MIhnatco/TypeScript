/**
 * Represents the details of a student
 * @interface
 */

interface Details {
  name: string;
  age: number;
  score: number;
}

/**
 * Manages student information using a Map 
 * @class
 */

class StudentInfo {
  /**
   * Map to store student details with their corresponding IDs.
   * @type {Map<number, Details>}
   */
  account: Map<number, Details>;

  /**
   * Creates an instance of StudentInfo
   * Initializes the account as an empty Map
   */
  constructor() {
    this.account = new Map();
  }

  /**
   * Adds a new student to the accoung
   * @param {number} studentID  - The unique identifier for the student
   * @param {Details} studentDetails  - The details of the student to be added
   * @returns {void}
   */
  addStudent(studentID: number, studentDetails: Details): void {
    this.account.set(studentID, studentDetails);
  }

  /**
   * Retrieves details of a student based on the provided student ID
   * @param {number} studentID  - The unique identifier for the student 
   * @returns {Details | undefined} - The details fo the student or undefined
   */
  getStudentDetails(studentID: number): Details | undefined {
    return this.account.get(studentID);
  }

  /**
   * Updated Student information
   * @param {number} studentID  - The unique indentifier for the student
   * @param {Details | undefined }updatedDetails - The details for the student or undefined to be updated
   * @returns {Details | undefined}
   */
  updateStudentDetails(
    studentID: number,
    updatedDetails: Partial<Details>
  ): void {
    const existingDetails = this.account.get(studentID);
    if (existingDetails) {
      const updatedStudentDetails = { ...existingDetails, ...updatedDetails };
      this.account.set(studentID, updatedStudentDetails);
    }
  }


  /**
   * Delete Student from roster
   * @param {number} studentID - The unique indentifier for the student
   */
  deleteStudent(studentID: number): void {
    this.account.delete(studentID)
  }
}

let PeterDetail: Details = {
  name: "Peter Doe",
  age: 21,
  score: 99,
};

let AliceDetail: Details = {
  name: "Alice Peterson",
  age: 20,
  score: 87,
};

let JohnDetails: Details = {
  name: "John Doset",
  age: 19,
  score: 78,
};

const roster = new StudentInfo();

roster.addStudent(1, PeterDetail);
roster.addStudent(2, AliceDetail);
roster.addStudent(3, JohnDetails);

console.log(roster.getStudentDetails(2));

roster.updateStudentDetails(2, { score: 82 });
roster.updateStudentDetails(2, { age: 23 });
console.log(roster.getStudentDetails(2));
