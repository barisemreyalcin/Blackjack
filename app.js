let firstCard = Math.floor((Math.random() * 10)  + 2);
let secondCard = Math.floor((Math.random() * 10)  + 2);
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let displaySum = document.querySelector(".sum");

let displayCards = document.querySelector(".cards");

let hasBlackjack = false;
let isAlive = true;

let message = "";
let messageParagraph = document.querySelector(".message");

function startGame(){
    renderGame();
}

function renderGame(){
    displaySum.textContent = "Sum: " + sum;
    displayCards.textContent = "Cards: "

    for(let i = 0; i < cards.length; i++) {
        displayCards.textContent += cards[i] + " ";
    }

    if(sum < 21) {
        message = "Wanna draw one new card?";
    } else if (sum === 21) {
        message = "You have got Blackjack!";
        hasBlackjack = true;
    } else {
        message = "You are out of the game...";
        isAlive = false;
    }
    
    messageParagraph.textContent = message;
}

function newCard(){
    let thirdCard = Math.floor((Math.random() * 10)  + 2);
    sum += thirdCard;
    cards.push(thirdCard)
    renderGame();
}
