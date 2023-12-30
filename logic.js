const maxTries = 5;
let tries = 0;
const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);

function checkGuess() {
    const guess = parseInt(document.getElementById('guessInput').value);
    const message = document.getElementById('message');
    const triesLeft = document.getElementById('triesLeft');

    tries++;

    if (guess === randomNumber) {
        message.textContent = 'Chikooor!';
    } else if (guess < randomNumber) {
        message.textContent = 'Kbir!';
    } else {
        message.textContent = 'Sghir!';
    }

    const remainingTries = maxTries - tries;
    triesLeft.textContent = `Tries left: ${remainingTries}`;

    if (tries >= maxTries) {
        message.textContent = `Frcha, Hada howa num : ${randomNumber}.`;
        document.getElementById('guessInput').disabled = true;
    }
}