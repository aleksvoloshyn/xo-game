let playerOne = localStorage.getItem('playerOneChoise')
let winner = localStorage.getItem('winner')
let info__winner = document.querySelector('.info__winnerr')

let playerOneTotal = document.getElementById('player1-score')
let playerTwoTotal = document.getElementById('player2-score')

let resultsStr = JSON.parse(localStorage.getItem('results'))

let oneMoreTimeButton = document.querySelector('.button-more')
let stopGame = document.querySelector('.button-stop')

// console.log('winner:' + ' ' + winner)
// console.log('player:' + ' ' + playerOne)

if (playerOne === winner) {
  info__winner.innerHTML = 1
}
if (playerOne !== winner) {
  info__winner.innerHTML = 2
}

let keys = Object.keys(resultsStr)
let values = Object.values(resultsStr)

if (playerOne === keys[0]) {
  playerOneTotal.innerHTML = values[0]
  playerTwoTotal.innerHTML = values[1]
}
if (playerOne === keys[1]) {
  playerOneTotal.innerHTML = values[1]
  playerTwoTotal.innerHTML = values[0]
}

const playAgainHandler = () => {
  window.location.href = './game.html'
}

const stopGameHandler = () => {
  localStorage.setItem(
    'results',
    JSON.stringify({
      X: 0,
      O: 0,
      d: 0,
    })
  )
  localStorage.removeItem('playerOneChoise')
  localStorage.removeItem('winner')
  window.location.href = './../index.html'
}

oneMoreTimeButton.addEventListener('click', playAgainHandler)
stopGame.addEventListener('click', stopGameHandler)
