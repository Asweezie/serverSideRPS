document.querySelector('#button').addEventListener('click', rpsGame)

async function rpsGame() {
    const res = await fetch ('/api?')
    const data = await res.json()
    let playerChoice = document.querySelector('#choice').value
    let botChoice = data.rpsResults
    let results = document.querySelector('#result')

    if (playerChoice == 'rock' && botChoice == 'paper') results.textContent = `You lose. Bot chose ${botChoice}`
    else if (playerChoice == 'rock' && botChoice == 'scissors') results.textContent = `You win. Bot chose ${botChoice}`
    else if (playerChoice == 'paper' && botChoice == 'rock') results.textContent = `You win. Bot chose ${botChoice}`
    else if (playerChoice == 'paper' && botChoice == 'scissors') results.textContent = `You lose. Bot chose ${botChoice}`
    else if (playerChoice == 'scissors' && botChoice == 'rock') results.textContent = `You lose. Bot chose ${botChoice}`
    else if (playerChoice == 'scissors' && botChoice == 'paper') results.textContent = `You win. Bot chose ${botChoice}`
    else if (playerChoice == 'scissors' && botChoice == 'scissors') results.textContent = `Draw! Bot also chose ${botChoice}`
    else if (playerChoice == 'rock' && botChoice == 'rock') results.textContent = `Draw! Bot also chose ${botChoice}`
    else if (playerChoice == 'paper' && botChoice == 'paper') results.textContent = `Draw! Bot also chose ${botChoice}`
    else results.textContent = 'Please enter a valid choice!'
}

