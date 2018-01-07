/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

// Get values
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

// UI Elements
const game = document.getElementById('game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.getElementById('guess-value'),
      guessInput = document.getElementById('guess-input'),
      message = document.querySelector('.message');

// Assign min and max
minNum.textContent = min;
maxNum.textContent = max;

// Listing for guess
guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value)

// Validate
if (isNaN(guess) || guess < 1 || guess > 10) {
  setMessage(`Please enter a number between ${min} and ${max}`, 'red')
} 

// Check if won

if (guess === winningNum) {
  // Disable input
  guessInput.disabled = true;
  // Change Border color
  guessInput.style.borderColor = 'green';
  // Set Message
  setMessage(`${winningNum} is correct, YOU WIN!`, 'green')
}

});

function setMessage(msg, color){
  message.style.color = color;
  message.textContent = msg
}