type Name = string;
type Score = number;

const testScores: Map<Name, Score> = new Map();


testScores.set("Alice", 96);
testScores.set("Bob", 88);
testScores.set("Carol", 92);

testScores.forEach((key, value) => {
    console.log(`Key: ${key}, Value: ${value}`)
})


type rating = number;
type definition = string;

const ratingPosition: Map<rating, definition>  = new Map();

ratingPosition.set(1, "Excellent")
ratingPosition.set(2, "Perfect")
ratingPosition.set(3, "Good")
ratingPosition.set(4, "Not Bad")
ratingPosition.set(5, "Bad")

ratingPosition.forEach((value, key) => {
    console.log(`Key: ${key}, Value: ${value}`);
});