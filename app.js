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
let cards = [firstCard, secondCard] //array - an ordered list of items

// console.log(sum)

function startGame() {
    renderGame()
}

function renderGame() {
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]

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

let featuredPost = [
    "Check out my Netflix clone",
    "Here's the code for my project",
    "I've just relaunched my portfolio"
]

let myStats = [
    "Junior Software Developer",
    "Bachelor's Degree in Computer Science",
    "Microsoft Office Excel Specialist",
    "Critical Thinker"
]

let cards = [7, 4]
cards.push(6) //the .push allows js to "push" items onto the array attached
console.log cards // 7, 4, 6

let messages = [
    "Hey, how's it going?",
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately."
]

let newMessage = "Same here!"

messages.push(newMessage)

console.log(messages)

messages.pop()

console.log(messages)

