/**
 * Interface to represent Student 
 * @interface
 */
interface Student {
    id: number;
    name: string;
    grades: Map<string, number>;
}


/**
 * StudentRecord represents a student with an id and a name
 * @class
 */

class StudentRecord implements Student {
     /**
     * The id of a student
     * @type {number}
     * 
     * The name of a student
     * @type {string}
     * 
     * The unique records for a student
     * @type {Map}
     */
    id: number;
    name: string;
    grades: Map<string, number>;
    

    /**
     * creates a new StudentRecord instance
     * @param {number} newId - The ID of a student
     * @param {string} newName - The name of a student
     */
    constructor(newId: number, newName: string){
        this.id= newId;
        this.name = newName;
        this.grades = new Map();
    }

    /**
     * Adds a subject and its corresponding grade to the student's record. If the subject already exists, update the grade.
     * @param subject 
     * @param grade 
     */
    addGrade(subject: string, grade: number) {
       
            this.grades.set(subject,grade);
     
    }

    /**
     * Calculates the average grade for the student.
     * @returns {number} The average grade for the student. If no grades are available, returns 0.
     */

    getAverageGrade() {

        const gradeValues = Array.from(this.grades.values());
        if(gradeValues.length === 0){
            return 0;
        }

        const sum = gradeValues.reduce((acc, nmb) => acc += nmb, 0);
        return sum / gradeValues.length;
  
        

    }
    
      /**
        * Prints Student's info
        */
    printStudentInfo(){
        console.log(`Name: ${this.name} - ID: ${this.id}`)
        console.log("Grades:");
        this.grades.forEach((subject, grade) => {
            console.log(`${subject}: ${grade}`)
        })
    }
}

// Student 1
const student1 = new StudentRecord(1, "Alice");
student1.addGrade("Math", 95);
student1.addGrade("Science", 88);
student1.addGrade("English", 81);

// Student 2
const student2 = new StudentRecord(2, "Bob");
student2.addGrade("Math", 90);
student2.addGrade("Science", 92);
student2.addGrade("English", 89);
// ...

// Student 3
const student3 = new StudentRecord(3, "John");
student3.addGrade("Math", 90);
student3.addGrade("Science", 92);
student3.addGrade("English", 73);
// ...

// Display student information
student1.printStudentInfo();
console.log("Average grade:", student1.getAverageGrade());
console.log(student1);
console.log()
student2.printStudentInfo();
console.log("Average grade:", student2.getAverageGrade());
console.log()
student3.printStudentInfo();
console.log("Average grade:", student3.getAverageGrade());

