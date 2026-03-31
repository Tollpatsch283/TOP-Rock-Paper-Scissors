# Rock, Paper, Scissors Game

## Overview

This project is a simple implementation of the classic **Rock, Paper, Scissors** game using JavaScript. It was built as part of *The Odin Project – Foundations Course* and serves as an introduction to basic programming concepts such as functions, conditionals, user input, and control flow.

The game currently runs in the browser using `window.prompt()` for input and logs results to the console. Future updates will include a graphical user interface (UI).

---

## Features

* Prompts the user to start the game (`yes` / `no`)
* Allows the user to choose:

  * `rock`
  * `paper`
  * `scissors`
* Randomly generates a computer choice
* Determines the winner based on standard game rules
* Displays results in the browser console

---

## How It Works

1. The user is asked if they want to play.
2. If the user types `"yes"`, the game begins.
3. The user is prompted to choose rock, paper, or scissors.
4. The computer randomly selects one of the three options.
5. The game compares both choices:

   * Rock beats Scissors
   * Scissors beats Paper
   * Paper beats Rock
6. The result (win, lose, or tie) is printed to the console.

---

## Technologies Used

* HTML5
* JavaScript (Vanilla JS)

---

## Project Structure

```
/project-folder
│
├── index.html     # Main HTML file
└── main.js      # Game logic
```

---

## How to Run the Project

1. Clone or download the repository
2. Open `index.html` in your browser
3. Follow the prompts to play the game
4. Open the browser console (F12) to see results

---

## Example Gameplay

```
Would you like to play rock, paper, scissors? (yes/no)
> yes

rock, paper, or scissors?
> rock

Computer chose paper
You lose!
```

---

## Future Improvements

* Replace prompts with a full graphical UI
* Add buttons for user input
* Display results directly on the page
* Keep score across multiple rounds
* Improve input validation
* Add animations and styling

---

## Learning Goals

This project helped reinforce:

* Writing reusable functions
* Using conditionals (`if/else`)
* Generating random values
* Handling user input
* Structuring simple programs

---

## Acknowledgements

Built as part of **The Odin Project – Foundations Course**.

---
