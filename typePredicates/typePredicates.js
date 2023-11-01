//Type predicate function for cats 
function isCat(animal) {
    return animal.type === 'cat';
}
//Type predicate function for dogs
function isDog(animal) {
    return animal.type === 'dog';
}
//Define an array of animals
var animals = [
    { name: "Whiskers", age: 3, type: "cat", meow: true },
    { name: "Fido", age: 2, type: "dog", bark: true },
    { name: "Fluffy", age: 4, type: "cat", meow: true },
    { name: "Rex", age: 5, type: "dog", bark: true },
    { name: "Ares", age: 1, type: "dog", bark: true },
    { name: "Fero", age: 7, type: "cat", meow: true }
];
//Use the isCat and isDog type prediate functions to filter the animals
var cats = animals.filter(isCat);
var dogs = animals.filter(isDog);
// Log the resulting arrays to the console
console.log("Cats:");
console.log(cats);
console.log("Dogs:");
console.log(dogs);
