//cntrl+d to write repetitive code in multiple spots

let firstCard = getRandomCard()
let secondCard = getRandomCard()
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let emojiEl = document.getElementById("emoji-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")
let cards = [firstCard, secondCard] //array - an ordered list of items

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1

    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    // Generate two random numbers
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    // Re-assign the cards and sum variables so that the game can start
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum

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
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
}

// let cards = [7, 4]
// cards.push(6) //the .push allows js to "push" items onto the array attached
// console.log cards // 7, 4, 6

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

// let featuredPost = [
//     "Check out my Netflix clone",
//     "Here's the code for my project",
//     "I've just relaunched my portfolio"
// ]

//console.log(featuredPost[1])
//console.log(featuredPost[2])
//console.log(featuredPost[0])
//console.log(featuredPosts.length) = 3

// let myStats = [
//     "Junior Software Developer",
//     "Bachelor's Degree in Computer Science",
//     "Microsoft Office Excel Specialist",
//     "Critical Thinker"
// ]

// for (let i = 0; i <= myStats.length; i++) {
//     console.log(myStats[i])
// }

// let sentence = ["Hello ", "my ", "name ", "is ", "Per"]
// let greetingEl = document.getElementById("greeting-el")

// Render the sentence in the greetingEl paragraph using a for loop and .textContent

// for (let i = 0; i < sentence.length; i++) {
//     greetingEl.textContent += sentence[i]
// }

// let messages = [
//     "Hey, how's it going?",
//     "I'm great, thank you! How about you?",
//     "All good. Been working on my portfolio lately."
// ]

// let newMessage = "Same here!"

// messages.push(newMessage)

// console.log(messages)

// messages.pop()

// console.log(messages)

