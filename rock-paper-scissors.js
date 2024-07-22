let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
  // 3 options, rock, paper, scissors --> store somewhere
  // generate a random number --> allocate option to number
  const choicesArr = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * choicesArr.length);
  return choicesArr[randomNumber];
};

const getHumanChoice = () => {
  // prompt user to make a choice of rock paper or scissors
  // take choice and compare with computer choice
  // display win or loss message
  // extra - if not valid input show error
  const choice = prompt("Make your choice. Rock, Paper or Scissors? ");
  return choice;
};

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

const playRound = (humanChoice, computerChoice) => {
  //define param for each, humna and comp
  //human choice must be case-insensitive
  //log loosing or winning message
  //increment score
  console.log({ humanChoice, computerChoice });
  if (
    (humanChoice.toLowerCase() === "rock" && computerChoice === "scissors") ||
    (humanChoice.toLowerCase() === "scissors" && computerChoice === "paper") ||
    (humanChoice.toLowerCase() === "paper" && computerChoice === "rock")
  ) {
    console.log("Congratulations! You Win");
    humanScore++;
  } else if (
    (humanChoice.toLowerCase() === "rock" && computerChoice === "paper") ||
    (humanChoice.toLowerCase() === "scissors" && computerChoice === "rock") ||
    (humanChoice.toLowerCase() === "paper" && computerChoice === "scissors")
  ) {
    console.log("Oh No! You Lost :(");
    computerScore++;
  } else {
    console.log("It's A Draw");
  }
};

playRound(humanChoice, computerChoice);
