// Game values

let min = 1,
    max = 10,
    winningNum = getRandomNumber(1, 10);
    guessesLeft = 3;


// UI elements
const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener
game.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again'){
        window.location.reload();
    }
});

// Listen for guess
guessBtn.addEventListener('click', function () {
    let guess = parseInt(guessInput.value);

    //Validate

    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
        return;
    }

    if (guess === winningNum) {
        gameOver(true, `${winningNum} is correct, you win`, 'green');

    } else {
        //Wrong number
        guessesLeft -= 1;
        guessInput.style.borderColor = 'red';

        if (guessesLeft === 0) {
            gameOver(false, `Game over. Correct number was ${winningNum}.`, 'red');
            
        } else {

            guessInput.value = '';

            setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
        }
    }
});

function gameOver(won, msg) {
    let color;
    won === true ? color = 'green' : color = 'red';

    guessInput.disabled = true;
    guessInput.style.borderColor = color;

    message.style.color = color;

    setMessage(msg);
    
    guessBtn.value = 'Play again';
    guessBtn.className += 'play-again';

}

function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}

function getRandomNumber(min, max){
    return Math.floor((Math.random()*(max-min+1) + min));
};


