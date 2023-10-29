/**
 * class representing Calculator
 * @class
 * @method add - Add two numbers
 * @method divide - Divide two numbers
 */
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    /**
     * Add two numbers
     * @param {number} x - The first number
     * @param {number} y - The second number
     * @returns {number} - The result of addition
     */
    Calculator.prototype.add = function (x, y) {
        // Implement the addition logic 
        return x + y;
    };
    /**
     * Divide two numbers
     * @param {number} x - The first number
     * @param {number} y - The second number
     * @returns {number} - The result of division
     */
    Calculator.prototype.divide = function (x, y) {
        //Implement the division logic
        return x / y;
    };
    /**
     * Subtract two numbers
     * @param {number} x - The first number
     * @param {number} y - The second number
     * @returns {number} - The result of subtraction
     */
    Calculator.prototype.subtract = function (x, y) {
        //Implement the subtraction logic
        return x - y;
    };
    return Calculator;
}());
/**
 * Calculator instance for performing calculations.
 * @type {Calculator}
 */
var calculator = new Calculator();
/**
 * Represents the first number input field.
 * @type {HTMLInputElement}
 */
var firstNmb = document.querySelector('#firstNumber');
/**
 * Represents the second number input field.
 * @type {HTMLInputElement}
 */
var secondNmb = document.querySelector('#secondNumber');
/**
 * Represents the operation selection dropdown.
 * @type {HTMLSelectElement}
 */
var operation = document.querySelector('#operation');
/**
 * Represents the result display element.
 * @type {HTMLParagraphElement}
 */
var resultElement = document.querySelector('#result');
// Implement the user interface to input numbers and the operation
// Use the calculator to perform the operation and handle exceptions
/**
 * Calculate the result based on user input.
 */
function calculate() {
    var firstNumber = parseFloat(firstNmb.value);
    var secondNumber = parseFloat(secondNmb.value);
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        resultElement.textContent = 'Error: Please enter valid numbers.';
    }
    else {
        try {
            //Addition  logic
            if (operation.value === 'add') {
                var result = calculator.add(firstNumber, secondNumber);
                resultElement.textContent = "Result: ".concat(result);
                //Division logic
            }
            else if (operation.value === 'divide') {
                if (secondNumber === 0) {
                    throw new Error("Cannot divide by zero.");
                }
                var result = calculator.divide(firstNumber, secondNumber);
                resultElement.textContent = "Result: ".concat(result);
                //Subtraction logic
            }
            else if (operation.value === 'subtract') {
                var result = calculator.subtract(firstNumber, secondNumber);
                resultElement.textContent = "Result: ".concat(result);
            }
        }
        catch (error) {
            resultElement.textContent = "Error: ".concat(error.message);
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
