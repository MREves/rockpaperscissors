
function getComputerChoice() {
  // Function to get the random choice from the computer
  let options = Array('Rock', 'Paper', 'Scissors')
  let compuerChoice = Math.floor(Math.random() * options.length)
  return options[compuerChoice]
}

function playOneRound(playerSelection, computerSelection) {
  // Function to play one round of rock paper scissors 
  let computerWins = 'Computer wins!'
  let playerWins = 'Player wins!'
  let tie = 'Tie!'
  
  player_lower_choice = playerSelection.toLowerCase()
  computer_lower_choice = computerSelection.toLowerCase()

  if (player_lower_choice === computer_lower_choice) {
    result = tie;
  } else if (player_lower_choice === 'paper' && computer_lower_choice === 'scissors') {
    result = computerWins; 
  } else if (player_lower_choice === 'rock' && computer_lower_choice === 'scissors') {
    result = playerWins; 
  } else if (player_lower_choice === 'paper' && computer_lower_choice === 'rock') {
    result = playerWins; 
  } else if (player_lower_choice === 'scissors' && computer_lower_choice === 'rock') {
    result = computerWins; 
  } else if (player_lower_choice === 'rock' && computer_lower_choice === 'paper') {
    result = computerWins;
  } else if (player_lower_choice === 'scissors' && computer_lower_choice === 'paper') {
    result = playerWins; 
  } 

  return result;
  }

function calculateResult(player_score, computer_score) {
  // helper function to determine the winner and return a string outlining the results
  let computerWins = 'Computer wins!'
  let playerWins = 'Player wins!'
  let tie = 'Tie!'

  let outcome_string = ''
  if (computer_score > player_score) {
    outcome_string = computerWins;
  } else if (player_score > computer_score) {
    outcome_string = playerWins;
  } else outcome_string = tie

  results_message = `Computer score: ${computer_score} | Player score: ${player_score} | ${outcome_string}`

  return results_message
}


function game(number_of_games) {
  // Function to play n number of games of rock paper scissors, where n is the argument passed into game()
  
  // string to indicate the result, and allow cumulative scores based on the result of each single game
  let computerWins = 'Computer wins!'
  let playerWins = 'Player wins!'
  // running scores for player and computer
  let player_score = 0
  let computer_score = 0

  // loop over number_of_games and play that number of rounds. Increment the above score for the winner.
  for (let i = 0; i < number_of_games; i++) {
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

  // call helper function to generate the results message
  results_message = calculateResult(player_score, computer_score)
  console.log(results_message)

  }



