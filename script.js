var round = 1
var playerScore = 0
var computerScore = 0
var result = document.getElementById("result")
var roundText = document.getElementById("round")
var playerScoreText = document.getElementById("playerscore")
var computerScoreText = document.getElementById("computerscore")




// action
document.getElementById("rock").onclick = () => {
      playRound("rock")
}
document.getElementById("paper").onclick = () => {
     playRound("paper")
  }
document.getElementById("scissors").onclick = () => {
    playRound("scissors")
}
document.getElementById("reset").onclick = () => {
    reseter()
}

//reset
function reseter() {
  round = 1
  playerScore = 0
  computerScore = 0
  roundText.innerHTML = ``
  result.textContent = ``
  playerScoreText.textContent = ``
  computerScoreText.textContent = ``
}

//Computer choice
function computerPlay() {
  var pc = Math.random()

  switch(true) {
  case (pc > .6):
  return "rock"
  break
  case (pc > .3):
  return "paper"
  break
  case (pc < .3):
  return "scissors"
  break
  }
}
//game
function playRound(player) {
  playerScoreText.innerHTML = `player: ${playerScore}`
  computerScoreText.innerHTML = `computer: ${computerScore}`

  roundText.innerHTML = `<br><u>round: ${round} <br>`
  let computer = computerPlay()


  switch (true) {
    case (round > 5 && playerScore > computerScore):
    roundText.innerHTML = `<br><u>FINAL<br>`
    result.textContent = "YOU WON"
    break
    case (round > 5 && playerScore < computerScore):
    roundText.innerHTML = `<br><u>FINAL<br>`
    result.textContent = "YOU LOST"
    break
    case (round > 5 && playerScore === computerScore):
    roundText.innerHTML = `<br><u>FINAL<br>`
    result.textContent = "TIE"
    break
    case (player === computer):
    ++round
    result.textContent = `you both chose ${player}. tie!`
    break
    case (player === "rock" && computer === "scissors"):
    case (player === "scissors" && computer === "paper"):
    case (player === "paper" && computer === "rock"):
    ++round
    ++playerScore
    result.textContent =  `you win: ${player} beats ${computer}!`
    break
    case (player ==="scissors" && computer === "rock"):
    case (player ==="paper" && computer === "scissors"):
    case (player === "rock" && computer === "paper"):
    ++round
    ++computerScore
    result.textContent =  `you lose: ${computer} beats ${player}!`
    break

}

}
