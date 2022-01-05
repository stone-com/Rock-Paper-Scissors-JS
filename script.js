var wins = 0;
var losses = 0;
var ties = 0;
//create variables referencing scoreboard on HTML DOM
var winScore = document.getElementById('wins');
var lossScore = document.getElementById('losses');
var tieScore = document.getElementById('ties');
var replayBtn = document.getElementById('replay');

var choices = ['R', 'P', 'S'];

var game = function() {
    // player chooses R P or S
    var playerChoice = prompt("Press R, P, or S.");

    if (!playerChoice) {
        return;
    }
    // Computer choice using math.random
    var getComputerChoice = Math.floor(Math.random() * choices.length);
    var computerChoice = choices[getComputerChoice];
    // alert what the computer choice is
    alert('The computer chose ' + computerChoice);
    // Win conditions
    if ((playerChoice === "S" && computerChoice === "P") || 
        (playerChoice === 'P' && computerChoice === "R") ||
        (playerChoice === "R" && computerChoice === "S")) {
            window.alert('Nice job, you win!');
           wins++;
           // update scoreboard
           winScore.innerHTML = wins;   
        } else if 
        (playerChoice === computerChoice) {
            window.alert('Yall chose the same, its a tie!');
            ties++;
            // update scoreboard
            tieScore.innerHTML = ties;
        } else {
            window.alert('The computer beat you! Oh no!');
            losses++;
            // update scoreboard
            lossScore.innerHTML = losses;
        };

    
    // playAgain();

}
replayBtn.addEventListener('click', game);


// var playAgain = function() {
//     var myChoice = window.confirm('Do you want to play again?');
//     if(myChoice) {
//         game();
//     }

// }

game();