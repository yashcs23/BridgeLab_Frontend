const secretNumber = Math.floor(Math.random() * 50) + 1;
const userGuess = 23;

let result;
if (userGuess === secretNumber) {
  result = "Correct guess!";
} else if (userGuess >= secretNumber - 3 && userGuess <= secretNumber + 3) {
  result = "Very close!";
} else if (userGuess > secretNumber) {
  result = "Too high";
} else {
  result = "Too low";
}

console.log(`Secret Number: ${secretNumber}`);
console.log(`Your Guess: ${userGuess}`);
console.log(result);
