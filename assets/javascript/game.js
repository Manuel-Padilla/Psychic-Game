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

// Wait until the DOM is fully loaded and then run the function
window.addEventListener("DOMContentLoaded", function(){

  // This function is run whenever the user presses a key.
  document.onkeyup = function(event) {
    
    // event.keyCode and event.code return the numeric code for the character 
    // they produce. When passed to String.fromCharCode(), we get the actual
    // character that was produced by the key input, but this excludes keystrokes
    // that don't produce a visible character (space, backspace, tab, enter, etc.)
    // From there, we convert that character to lower-case.
    var userGuess = String.fromCharCode(event.keyCode || event.code).toLowerCase();
    var found = false;


    // Determines which key was pressed.
    var userGuess = event.key;
    userGuess.textContent = event.key;

    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    // This logic determines the outcome of the game (win/guess left), and increments or decrements the appropriate number.
    if (userGuess === computerGuess) {
      wins++;
    } else {
      guessesLeft--;
    }
    
    // If the guess number reaches 0, add 1 to losses.
    if (guessesLeft === 0) {
      losses++;
    }



  };
});

      
    

















