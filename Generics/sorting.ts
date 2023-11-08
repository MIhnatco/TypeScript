
/**
 * Sorts an array using a custom sorting function
 * @param {T[]} arr - The array to be sorted. 
 * @param {(a: T, b: T) => number} compareFN - A custom sorting function
 * @returns {T[]} - The sorted array.
 */

function genericSort <T>(arr: T[], compareFN : (a: T, b: T) => number): T[]{
    return arr.slice().sort(compareFN)
}

// Sort an array of numbers in ascending order
const numbers = [5, 2, 8, 1, 4];
const sortedNumbers = genericSort(numbers, (a, b) => a - b);
console.log(sortedNumbers); // Output: [1, 2, 4, 5, 8]

// Sort an array of strings alphabetically
const strings = ["apple", "banana", "tomato", "date", "grape"];
const sortedStrings = genericSort(strings, (a, b) => a.localeCompare(b));
console.log(sortedStrings); // Output: ["apple", "banana", "date", "grape", 'tomato']

// Sort an array of objects by a specific property (e.g., age)
const persons = [
    { name: "Alice", age: 28 },
    { name: "Bob", age: 22 },
    { name: "Eve", age: 32 },
  ];
  const sortedPersons = genericSort(persons, (a, b) => a.age - b.age);
  console.log(sortedPersons); // Output: [{ name: "Bob", age: 22 }, { name: "Alice", age: 28 }, { name: "Eve", age: 32 }]