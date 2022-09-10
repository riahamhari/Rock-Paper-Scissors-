const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')
const playerDisplay = document.querySelector('#playerDisplay')
const computerDisplay = document.querySelector('#computerDisplay')

let playerScore = 0;
let computerScore = 0;
let winningScore = 5;
// let computerChoice = ''


function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3 + 1);
    if (computerChoice === 1) {
        return 'rock';
    }
    if (computerChoice === 2) {
        return 'paper';
    }
    if (computerChoice === 3) {
        return 'scissors';
    }


}



// function playRound(playerSelection, computerSelection) {

//   }


rock.addEventListener('click', function () {
    // let playerChoice = 'rock'
    getComputerChoice()

    if (getComputerChoice() === 'paper') {
        computerScore += 1;
    }
    if (getComputerChoice() === 'scissors') {
        playerScore += 1;
    }
    if (playerScore === winningScore) {
        rock.style.opacity = "0.5";
        paper.style.opacity = "0.5";
        scissors.style.opacity = "0.5";

        rock.disabled = "true";
        paper.disabled = "true";
        scissors.disabled = "true";
        rock.style.cursor = "not-allowed";
        paper.style.cursor = "not-allowed";
        scissors.style.cursor = "not-allowed";
        playerDisplay.style.color = "green";
        computerDisplay.style.color = "red";
    }
    if (computerScore === winningScore) {
        rock.style.opacity = "0.5";
        paper.style.opacity = "0.5";
        scissors.style.opacity = "0.5";

        rock.disabled = "true";
        paper.disabled = "true";
        scissors.disabled = "true";
        rock.style.cursor = "not-allowed";
        paper.style.cursor = "not-allowed";
        scissors.style.cursor = "not-allowed";
        playerDisplay.style.color = "red";
        computerDisplay.style.color = "green";
    }

    playerDisplay.innerText = playerScore;
    computerDisplay.innerText = computerScore;


})

paper.addEventListener('click', function () {

    getComputerChoice()

    if (getComputerChoice() === 'scissors') {
        computerScore += 1;
    }
    if (getComputerChoice() === 'rock') {
        playerScore += 1;
    }
    if (playerScore === winningScore) {
        rock.style.opacity = "0.5";
        paper.style.opacity = "0.5";
        scissors.style.opacity = "0.5";

        rock.disabled = "true";
        paper.disabled = "true";
        scissors.disabled = "true";
        rock.style.cursor = "not-allowed";
        paper.style.cursor = "not-allowed";
        scissors.style.cursor = "not-allowed";
        playerDisplay.style.color = "green";
        computerDisplay.style.color = "red";
    }
    if (computerScore === winningScore) {
        rock.style.opacity = "0.5";
        paper.style.opacity = "0.5";
        scissors.style.opacity = "0.5";

        rock.disabled = "true";
        paper.disabled = "true";
        scissors.disabled = "true";
        rock.style.cursor = "not-allowed";
        paper.style.cursor = "not-allowed";
        scissors.style.cursor = "not-allowed";
        playerDisplay.style.color = "red";
        computerDisplay.style.color = "green";
    }

    playerDisplay.innerText = playerScore;
    computerDisplay.innerText = computerScore;


})


scissors.addEventListener('click', function () {

    getComputerChoice()

    if (getComputerChoice() === 'rock') {
        computerScore += 1;
    }
    if (getComputerChoice() === 'paper') {
        playerScore += 1;
    }
    if (playerScore === winningScore) {
        rock.style.opacity = "0.5";
        paper.style.opacity = "0.5";
        scissors.style.opacity = "0.5";

        rock.disabled = "true";
        paper.disabled = "true";
        scissors.disabled = "true";
        rock.style.cursor = "not-allowed";
        paper.style.cursor = "not-allowed";
        scissors.style.cursor = "not-allowed";
        playerDisplay.style.color = "green";
        computerDisplay.style.color = "red";
    }
    if (computerScore === winningScore) {
        rock.style.opacity = "0.5";
        paper.style.opacity = "0.5";
        scissors.style.opacity = "0.5";

        rock.disabled = "true";
        paper.disabled = "true";
        scissors.disabled = "true";
        rock.style.cursor = "not-allowed";
        paper.style.cursor = "not-allowed";
        scissors.style.cursor = "not-allowed";
        playerDisplay.style.color = "red";
        computerDisplay.style.color = "green";
    }

    playerDisplay.innerText = playerScore;
    computerDisplay.innerText = computerScore;


})
