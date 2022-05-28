const CHOICES = Array("Rock", "Paper", "Scissors");
let userScore = 0;
let computerScore = 0;
let roundCounter = 1;

const div = document.querySelector("#info");
const playerPoint = document.querySelector("#playerPoint");
const computerPoint = document.querySelector("#computerPoint")

function playGame(e) {
    //dom node's
    const playerSelection = e.target.id;
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);
    writeRoundWinner(result, playerSelection, computerSelection);
    roundCounter++;
}

function writeRoundWinner(result, playerSelection, computerSelection) {
     //check if game is over
     if (roundCounter === 5) {
        //write winner of the game
        if (userScore > computerScore)
            div.textContent = "User Won the Game!";
        else if (userScore < computerScore)
            div.textContent = "Computer won the Game!";
        else
            div.textContent = "Draw!";
        //reset game
        userScore = 0;
        computerScore = 0;
        roundCounter = 0;
        playerPoint.textContent = userScore;
        computerPoint.textContent = computerScore;
    }
    else {
        roundMsg = `Round ${roundCounter}: `;
        if (result === 0) {
            div.textContent = roundMsg + "This round is Tie!";
        }
        else if (result === -1) {
            computerScore++;
            computerPoint.textContent = computerScore;
            div.textContent = roundMsg + `Computer won this round. ${computerSelection} beats ${playerSelection}`;
        }
        else if (result === 1) {
            userScore++;
            playerPoint.textContent = userScore;
            div.textContent = roundMsg + `User won this round! ${playerSelection} beats ${computerSelection}`;
        }
    }
}

//computer randomly chooses rock, paper, scissors
function computerPlay() {
    return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}

// return 1 if player win return; return -1 if computer wins; return 0 if draw;
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
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

const buttons = document.querySelectorAll("button");

buttons.forEach(button => button.addEventListener("click", playGame));