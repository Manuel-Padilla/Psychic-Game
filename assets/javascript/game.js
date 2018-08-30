var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Creating variables to hold the number of wins, losses and guesses. Wins and losses start at 0. Guesses Left starts at 10 and should count down.
var wins = 0;
var losses = 0;
var guessesLeft = 10;

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

// Created variables that hold references to the places in HTML where I want to display things
var userGuess = document.getElementById("user-guess");
var wins = document.getElementById("wins");
var guessLeft = document.getElementById("guesses-left");
var losses = document.getElementById("losses");

userGuess.onmouseup = function(event) {
    console.log("Click event");
}

document.addEventListener("mouseover", function(event){
    console.log("Mouse move in the document");
});

// Game is fired once user key is released
document.onkeyup = function(event) {
    console.log(event);
    userGuess.textContent = event.key;
};
    
    // // Determines which key the user pressed
    // var userGuess = event.key;

    // // Computer chooses a letter an choice is stored in var computerGuess 
    




















