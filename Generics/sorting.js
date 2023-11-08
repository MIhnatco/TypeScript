/**
 * Sorts an array using a custom sorting function
 * @param {T[]} arr - The array to be sorted.
 * @param {(a: T, b: T) => number} compareFN - A custom sorting function
 * @returns {T[]} - The sorted array.
 */
function genericSort(arr, compareFN) {
    return arr.slice().sort(compareFN);
}
// Sort an array of numbers in ascending order
var numbers = [5, 2, 8, 1, 4];
var sortedNumbers = genericSort(numbers, function (a, b) { return a - b; });
console.log(sortedNumbers); // Output: [1, 2, 4, 5, 8]
// Sort an array of strings alphabetically
var strings = ["apple", "banana", "tomato", "date", "grape"];
var sortedStrings = genericSort(strings, function (a, b) { return a.localeCompare(b); });
console.log(sortedStrings); // Output: ["apple", "banana", "date", "grape", 'tomato']
// Sort an array of objects by a specific property (e.g., age)
var persons = [
    { name: "Alice", age: 28 },
    { name: "Bob", age: 22 },
    { name: "Eve", age: 32 },
];
var sortedPersons = genericSort(persons, function (a, b) { return a.age - b.age; });
console.log(sortedPersons); // Output: [{ name: "Bob", age: 22 }, { name: "Alice", age: 28 }, { name: "Eve", age: 32 }]
