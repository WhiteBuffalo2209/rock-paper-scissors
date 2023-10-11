let playerSelection;
let computerSelection;

function playRound(playerSelection, computerSelection) {
    let victor;
    if ((playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'scissors' && computerSelection === 'paper') || (playerSelection === 'rock' && computerSelection === 'scissors')) {
        console.log(`Player selects ${playerSelection} and Computer selects ${computerSelection}, you win!`);
        display.textContent = (`Player selects ${playerSelection} and Computer selects ${computerSelection}, you win!`);
        victor = 'player';
        return victor;
    }
    else if ((playerSelection === 'scissors' && computerSelection === 'rock') || (playerSelection === 'rock' && computerSelection === 'paper') || (playerSelection === 'paper' && computerSelection === 'scissors')) {
        console.log(`Player selects ${playerSelection} and Computer selects ${computerSelection}, you lose.`);
        display.textContent = (`Player selects ${playerSelection} and Computer selects ${computerSelection}, you lose.`);
        victor = 'computer';
        return victor;
    }
    else if ((playerSelection === 'rock' && computerSelection === 'rock') || (playerSelection === 'paper' && computerSelection === 'paper') || (playerSelection === 'scissors' && computerSelection === 'scissors')) {
        console.log(`Player selects ${playerSelection} and Computer selects ${computerSelection}, it's a draw.`);
        display.textContent = (`Player selects ${playerSelection} and Computer selects ${computerSelection}, it's a draw.`);
        victor = 'draw';
        return victor;
    }
    else {
        console.log(`Player selects ${playerSelection} and Computer selects ${computerSelection}, INVALID input.`);
        display.textContent = (`Player selects ${playerSelection} and Computer selects ${computerSelection}, INVALID input.`);
        victor = 'invalid';
        return victor;
    }
}

function getComputerChoice() {
    let word;
    word = ['rock', 'paper', 'scissors'];
    word = word[Math.floor(Math.random() * word.length)];
    return word;
}

let playerPoints = 0;
let computerPoints = 0;

function finalPointChecker() {
    if (playerPoints === 5) {
        display.textContent = (`You are the FINAL winner! Player: ${playerPoints} Computer: ${computerPoints}`);
        alert(`You are the FINAL winner! Player: ${playerPoints} Computer: ${computerPoints}`);
        playerPoints = 0;
        computerPoints = 0;
    }
    else if (computerPoints === 5) {
        display.textContent = (`Computer is the FINAL winner! Player: ${playerPoints} Computer: ${computerPoints}`);
        alert(`Computer is the FINAL winner! Player: ${playerPoints} Computer: ${computerPoints}`);
        playerPoints = 0;
        computerPoints = 0;
    }
}

function gatherPoints() {
    let playerOrComputer = playRound(playerSelection, computerSelection);
    if (playerOrComputer === 'player') {
        playerPoints += 1;
        finalPointChecker();
    }
    else if (playerOrComputer === 'computer') {
        computerPoints += 1;
        finalPointChecker();
    }
    else {
        playerPoints += 0;
        computerPoints += 0;
    }
    console.log(`Player:${playerPoints} Computer:${computerPoints}`);
    score.textContent = (`Player:${playerPoints} Computer:${computerPoints}`);
}

function selectRock() {

    playerSelection = 'rock';
    computerSelection = getComputerChoice();
    gatherPoints();
}
function selectPaper() {
    playerSelection = 'paper';
    computerSelection = getComputerChoice();
    gatherPoints();
}
function selectScissors() {
    playerSelection = 'scissors';
    computerSelection = getComputerChoice();
    gatherPoints();
}

let rock = document.querySelector('.rock');
let paper = document.querySelector('.paper');
let scissors = document.querySelector('.scissors');
rock.addEventListener('click', selectRock);
paper.addEventListener('click', selectPaper);
scissors.addEventListener('click', selectScissors);

const selection = document.querySelector('.selection');

const display = document.createElement('div');
display.classList.add('display');
selection.appendChild(display);

const score = document.createElement('div');
score.classList.add('score');
selection.appendChild(score);






