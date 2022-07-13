
var tie = 0;
var win = 0;
var loss = 0;

var acceptibleChoice = ["r", "p", "s"];

//TODO: ask user via pop up what choice they want
var playGame = function () {

    userChoice = window.prompt("choose r, p, or s")

    //  userChoice to lowercase
    userChoice = userChoice.toLowerCase();


    // Get random index from array of options
    var random = Math.floor(Math.random() * acceptibleChoice.length);

    var computerChoice = acceptibleChoice[random];

    window.alert("The computer chose " + computerChoice);

    // If choices are the same, it's a tie
    if (userChoice === computerChoice) {
        tie++;
        window.alert("it's a tie!");
        // Check every win condition for the player
    } else if (
        (userChoice === "r" && computerChoice === "s") ||
        (userChoice === "p" && computerChoice === "r") ||
        (userChoice === "s" && computerChoice === "p")
    ) {
        win++;
        window.alert("you win!")
    } else {
        loss++;
        window.alert("You lost!");
    }
    window.alert(
        "Stats:\nWins: " + win + "\nLosses: " + loss + "\nTies: " + tie
    );
    // Ask user to play again
    var playAgain = window.confirm("do you want to play again?")
    if (playAgain) {
        playGame();
    };

};



// Run the game for the first time
playGame();
