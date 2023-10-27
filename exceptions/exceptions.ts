
/**
 * class representing Calculator
 * @class 
 */

class Calculator {
    /**
     * Add two numbers
     * @param {number} x - The first number
     * @param {number} y - The second number
     * @returns {number} - The result of addition
     */
    add(x: number, y: number): number {
        // Implement the addition logic 
        return x + y;
    }


    /**
     * Divide two numbers
     * @param {number} x - The first number 
     * @param {number} y - The second number
     * @returns {number} - The result of division
     */
    divide(x: number, y: number): number {
        //Implement the division logic
        return x / y;
    }
}


/**
 * Calculator instance for performing calculations.
 * @type {Calculator}
 */
const calculator = new Calculator();

/**
 * Represents the first number input field.
 * @type {HTMLInputElement}
 */
const firstNmb = document.querySelector('#firstNumber') as HTMLInputElement;

/**
 * Represents the second number input field.
 * @type {HTMLInputElement}
 */
const secondNmb = document.querySelector('#secondNumber') as HTMLInputElement;

/**
 * Represents the operation selection dropdown.
 * @type {HTMLSelectElement}
 */
const operation = document.querySelector('#operation') as HTMLSelectElement;

/**
 * Represents the result display element.
 * @type {HTMLParagraphElement}
 */
const resultElement = document.querySelector('#result')


// Implement the user interface to input numbers and the operation
// Use the calculator to perform the operation and handle exceptions

/**
 * Calculate the result based on user input.
 */
function calculate(){
    const firstNumber = parseFloat(firstNmb.value);
    const secondNumber = parseFloat(secondNmb.value);

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        resultElement.textContent = 'Error: Please enter valid numbers.';
    } else {
        try {
            if (operation.value === 'add'){
                const result = calculator.add(firstNumber, secondNumber);
                resultElement.textContent = `Result: ${result}`;

                } else if (operation.value === 'divide'){
                    if(secondNumber === 0){
                            throw new Error("Cannot divide by zero.")
                    }

                    const result = calculator.divide(firstNumber, secondNumber);
                    resultElement.textContent = `Result: ${result}`;
                }
            } catch(error){
                resultElement.textContent = `Error: ${error.message}`;
            }

    }
}

/**
 * Reset the input fields and result display.
 */
function reset() {
    firstNmb.value = '';
    secondNmb.value = '';
    resultElement.textContent = '';
}