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
    if(playerSelection.toLowerCase() == computerSelection.toLowerCase()){
        return `You tie! You both chose ${playerSelection}`;
    }
    else if(playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "paper" ||
    playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "scissors" ||
    playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "rock"){
        return `You lose! ${computerSelection} beats ${playerSelection}!`;
    }
    else if(playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "rock" ||
    playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "paper" ||
    playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "scissors"){
        return `You win! ${playerSelection} beats ${computerSelection}!`;
    }
}

buttons = document.querySelectorAll("button");
buttons.forEach((button) => button.addEventListener('click', game));

function game(event){
    console.log(playRound(event));
}
