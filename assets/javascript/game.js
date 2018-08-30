// Created an array that lists out all of the letters of the alphabet.
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Created variables to hold the number of wins, losses and guesses. Wins and losses start at 0. Guesses left starts at 10 and should count down.
var wins = 0;
var losses = 0;
var guessesLeft = 10;

// Created variables that hold references to the places in HTML where I want to display things.
var userGuess = document.getElementById("user-guess");
var wins = document.getElementById("wins");
var guessLeft = document.getElementById("guesses-left");
var losses = document.getElementById("losses");

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {
    
    // Determines which key was pressed.
    var userGuess = event.key;

    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    // This logic determines the outcome of the game (win/guess left), and increments or decrements the appropriate number.
    if (userGuess === computerGuess) {
        wins++;
    } else {
      guessLeft--;
    }

    if (guessLeft === 0) {

    }
    
    console.log(event);
    userGuess.textContent = event.key;
    

  };
    




















