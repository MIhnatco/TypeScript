//Assignment 1:

/**
 * Calculates reactangle area
 * @param {any} length - The length of a rectangle
 * @param {any} width - The width of a rectangle
 */

function calculateRectangleArea(length: any, width: any): number{
    //type assertion to specify the types as numbers
    const nmbLength = length as number;
    const nmbWidth = width as number;

    //Check if the inputs are indeed numbers
    if (typeof nmbLength === 'number' && typeof nmbWidth === "number") {
        //calculate the area
        const area = nmbLength * nmbWidth;
        return area;
    } else {
        //handle cases where the inputs are not valid numbers
        throw new Error('Invalid input: Both length and width must be numbers.')
    }
}


//Testing the function
const rLength = 5;
const rWidth = 8;

try {
    const area = calculateRectangleArea(rLength, rWidth);
    console.log(`The are of the rectangle is: ${area}`);
} catch(error) {
    console.error(error.message)
}

/*

In this solution, we use type assertion (as) to specify that length and width are of type number. 
We also check if the inputs are indeed numbers and handle cases where they are not valid numbers by throwing an error. 
When you run this code with the provided test values (length = 5 and width = 8), 
it should correctly calculate and display the area of the rectangle.
*/


//Assignment 2:

/**
 * Validates the data inserted
 * @param {object}
 */

function validateFormData(data): string {

     //type assertion to specify the types as numbers
     const name = data.name as string;
     const age = data.age as number;
     const email = data.email as string;
     const isSubscribed = data.isSubscribed as boolean;

        //Check data types directly against the expected types
        for (const field in data) {
            switch (field) {
                case 'name':
                    if (typeof name !== 'string') {
                        throw new Error(`Invalid input: ${field} has an incorrect type.`);
                    }
                    break;
                case 'age':
                    if (typeof age !== 'number') {
                        throw new Error(`Invalid input: ${field} has an incorrect type.`);
                    }
                    break;
                case 'email':
                    if (typeof email !== 'string') {
                        throw new Error(`Invalid input: ${field} has an incorrect type.`);
                    }
                    break;
                case 'isSubscribed':
                    if (typeof isSubscribed !== 'boolean') {
                        throw new Error(`Invalid input: ${field} has an incorrect type.`);
                    }
                    break;
                default:
                    throw new Error(`Invalid input: ${field} is not a valid field.`);
            }
        }
        return "Types are correct";

}


const formDataCorrect = {
    name: 'Alice',
    age: 30,
    email: 'alice@example.com',
    isSubscribed: true,
  };
  
  const formDataIncorrect = {
    name: 'Bob',
    age: "25", // Incorrect type (should be a number)
    email: 'bob@example.com',
    isSubscribed: false
  };
  
  try {
    console.log('Correct form data as input: ', validateFormData(formDataCorrect));
  
  } catch (error) {
    console.error(error.message);
  }
  
  try {
    console.log('Incorrect form data as input: ', validateFormData(formDataIncorrect));
  
  } catch (error) {
    console.error(error.message);
  }