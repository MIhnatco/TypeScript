var randomNumber = Math.floor(Math.random() * 100);
var guesses = 0;
while (true) {
    var playerGuess = Number(prompt("Guess a number"));
    guesses += 1;
    if (playerGuess < randomNumber) {
        alert("Your guess is less than the random number");
    }
    else if (playerGuess > randomNumber) {
        alert("Your guess is bigger than random number");
    }
    else {
        console.log("Congratulations..you are right");
        console.log("The random number is: " + randomNumber);
        console.log("It took you ".concat(guesses, " guesses."));
        break;
    }
}
