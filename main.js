const getComputerChoice = () => {
    let compChoice = ""
    let randNum = Math.floor(Math.random() * 3)
    if (randNum == 0) {
        compChoice = "rock"
    } else if (randNum == 1) {
        compChoice = "paper"
    } else if (randNum == 2) {
        compChoice = "scissors"
    }
    return compChoice
}

const userChoice = window.prompt("Please select your weapon")