const banner = document.querySelector(".banner");
const options = document.querySelectorAll('.option');
const answers = document.querySelectorAll('.answer');
const rock = document.querySelector(".rock")
const yesButton = document.querySelector(".yes")
console.log(yesButton)
let showingOptions = true;
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
        option.style.display = showingOptions ? 'inline' : 'none';
    });

    answers.forEach(answer => {
        answer.style.display = showingOptions ? 'none' : 'inline';
    });
};
yesButton.addEventListener('click', toggleOptions);