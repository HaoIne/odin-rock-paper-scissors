function getComputerChoice() {

  let num = Math.random() * 3;
  let choice;

  switch(Math.floor(num / 1)) {
    case 0: choice = "rock"; break;
    case 1: choice = "paper"; break;
    case 2: choice = "scissors"; break;
  }

  return choice;
}

function getHumanChoice() {
  let choice = prompt("Enter your choice");
  return choice;
}

function playRound(humanChoice, computerChoice) {
  if(humanChoice == computerChoice) {
    return;
  } else if(humanChoice == "rock") {
    if(computerChoice == "scissors") {
      humanScore++;
      console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
    } else {
      computerScore++;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
    }
  } else if(humanChoice == "scissors") {
    if(computerChoice == "paper") {
      humanScore++;
      console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
    } else {
      computerScore++;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
    }
  } else {
    if(computerScore == "rock") {
      humanScore++;
      console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
    } else {
      computerScore++;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
    }
  }

    console.log("Human Selection: " + humanChoice);
    console.log("Computer Selection: " + computerChoice);
    console.log("Human Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
}

function playGame() {
  for(let i = 0; i < 5; i++) {

    const humanSelection = getHumanChoice().toLowerCase();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  }
  if(humanScore == computerScore) {
    alert("No one wins finally.");
  } else if(humanScore < computerScore) {
    alert("You lose, Computer wins!")
  } else {
    alert("You win!");
  }
}

let humanScore = 0;
let computerScore = 0;

playGame();
