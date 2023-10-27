type Name = string;
type Score = number;

const testScores: Map<Name, Score> = new Map();


testScores.set("Alice", 96);
testScores.set("Bob", 88);
testScores.set("Carol", 92);



for(const[key, value] of testScores){
    console.log(key)
}