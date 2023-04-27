let userScore = 0;
let computerScore = 0;
const userScoreEl = document.getElementById("user-score");
const computerScoreEl = document.getElementById("computer-score");
const scoreBoardEl = document.querySelector(".score-board");
const resultEl = document.querySelector(".result");
const rockEl = document.getElementById("rock");
const paperEl = document.getElementById("paper");
const scissorsEl = document.getElementById("scissors");

function getComputerChoice(){
  const choices = ['rock', 'paper', 'scissors'];
  randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}


function win(userChoice, computerChoice) {
  const userChoiceEl = document.getElementById(userChoice);
  userScore++;
  userScoreEl.innerHTML = userScore;
  computerScoreEl.innerHTML = computerScore;
  resultEl.innerHTML = `${userChoice} beats ${computerChoice}. You win! 🔥`;
  userChoiceEl.classList.add('green-glow');
  setTimeout(() => userChoiceEl.classList.remove('green-glow'),300);
}


function lose(userChoice, computerChoice) {
  const userChoiceEl = document.getElementById(userChoice);
  computerScore++;
  computerScoreEl.innerHTML = computerScore;
  userScoreEl.innerHTML = userScore;
  resultEl.innerHTML = `${userChoice} loses to ${computerChoice}. You lost! 💩`;
  userChoiceEl.classList.add('red-glow');
  setTimeout(() => userChoiceEl.classList.remove('red-glow'),300);
} 

function draw(userChoice, computerChoice) {
  const userChoiceEl = document.getElementById(userChoice);
  resultEl.innerHTML = `${userChoice} equals ${computerChoice}. It is a draw!`;
  userChoiceEl.classList.add('gray-glow');
  setTimeout(() => userChoiceEl.classList.remove('gray-glow'),300);
}


function game (userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      win(userChoice, computerChoice);
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      lose(userChoice, computerChoice);
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      draw(userChoice, computerChoice);
      break;
  }

}


function main(){

  rockEl.addEventListener("click", () => game("rock"))
  paperEl.addEventListener("click", () => game("paper"))
  scissorsEl.addEventListener("click", () => game("scissors"))

}

main();