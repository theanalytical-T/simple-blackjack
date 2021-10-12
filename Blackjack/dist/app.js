let firstCard = 5
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let emojiEl = document.getElementById("emoji-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")
// console.log(sum)

function startGame() {
    renderGame()
}

function renderGame() {
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
        emoji = "😊"
    } else if (sum === 21) {
        message = "Yay! You've got Blackjack!"
        emoji = "🥳"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        emoji = "😭"
        isAlive = false
    }

    messageEl.textContent = message
    emojiEl.textContent = emoji

}

function newCard() {
    console.log("Drawing a new card from the deck!")
    // cardsEl.textContent = "Cards: " + firstCard + " " + secondCard + " " + card
    let card = 3
    sum += card
    renderGame()
}

// let age = 22

// if (age <= 20) {
//     console.log("You can not enter the club!")
// } else {
//     console.log("Welcome!")
// }

// let age = 100

// if (age <= 99) {
//     console.log("Not eligible")
// } else if (age === 100) {
//     console.log("Here is your birthday card from the King!")
// } else {
//     console.log("Not eligible, you have already gotten one.")
// }

