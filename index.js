// let firstcard = 6

// let secondcard = 15

// let sum = firstcard + secondcard

// let hasBlackJack = false

// let isAlive  = true

// let massage = ""

// let outp = document.getElementById("message-el")




// function startGame(){

  

//     if (sum < 20){
//         massage = ("Do you want to draw a new card? 🙂")
        
//     }
//     else if (sum === 21){
//         massage = ("Wohoo! You've got Blackjack! 🥳")
//         hasBlackJack = true
//     }else {
//         massage = ("You're out of the game! 😭")
//         isAlive = false
//     }
    
//     // console.log(hasBlackJack)
//     // console.log(isAlive)
//     outp.textContent = mssage
//     // console.log(massage)

// }

// startGame()




function startGame() {
    let firstCard = 10
let secondCard = 4
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
 
// 1. Store the message-el paragraph in a variable called messageEl

let messageEl = document.getElementById("message-el")

// let  sumEl  = document.getElementById("sum-el")

let  sumEl  = document.querySelector("#sum-el")

let cardsEl = document.querySelector("#cards-el")

cardsEl.textContent = "cards: " + firstCard +" " + secondCard
sumEl.textContent =  "Sum::" + sum 

    if (sum <= 20) {
        message = "Do you want to draw a new card? "
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! "
        hasBlackJack = true
    } else {
        message = "You're out of the game! "
        isAlive = false
    }
    // 2. Display the message in the messageEl using messageEl.textContent
    messageEl.textContent = message
}
