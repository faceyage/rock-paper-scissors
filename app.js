const CHOICES = Array("rock", "paper", "scissors");

function game() {
    let userScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i}`)
        const playerSelection = prompt("Rock, Paper, Scissors");
        const computerSelection = computerPlay();
        console.log(`player selected: ${playerSelection}\ncomputer selected: ${computerSelection}`);
        let result = playRound(playerSelection, computerSelection);
        if (result === 0) {
            console.log("This round is Tie!");
        }
        else if (result === -1) {
            computerScore++;
            console.log("Computer won this round!");
        }
        else if (result === 1) {
            userScore++;
            console.log("User won this round");
        }
        console.log(`User Score: ${userScore}\nComputer Score: ${computerScore}`);
    }
    if (userScore > computerScore)
        console.log("User Won the Game!");
    else if (userScore < computerScore)
        console.log("Computer won the Game!");
    else
        console.log("The game is Tie!");
}


//computer randomly chooses rock, paper, scissors
function computerPlay() {
    return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}

// return 1 if player win return; return -1 if computer wins; return 0 if tie;
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection)
        return 0;
    if (playerSelection === "rock") {
        if (computerSelection === "paper")
            return -1;
        else
            return 1;      
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "scissors")
            return -1;
        else
            return 1; 
    }
    else if (playerSelection === "scissors") {
        if (computerSelection === "rock")
            return -1;
        else
            return 1; 
    }
}

game();