function getComputerChoice(){
    let x = Math.floor((Math.random()*3)) + 1;
    if(x == 1){
        return "Rock";
    }
    else if (x==2){
        return "Paper";
    }
    else{
        return "Scissors";
    }
}

function playRound(event){
    playerSelection = event.target.textContent;
    const computerSelection = getComputerChoice();
    let result;
    if(playerSelection.toLowerCase() == computerSelection.toLowerCase()){
        result = `You tie! You both chose ${playerSelection}`;
    }
    else if(playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "paper" ||
    playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "scissors" ||
    playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "rock"){
        result = `You lose! ${computerSelection} beats ${playerSelection}!`;
        updateScore("computer");
    }
    else if(playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "rock" ||
    playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "paper" ||
    playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "scissors"){
        result = `You win! ${playerSelection} beats ${computerSelection}!`;
        updateScore("player");
    }
    results.textContent += result + "\n";
}

buttons = document.querySelectorAll("button");
buttons.forEach((button) => button.addEventListener('click', playRound));

results = document.querySelector(".results");
playerScore = document.querySelector(".playerScore > span")
computerScore = document.querySelector(".computerScore > span")

function updateScore(winner){
    if(winner == "player"){
        playerScore.textContent = parseInt(playerScore.textContent) + 1;
    }
    else if(winner == "computer"){
        computerScore.textContent = parseInt(computerScore.textContent) + 1;
    }
    if(parseInt(playerScore.textContent) == 5){
        alert("Game over. Player Wins!");
    }
    
    if(parseInt(computerScore.textContent) == 5){
        alert("Game over. Computer Wins!");
    }
}
