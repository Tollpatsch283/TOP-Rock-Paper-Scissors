const getComputerChoice = () => {
    let computerChoice = "";
    let randNum = Math.floor(Math.random() * 3);

    if (randNum === 0) {
        computerChoice = "rock";
    } else if (randNum === 1) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    console.log(`computer chose ${computerChoice}`);
    return computerChoice;
};

const getUserChoice = () => {
    const userChoice = window.prompt("rock, paper, scissors?");
    return userChoice;
}

const gamePrompt = () => {
    const wantToPlay = window.prompt("Would you like to play rock, paper, scissors? Type yes or no")
    if (wantToPlay == "yes") {
        playGame();
    } else {
        console.log("ok bye")
    }
}

const playGame = () => {
    let result = "";
    const compChoice = getComputerChoice();
    const userChoice = getUserChoice();

    //check if tie
    if (userChoice == compChoice) {
        result += "It's a tie."
    }

    //check if computer chose rock
    if (compChoice == "rock") {
      if (userChoice == "scissors") {
        result += "You lose."
      } else if (userChoice == "paper") {
        result += "You win."
      }
    }
    //check if computer chose scissors
    if (compChoice == "scissors") {
      if (userChoice == "paper") {
        result += "You lose."
      } else if (userChoice == "rock") {
        result += "You win."
      }
    }
    //check if computer chose paper
    if (compChoice == "paper") {
        if (userChoice == "rock") {
            result += "You lose."
        } else if (userChoice == "scissors") {
            result += "You win."
        }
    }
    console.log(result)

}

gamePrompt();