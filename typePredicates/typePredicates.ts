/**
 * Defines a structure of a Cat object
 * @interface
 */
interface Cat {
    name: string;
    age: number;
    type: string;
    meow: boolean;
}

/**
 * Defines a structure of a Dog object
 * @interface
 */
interface Dog {
    name: string;
    age: number;
    type: string;
    bark: boolean;
}


type Animal = Cat | Dog;


//Type predicate function for cats 
function isCat(animal: Animal): animal is Cat {
    return animal.type === 'cat';
}

//Type predicate function for dogs
function isDog(animal: Animal): animal is Dog {
    return animal.type === 'dog';
}

//Define an array of animals

const animals: Animal[] = [
    { name: "Whiskers", age: 3, type: "cat", meow: true },
    { name: "Fido", age: 2, type: "dog", bark: true },
    { name: "Fluffy", age: 4, type: "cat", meow: true },
    { name: "Rex", age: 5, type: "dog", bark: true },
    { name: "Ares", age:1, type: "dog", bark: true },
    { name: "Fero", age: 7, type: "cat", meow: true }
]

//Use the isCat and isDog type prediate functions to filter the animals
const cats: Cat[] = animals.filter(isCat)
const dogs: Dog[] = animals.filter(isDog)

// Log the resulting arrays to the console
console.log("Cats:");
console.log(cats);

console.log("Dogs:");
console.log(dogs);