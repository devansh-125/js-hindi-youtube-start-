let randomNumber = parseInt(Math.random() * 100 + 1) 
const userInput = document.querySelector('#guessField')
const submit = document.querySelector('#subt')
const guessSlot = document.querySelector('.guesses')
const guessRem = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')

const startOver = document.querySelector('.resultParas')

let preguesses = []
let numGuess = 1
let playGame = true

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault()
    const guess = parseInt(userInput.value)
    ValidateGuesses(guess)
  })
}

function ValidateGuesses(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number')
    userInput.value = ''
  } else if (guess < 1) {
    alert('Please enter a number more than one')
    userInput.value = ''
  } else if (guess > 100) {
    alert('Please enter a number less than 100')
    userInput.value = ''
  } else {
    if (numGuess === 11) {
      displayGuess(guess)
      displayMessage(`Game Over! Random Number was ${randomNumber}`)
      endGame()
    } else {
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`🎉 You guessed the correct number!`)
    endGame()
  } else if (guess < randomNumber) {
    displayMessage('Number is too low')
  } else if (guess > randomNumber) {
    displayMessage('Number is too high')
  }
}

function displayGuess(guess) {
  userInput.value = ''
  guessSlot.innerHTML += `${guess} `
  numGuess++
  guessRem.innerHTML = `${11 - numGuess}`
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
  userInput.value = ''
  userInput.setAttribute('disabled', '')
  submit.setAttribute('disabled', '')

  // create new button
  const p = document.createElement('p')
  p.classList.add('button')
  p.innerHTML = `<button id="newGame">Start New Game</button>`
  startOver.appendChild(p)

  playGame = false

  newGame()
}

function newGame() {
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click', function () {
    // reset values
    randomNumber = parseInt(Math.random() * 100 + 1)
    preguesses = []
    numGuess = 1
    guessSlot.innerHTML = ''
    guessRem.innerHTML = '10'
    lowOrHi.innerHTML = ''

    // enable input again
    userInput.removeAttribute('disabled')
    submit.removeAttribute('disabled')

    // remove new game button
    const button = document.querySelector('.button')
    startOver.removeChild(button)

    playGame = true
  })
}
