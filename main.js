const banner = document.querySelector(".banner");
const options = document.querySelectorAll('.option');
const answers = document.querySelectorAll('.answer');
const rock = document.querySelector(".rock")
const paper = document.querySelector(".paper")
const scissors = document.querySelector(".scissors")
const yesButton = document.querySelector(".yes")
let showingOptions = false;
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

const toggleOptions = () => {
    showingOptions = !showingOptions;

    options.forEach(option => {
        option.style.display = showingOptions ? 'flex' : 'none';
    });

    answers.forEach(answer => {
        answer.style.display = showingOptions ? 'none' : 'flex';
    });
};
yesButton.addEventListener('click', toggleOptions);

const playRock = () => {
    const compChoice = getComputerChoice();
    if (compChoice == "rock") {
        banner.textContent = "Its a tie."
    } else if (compChoice == "scissors") {
        banner.textContent = "You win!"
    } else if (compChoice == "paper") {
        banner.textContent = "You lose!"
    }
}
rock.addEventListener('click', playRock);

const playPaper = () => {
    const compChoice = getComputerChoice();
    if (compChoice == "paper") {
        banner.textContent = "Its a tie."
    } else if (compChoice == "rock") {
        banner.textContent = "You win!"
    } else if (compChoice == "scissors") {
        banner.textContent = "You lose!"
    }
}
paper.addEventListener('click', playPaper);

const playScissors = () => {
    const compChoice = getComputerChoice();
    if (compChoice == "scissors") {
        banner.textContent = "Its a tie."
    } else if (compChoice == "paper") {
        banner.textContent = "You win!"
    } else if (compChoice == "rock") {
        banner.textContent = "You lose!"
    }
}
scissors.addEventListener('click', playScissors);
