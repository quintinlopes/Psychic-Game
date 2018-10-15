var ComputerSelection = 
["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var Wins = 0;
var Losses = 0;
var GuessesLeft = 9;
var YourGuessesSoFar = [];

function newletter (){
    GuessesLeft = 9;
    YourGuessesSoFar = [];

    ComputerGuess = ComputerSelection[Math.floor(Math.random() * (ComputerSelection.length))];

    console.log(ComputerGuess);
}

function reset (){
    GuessesLeft = 9;
    YourGuessesSoFar = [];
    
    ComputerGuess = ComputerSelection[Math.floor(Math.random() * (ComputerSelection.length))];

    console.log(ComputerGuess);
}
reset();

document.onkeyup = function(event) {
var UserGuess = String.fromCharCode(event.keyCode).toLowerCase();
    
    if (!/[a-z]/.test(UserGuess)){
        alert ("Hey! C'mon man I'm a psychic not a magician. Only choose a letter.")
        GuessesLeft++;

    }

    if (YourGuessesSoFar.indexOf(UserGuess) === -1){
        YourGuessesSoFar.push(UserGuess);
        }
    
    else {
        alert ("This letter has already been selected. Try picking a different one.");
        GuessesLeft++;

    }

    if (UserGuess === ComputerGuess) {
        Wins++;
        alert ("You got it! let's try again");
        newletter();

    }

    else {
        GuessesLeft--;
    }

    if (GuessesLeft === 0) {
        Losses++;
        alert ("Uh-Oh, you lost!");
        reset();

    }

    document.querySelector("#Wins").innerHTML = "Win: " + Wins;
    document.querySelector("#Losses").innerHTML = "Losses: " + Losses;
    document.querySelector("#GuessesLeft").innerHTML = "Guesses Left: " + GuessesLeft;
    document.querySelector("#YourGuessesSoFar").innerHTML = "Your Guesses So Far: " + YourGuessesSoFar;

};