

let words = [ 'apple', 'banana', 'strawberry', 'pineapple', 'grape', 'orange', 'currant', 'blueberry', 'kiwi' ];
let currentWord = null;
let guesses = [];
let missCount = 0;
const MAX_MISSES = 7;


function start() {
    currentWord = words[Math.floor(Math.random() * words.length)];
    listenForGuesses();
    displayGame();
}

function displayGame() {
    let wordDisplay = '';
    currentWord.split('').forEach(function checkLetter(letter) {
        if (guesses.includes(letter)) {
            wordDisplay += letter;
        } else {
            wordDisplay += '_';
        }
        wordDisplay += ' ';
    });

    console.log(wordDisplay);
    console.log('Current guesses: ' + guesses);
    console.log('You have made ' + missCount + ' bad guesses');

    if (missCount > 5) {
        console.log('You lose!');
        process.exit();

    } else if (wordDisplay.includes('_')) {
        console.log('What is your next guess?');

    } else {
        console.log('You win!!');
        process.exit();
    }
}

function guessLetter(letter) {
    if (guesses.includes(letter)) {
        console.log('You have already guessed ' + letter);
    } else {
        console.log('You guessed the letter ' + letter);
        guesses.push(letter);

        if (!currentWord.includes(letter)) {
            missCount++;
        }

        displayGame();
    }
}


function listenForGuesses() {
    process.stdin.on('data', function handleGuess(input) {
        let letter = input.toString().trim().toLowerCase();
        if (letter.length !== 1 || !/^[a-z]$/.test(letter)) {
            console.log('Sorry, but you can only guess single letters (a-z)!');
        } else {
            guessLetter(letter);
        }
    });
}

start();
