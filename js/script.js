const startField = document.querySelector('.start-field')

document.getElementById('chooseButton').addEventListener('click', function () {
  document.getElementById('popup').style.display = 'flex'
  startField.style.display = 'none'
})

document.getElementById('optionX').addEventListener('click', function () {
  saveToLocalStorage('X')
  closePopup()
  window.location.href = '/pages/game.html'
})

document.getElementById('optionO').addEventListener('click', function () {
  saveToLocalStorage('O')
  closePopup()
  window.location.href = '/pages/game.html'
})

function saveToLocalStorage(value) {
  localStorage.setItem('playerOneChoise', value)
}

function closePopup() {
  document.getElementById('popup').style.display = 'none'
}
