
const choice = ["Rock", "Paper", "Scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerDisplayScores = document.getElementById("playerDisplayScores");
const computerDisplayScores = document.getElementById("computerDisplayScores");
let playerScore = 0;
let computerScore = 0;

function play(playerChoice){
    const computerChoice = choice[Math.floor(Math.random() * 3)];
    let result = "";

    if(playerChoice === computerChoice){
        result = "It's a tie";
    }

    else{

        switch(playerChoice){
            case "Rock":
                result = (computerChoice === "Scissors")? "You Win" : "You Lose"
                break;
            case "Paper":
                result = (computerChoice === "Rock")? "You Win" : "You Lose"
                break;
            case "Scissors":
                result = (computerChoice === "Paper")? "You Win" : "You Lose"
                break;
        }
    }

    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText");

    switch(result){
        case "You Win":
            playerScore++;
            playerDisplayScores.textContent = playerScore;
            resultDisplay.classList.add("greenText");
            break;
        case "You Lose":
            computerScore++;
            computerDisplayScores.textContent = computerScore;
            resultDisplay.classList.add("redText");
            break;
    }
}