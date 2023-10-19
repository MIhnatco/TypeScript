

const randomNumber: number = Math.floor(Math.random() * 100);
let guesses: number = 0;

while (true){
    let playerGuess: number = Number(prompt("Guess a number"))
    guesses += 1;

    if(playerGuess < randomNumber){
        alert("Your guess is less than the random number")
    } else if (playerGuess > randomNumber){
        alert("Your guess is bigger than random number")
    } else {
        console.log("Congratulations..you are right");
        console.log("The random number is: " + randomNumber);
        console.log(`It took you ${guesses} guesses.`)
        break;
    }
}