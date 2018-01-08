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
    winningNum = getRandomNum(min, max),
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

// Add PlayAgain Listener
game.addEventListener('mousedown', function (e) {
  if (e.target.className === 'play-again') {
    window.location.reload()
  }
})

// Listing for guess
guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value)

// Validate
if (isNaN(guess) || guess < 1 || guess > 10) {
  setMessage(`Please enter a number between ${min} and ${max}`, 'red')
} 

// Check if won

if (guess === winningNum) {
  // Game over - win
gameOver (true, `${winningNum} is correct, YOU WIN!`)
  
} else {
  //Wrong number
  guessesLeft -=1;
  
  if (guessesLeft === 0){
    // Game over - lost
    gameOver (false, `Game Over, you lost. The correct was number ${winningNum}`)
  } else {
    // Game continue - next answer
    // Change Border color
    guessInput.style.borderColor = 'red';
    // Set Message
    setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red')
    // Clear Input
    guessInput.value = ''
  }
}

});

function setMessage(msg, color){
  message.style.color = color;
  message.textContent = msg
}

function gameOver (won, msg){
  let color;
  won === true ? color = 'green' : color = 'red'
  // Disable input
  guessInput.disabled = true;
  // Change Border color
  guessInput.style.borderColor = color;
  // Change Text style
  message.style.color = color;
  message.style.fontWeight = 800;
  // Set Message
  setMessage(`${msg}`)

  // Play again
  guessBtn.value = 'Play again?'
  guessBtn.className += 'play-again'
}

function getRandomNum(min, max) {
  return (Math.floor(Math.random()*(max-min+1)+min))
}