let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let displaySum = document.querySelector(".sum");
let displayCards = document.querySelector(".cards");
let hasBlackjack = false;
let isAlive = true;
let message = "";
let messageParagraph = document.querySelector(".message");

function getRandomCard() {
    // J-Q-K(11-12-13): 10 and A(1): 11
    let randomCard = Math.floor((Math.random() * 13)  + 1);
    if(randomCard > 10) {
        return 10;
    } else if (randomCard === 1) {
        return 11;
    } else {
        return randomCard;
    }
}

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
    let thirdCard = getRandomCard();
    sum += thirdCard;
    cards.push(thirdCard)
    renderGame();
}
