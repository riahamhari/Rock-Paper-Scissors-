
// GAME

let playerScore = 0;
let computerScore = 0;
let winningScore = 5;
let roundWinner = '';


const codes = {
    rock: '&#9994',
    paper: '&#9995',
    scissors: '&#9996'
}


function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    switch (randomNumber) {
        case 1:
            return 'ROCK';
        case 2:
            return 'PAPER';
        case 3:
            return 'SCISSORS';
    }


}




function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        roundWinner = 'tie'
    }
    if (
        (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
        (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
        (playerSelection === 'PAPER' && computerSelection === 'ROCK')
    ) {
        playerScore++
        roundWinner = 'player'
    }
    if (
        (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
        (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') ||
        (computerSelection === 'PAPER' && playerSelection === 'ROCK')
    ) {
        computerScore++
        roundWinner = 'computer'
    }
    updateScoreMessage(roundWinner, playerSelection, computerSelection)
}





function isGameOver() {
    return playerScore === 5 || computerScore === 5
}


//   UI
const scoreInfo = document.querySelector('#scoreInfo')
const scoreMessage = document.querySelector('#scoreMessage')
const playerSign = document.querySelector('#playerSign')
const computerSign = document.querySelector('#computerSign')
const playerScoreDisplay = document.querySelector('#playerScore')
const computerScoreDisplay = document.querySelector('#computerScore')
const rockBtn = document.querySelector('#rock')
const paperBtn = document.querySelector('#paper')
const scissorsBtn = document.querySelector('#scissors')

rockBtn.addEventListener('click', () => btnClick('ROCK'))
paperBtn.addEventListener('click', () => btnClick('PAPER'))
scissorsBtn.addEventListener('click', () => btnClick('SCISSORS'))



function btnClick(playerSelection) {
    if (isGameOver()) {
        rockBtn.style.opacity = "0.5";
        paperBtn.style.opacity = "0.5";
        scissorsBtn.style.opacity = "0.5";

        rockBtn.disabled = "true";
        paperBtn.disabled = "true";
        scissorsBtn.disabled = "true";
        rockBtn.style.cursor = "not-allowed";
        paperBtn.style.cursor = "not-allowed";
        scissorsBtn.style.cursor = "not-allowed";
        return
    }
    const computerSelection = getComputerChoice()
    playRound(playerSelection, computerSelection)
    updateChoices(playerSelection, computerSelection)
    updateScore()

    if (isGameOver()) {
        rockBtn.disabled = "true";
        paperBtn.disabled = "true";
        scissorsBtn.disabled = "true";
        rockBtn.style.cursor = "not-allowed";
        paperBtn.style.cursor = "not-allowed";
        scissorsBtn.style.cursor = "not-allowed";
        return

    }
}


function updateChoices(playerSelection, computerSelection) {
    switch (playerSelection) {
        case 'ROCK':
            playerSign.innerHTML = `${codes.rock}`
            break
        case 'PAPER':
            playerSign.innerHTML = `${codes.paper}`
            break
        case 'SCISSORS':
            playerSign.innerHTML = `${codes.scissors}`
            break
    }

    switch (computerSelection) {
        case 'ROCK':
            computerSign.innerHTML = `${codes.rock}`
            break
        case 'PAPER':
            computerSign.innerHTML = `${codes.paper}`
            break
        case 'SCISSORS':
            computerSign.innerHTML = `${codes.scissors}`
            break
    }
}

function updateScore() {
    if (roundWinner === 'tie') {
        scoreInfo.textContent = "It's a tie!"
    } else if (roundWinner === 'player') {
        scoreInfo.textContent = 'You won!'
    } else if (roundWinner === 'computer') {
        scoreInfo.textContent = 'You lost!'
    }

    playerScoreDisplay.textContent = `Player: ${playerScore}`
    computerScoreDisplay.textContent = `Computer: ${computerScore}`
}




function updateScoreMessage(winner, playerSelection, computerSelection) {
    if (winner === 'player') {
        scoreMessage.textContent = `${playerSelection} beats ${computerSelection.toLowerCase()}`
        return
    }
    if (winner === 'computer') {
        scoreMessage.textContent = `${playerSelection} is beaten by ${computerSelection.toLowerCase()}`
        return
    }

    scoreMessage.textContent = `${playerSelection} ties with ${computerSelection.toLowerCase()}`
}







