let humanScore = 0
let computerScore = 0
    
     // create a function that gets computer choice 
function getComputerChoice() {

    // create variables to store the values of Rock Paper and Scissors
    let rock = "Rock"
    let paper = "Paper"
    let scissors = "Scissors"

    // make the computer generate a random number from 1 to 3
    let computerChoice = Math.floor(Math.random() * 3) + 1

    // make the computer return either Rock, Paper or Scissors 
    if (computerChoice === 1) {
        computerChoice = rock
    }
    else if (computerChoice === 2) {
        computerChoice = paper
    }
    else {
        computerChoice = scissors
    }

    return computerChoice

}


// create a function that gets user input
function getHumanChoice(humanSelection) {
    const computerChoice = getComputerChoice()
    playRound(humanSelection, computerChoice)
    
}

//

// create a div for to hold the three buttons 
const gameDisplay = document.querySelector("#parent")


// create the three buttons
const rockBtn = document.createElement("button")
const paperBtn = document.createElement("button")
const scissorsBtn = document.createElement("button")


// Set the text for each button
rockBtn.textContent = "Rock"
paperBtn.textContent = "Paper"
scissorsBtn.textContent = "Scissors"

// Add the three buttons to the div to display them
gameDisplay.appendChild(rockBtn)
gameDisplay.appendChild(paperBtn)
gameDisplay.appendChild(scissorsBtn)

// Add event listener to each button and call the function getHumanChoice

rockBtn.addEventListener("click", () => getHumanChoice("Rock"))
paperBtn.addEventListener("click", () => getHumanChoice("Paper"))
scissorsBtn.addEventListener("click", () => getHumanChoice("Scissors"))

// create function to play a round of the game

function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        resultDiv.textContent = "This round was a Tie"
        humanScoreDiv.textContent = `Your score : ${humanScore}`
        computerScoreDiv.textContent = `computer score : ${computerScore}`
    }
    else if(
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice === "Paper")
    ){
        resultDiv.textContent = "You Won the round" 
        humanScore++
        humanScoreDiv.textContent = `Your score : ${humanScore}`
        computerScoreDiv.textContent = `computer score : ${computerScore}`

    }
    else{
        resultDiv.textContent = "You Lost the round"
        computerScore++
        humanScoreDiv.textContent = `Your score : ${humanScore}`
        computerScoreDiv.textContent = `computer score : ${computerScore}`
    }

    if(humanScore === 5 ){
        resultDiv.textContent = "Congratulations You Won the Match "

        // disable the buttons 
        rockBtn.disabled = true
        paperBtn.disabled = true
        scissorsBtn.disabled = true

        // replay instructions 
        const replay = document.querySelector("#refresh")
        replay.textContent = "Refresh to play again"


    }
    else if(computerScore === 5){
        resultDiv.textContent = "Better luck next time Computer WINS"

        // disable the buttons 
        rockBtn.disabled = true
        paperBtn.disabled = true
        scissorsBtn.disabled = true
        
        // replay instructions 
        const replay = document.querySelector("#refresh")
        replay.textContent = "Refresh to play again"
    }
}







const resultDiv = document.querySelector("#displayResult")
const humanScoreDiv = document.querySelector("#displayHumanScore")
const computerScoreDiv = document.querySelector("#displayComputerScore")

 