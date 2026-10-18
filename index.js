function logInteraction(message) {
  const activityLog = document.getElementById('activity-log')

  if (activityLog) {
    activityLog.textContent = `Latest Activity: ${message}`
  }
}

function changeBackgroundColor() {
  const red = Math.floor(Math.random() * 256)
  const green = Math.floor(Math.random() * 256)
  const blue = Math.floor(Math.random() * 256)

  document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
  logInteraction(`Changed background color to rgb(${red}, ${green}, ${blue})`)
}

function resetBackgroundColor() {
  document.body.style.backgroundColor = ''
  logInteraction('Reset background color')
}

function displayKeyPress(event) {
  const keyDisplay = document.getElementById('keyPressDisplay')

  if (keyDisplay) {
    keyDisplay.textContent = `Key pressed: ${event.key}`
  }
  logInteraction(`Pressed key: "${event.key}"`)
}

function displayUserInput() {
  const textField = document.getElementById('textInput')
  const inputDisplay = document.getElementById('textInputDisplay')

  if (textField && inputDisplay) {
    inputDisplay.textContent = `You typed: ${textField.value}`
    logInteraction(`Typed: "${textField.value}"`)
  }
}

function setupEventListeners() {
  const changeColorButton = document.getElementById('changeColorButton')
  const resetColorButton = document.getElementById('resetColorButton')
  const textField = document.getElementById('textInput')

  if (changeColorButton) {
    changeColorButton.removeEventListener('click', changeBackgroundColor)
    changeColorButton.addEventListener('click', changeBackgroundColor)
  }

  if (resetColorButton) {
    resetColorButton.removeEventListener('dblclick', resetBackgroundColor)
    resetColorButton.addEventListener('dblclick', resetBackgroundColor)
  }

  document.removeEventListener('keydown', displayKeyPress)
  document.addEventListener('keydown', displayKeyPress)

  if (textField) {
    textField.removeEventListener('input', displayUserInput)
    textField.addEventListener('input', displayUserInput)
  }
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupEventListeners)
  } else {
    setupEventListeners()
  }
}

if (typeof module !== 'undefined') {
  module.exports = {
    changeBackgroundColor,
    resetBackgroundColor,
    displayKeyPress,
    displayUserInput,
    setupEventListeners,
  }
}
