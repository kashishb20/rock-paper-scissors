const choices = document.querySelectorAll(".choice");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const msg = document.querySelector("#msg");

let userScore = 0;
let compScore = 0;

// Generate Computer Choice

const genCompChoice = () => {

const options = ["rock", "paper", "scissors"];

const randomIdx = Math.floor(Math.random() * 3);

return options[randomIdx];
 

};

// Draw Game

const drawGame = () => {
 
msg.innerText = "It's a Draw!";

msg.style.backgroundColor = "#374151";
  

};

// Show Winner

const showWinner = (userWin, userChoice, compChoice) => {
 
if (userWin) {

    userScore++;

    userScorePara.innerText = userScore;

    msg.innerText =
        `You Win! ${userChoice} beats ${compChoice}`;

    msg.style.backgroundColor = "#16a34a";

} else {

    compScore++;

    compScorePara.innerText = compScore;

    msg.innerText =
        `You Lost! ${compChoice} beats ${userChoice}`;

    msg.style.backgroundColor = "#dc2626";
} 

};

// Play Game

const playGame = (userChoice) => {
 
const compChoice = genCompChoice();

document.querySelector(
"#computer-choice"
).innerText =
`Computer chose: ${compChoice}`;

if (userChoice === compChoice) {

    drawGame();

} else {

    let userWin = true;

    if (userChoice === "rock") {

        userWin = compChoice === "paper"
            ? false
            : true;

    } else if (userChoice === "paper") {

        userWin = compChoice === "scissors"
            ? false
            : true;

    } else {

        userWin = compChoice === "rock"
            ? false
            : true;
    }

    showWinner(
        userWin,
        userChoice,
        compChoice
    );
}
 

};

// Event Listeners

choices.forEach((choice) => {

 
choice.addEventListener("click", () => {

    const userChoice = choice.getAttribute("id");

    playGame(userChoice);

});
 

});
