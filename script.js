let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const result = document.querySelector("#result");
let playerChoiceDisplay = document.querySelector("#playerChoice");
let computerChoiceDisplay = document.querySelector("#computerChoice");
let userScoreValue = document.querySelector("#userScore");
let compScoreValue = document.querySelector("#compScore");

const showWinner = (userWin) => {
  if (userWin) {
    console.log("You win!!!");
    result.innerText = "Yayy You Won!";
    result.style.backgroundColor = "green";
    userScore++;
    userScoreValue.textContent = userScore;
  } else {
    console.log("You lose!!!");
    result.innerText = "Awww You Lost!";
    result.style.backgroundColor = "red";
    compScore++;
    compScoreValue.textContent = compScore;
  }
};
const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random() * 3);
  return options[randomIndex];
};
const playGame = (userChoice) => {
  //console.log("user choice: ", userChoice);
  playerChoiceDisplay.innerHTML = `Player's Choice: ${userChoice}`;

  //generate computer choice
  const compChoice = genCompChoice();
  //console.log("comp choice ", compChoice);
  computerChoiceDisplay.innerHTML = `Computer's Choice: ${compChoice}`;

  let userWin = true;
  //for draw
  if (userChoice === compChoice) {
    //console.log("It was a draw!");
    result.innerText = "It was a draw! Play Again?";
    result.style.backgroundColor = "gray";
    return;
  } else {
    if (userChoice === "rock") {
      //paper or scissors
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //scissors or rock
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //rock or paper
      userWin = compChoice === "rock" ? false : true;
    }
  }
  showWinner(userWin);
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    //console.log("choice was clicked!", userChoice);
    playGame(userChoice);
  });
});
