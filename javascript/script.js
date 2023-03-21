let gish;
gish = 'hello bagel man';
let playerSelection;
let computerSelection;
playerSelection = prompt('rock, paper, or scissors');
computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    let victor;
    playerSelection = playerSelection.toLowerCase();
    if ((playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'scissors' && computerSelection === 'paper') || (playerSelection === 'rock' && computerSelection === 'scissors')) {
        victor = `Player selects ${playerSelection} and Computer selects ${computerSelection}, you win! Congratulations!`;
        return victor;
    }
    else if ((playerSelection === 'scissors' && computerSelection === 'rock') || (playerSelection === 'rock' && computerSelection === 'paper') || (playerSelection === 'paper' && computerSelection === 'scissors')) {
        victor = `Player selects ${playerSelection} and Computer selects ${computerSelection}, you lose.`;
        return victor;
    }
    else {
        victor = `Player selects ${playerSelection} and Computer selects ${computerSelection}, it's a draw`;
        return victor;
    }

  }

function getComputerChoice() {
    let word;
    word = ['rock','paper','scissors'];
    word = word[Math.floor(Math.random()*word.length)];
    return word;
}