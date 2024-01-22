let cell = document.querySelectorAll('.cell')
let currentPlayer = document.querySelector('.info__current-player')

let isWin = true
// Вибір гравця 1 З LOCAL STORAGE
let playerValue = localStorage.getItem('playerOneChoise')
let winner = localStorage.getItem('winner')
let inProgres = false

let resultsStr = localStorage.getItem('results')
console.log(JSON.parse(resultsStr))

let results = {}

if (resultsStr !== null) {
  results = JSON.parse(resultsStr)
} else {
  results = {
    X: 0,
    O: 0,
    d: 0,
  }
}

currentPlayer.innerHTML = playerValue.toLocaleUpperCase()

//Виграшні комбінації
const winPatterns = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9], // горизонталі
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9], // вертикалі
  [1, 5, 9],
  [3, 5, 7], // діагоналі
]

// Функція: Перевірка на виграш
function checkWin(data) {
  for (let i in winPatterns) {
    isWin = true
    for (let j in winPatterns[i]) {
      let id = winPatterns[i][j]
      let ind = data.indexOf(id)
      if (ind == -1) {
        isWin = false
      }
    }
    if (isWin) {
      return true
    }
  }
  return false
}

// Функція рестарту гри
function restartGame(text) {
  console.log(text)
  playerValue = localStorage.getItem('playerOneChoise')
  for (let i = 0; i < cell.length; i++) {
    cell[i].innerHTML = ''
  }
  inProgres = false
  window.location.href = './results.html'
}

// Функція: клік миші по комірці
function cellClick() {
  inProgres = true
  let data = []

  if (!this.innerHTML) {
    this.innerHTML = playerValue
  } else {
    console.log('not empty cell')
    return
  }
  cell.forEach((cell) => {
    if (cell.innerHTML === playerValue) {
      data.push(parseInt(cell.dataset.value))
    }
  })
  if (checkWin(data)) {
    results[playerValue] += 1
    localStorage.setItem('winner', playerValue)
    console.log(playerValue)
    restartGame('Виграв: ' + playerValue)
  } else {
    let draw = true
    for (let i in cell) {
      if (cell[i].innerHTML == '') draw = false
    }
    if (draw) {
      results.d += 1
      restartGame('Це нічия!')
    }
  }

  if (playerValue === 'O') {
    currentPlayer.innerHTML = 'X'
  }
  if (playerValue === 'X') {
    currentPlayer.innerHTML = 'O'
  }

  localStorage.setItem('results', JSON.stringify(results))

  console.log(playerValue)
  if (playerValue === 'X' && inProgres) {
    playerValue = 'O'
  } else if (playerValue === 'O' && inProgres) {
    playerValue = 'X'
  }
}

cell.forEach((item) => {
  item.addEventListener('click', cellClick)
})
