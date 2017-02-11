
// ----------------------------------------------------------------------- //
//    Starter file for Node Hangman via a Crash Course at The Iron Yard    //
// ----------------------------------------------------------------------- //

// Declare some variables here...



/**
 * This function will need to do whatever work is necessasry to start up a new game
 */
function startGame() {


}


/**
 * This function will do the work of guessing a letter in a game
 */
function guessLetter(letter) {

}


/**
 * This function waits for input from the user, then executes the `guessLetter()` function
 */
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

// This function call will start the game!
startGame();
