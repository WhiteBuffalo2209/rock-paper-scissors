let playerSelection;
let computerSelection;

function game() {
    let playerPoints = 0;
    let computerPoints = 0;
    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i+1}`);
        playerSelection = prompt('rock, paper, or scissors');
        playerSelection = playerSelection.toLowerCase();
        computerSelection = getComputerChoice();
        let playerOrComputer = playRound(playerSelection,computerSelection);
        if (playerOrComputer === 'player') {
            playerPoints += 1;
        }
        else if (playerOrComputer === 'computer') {
            computerPoints += 1;
        }
        else {
            playerPoints += 0;
            computerPoints += 0;
        }
    }
    if (playerPoints > computerPoints) {
        console.log(`Player score is: ${playerPoints}.`);
        console.log(`Computer score is: ${computerPoints}.`);
        console.log('You win! I love you Megan <3');
    }
    else {
        console.log(`Player score is: ${playerPoints}.`);
        console.log(`Computer score is: ${computerPoints}.`);
        console.log('You lose.');
    }
}

function playRound(playerSelection, computerSelection) {
    let victor;
    if ((playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'scissors' && computerSelection === 'paper') || (playerSelection === 'rock' && computerSelection === 'scissors')) {
        console.log(`Player selects ${playerSelection} and Computer selects ${computerSelection}, you win! Congratulations!`);
        victor = 'player';
        return victor;
    }
    else if ((playerSelection === 'scissors' && computerSelection === 'rock') || (playerSelection === 'rock' && computerSelection === 'paper') || (playerSelection === 'paper' && computerSelection === 'scissors')) {
        console.log(`Player selects ${playerSelection} and Computer selects ${computerSelection}, you lose.`);
        victor = 'computer';
        return victor;
    }
    else if ((playerSelection === 'rock' && computerSelection === 'rock') || (playerSelection === 'paper' && computerSelection === 'paper') || (playerSelection === 'scissors' && computerSelection === 'scissors')) {
        console.log(`Player selects ${playerSelection} and Computer selects ${computerSelection}, it's a draw.`);
        victor = 'draw';
        return victor;
    }
    else {
        console.log(`Player selects ${playerSelection} and Computer selects ${computerSelection}, INVALID input.`);
        victor = 'invalid';
        return victor;
    }
  }

function getComputerChoice() {
    let word;
    word = ['rock','paper','scissors'];
    word = word[Math.floor(Math.random()*word.length)];
    return word;
}