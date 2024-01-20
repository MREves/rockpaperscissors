
function getComputerChoice() {
  let options = Array('Rock', 'Paper', 'Scissors')
  let compuerChoice = Math.floor(Math.random() * options.length)
  return options[compuerChoice]
}

function playOneRound(playerSelection, computerSelection) {
  let computerWins = 'Computer wins!'
  let playerWins = 'Player wins!'
  let tie = 'Tie!'
  
  player_lower_choice = playerSelection.toLowerCase()
  computer_lower_choice = computerSelection.toLowerCase()

  if (player_lower_choice === 'rock' && computer_lower_choice === 'scissors') {
    result = playerWins;
  } else if (player_lower_choice === 'paper' && computer_lower_choice === 'scissors') {
    result = computerWins; 
  } else if (player_lower_choice === 'scissors' && computer_lower_choice === 'scissors') {
    result = tie; 
  } 

  if (player_lower_choice === 'rock' && computer_lower_choice === 'rock') {
    result = tie;
  } else if (player_lower_choice === 'paper' && computer_lower_choice === 'rock') {
    result = playerWins; 
  } else if (player_lower_choice === 'scissors' && computer_lower_choice === 'rock') {
    result = computerWins; 
  } 

  if (player_lower_choice === 'rock' && computer_lower_choice === 'paper') {
    result = computerWins;
  } else if (player_lower_choice === 'paper' && computer_lower_choice === 'paper') {
    result = tie; 
  } else if (player_lower_choice === 'scissors' && computer_lower_choice === 'paper') {
    result = playerWins; 
  } 
  return result;
}


function game() {
  let computerWins = 'Computer wins!'
  let playerWins = 'Player wins!'
  let tie = 'Tie!'

  let player_score = 0
  let computer_score = 0

  for (let i = 0; i < 5; i++) {
    let playerChoice = prompt('Enter your selection (rock, paper, or scissors):');
    let computerChoice = getComputerChoice()
    result = playOneRound(playerChoice, computerChoice)
    console.log(result)
    if (result == computerWins) {
      computer_score++;
    } else if (result == playerWins) {
      player_score++;
    }
  }

  let outcome_string = ''
  if (computer_score > player_score) {
    outcome_string = computerWins;
  } else if (player_score > computer_score) {
    outcome_string = playerWins;
  } else outcome_string = tie

  console.log(`Computer score: ${computer_score} | Player score: ${player_score} | ${outcome_string}`)
}

// game()

