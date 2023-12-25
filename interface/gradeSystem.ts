/**
 * Defines the structure of a student object
 * @interface Interface
 */

interface Student {
    name: string;
    studentId: number;
    testScores: number[];
}


/**
 * Represents a StudentRecord class with name, id and testScores
 * @class
 */

class StudentRecord implements Student {
    name: string;
    studentId: number;
    testScores: number[];


    /**
     * initializes a new StudentRecord instance
     * @param {string} name - Name of the student
     * @param {number} studentId - ID of the student
     * @param {array} testScores - Test scores
     */

    constructor(name: string, studentId: number, testScores: number[]){
        this.name = name;
        this.studentId = studentId;
        this.testScores = testScores;
    }
 

    /**
     * Add a score to an array
     * @param {number} score
     */
    addTestScore(score:number){
        return this.testScores.push(score)
    }


    /**
     * Calculates the average score for the student.
     * @returns {number} The average score
     */
    getAverageTestScore(){
        const sum = this.testScores.reduce((acc, nmb) => acc += nmb);
        const average = sum / this.testScores.length;
        return parseFloat(average.toFixed(2))

    }
}


const John = new StudentRecord("John Doe", 1, [])
John.addTestScore(89);
John.addTestScore(91);
John.addTestScore(73);

const Lena = new StudentRecord("Lena Doest", 2, [])
Lena.addTestScore(76);
Lena.addTestScore(81);
Lena.addTestScore(83);

const Xendar = new StudentRecord("Xendar Lomidrevo", 3, [])
Xendar.addTestScore(51);
Xendar.addTestScore(63);
Xendar.addTestScore(62);

let StudentsRecords = [John, Lena, Xendar]

StudentsRecords.forEach( student => {
        console.log(`Student's name: ${student.name}`)
        console.log(`Student's ID: ${student.studentId}`)
        console.log(`Student's Average score: ${student.getAverageTestScore()}`)
})
