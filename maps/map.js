var testScores = new Map();
testScores.set("Alice", 96);
testScores.set("Bob", 88);
testScores.set("Carol", 92);
testScores.forEach(function (key, value) {
    console.log("Key: ".concat(key, ", Value: ").concat(value));
});
var ratingPosition = new Map();
ratingPosition.set(1, "Excellent");
ratingPosition.set(2, "Perfect");
ratingPosition.set(3, "Good");
ratingPosition.set(4, "Not Bad");
ratingPosition.set(5, "Bad");
ratingPosition.forEach(function (value, key) {
    console.log("Key: ".concat(key, ", Value: ").concat(value));
});
