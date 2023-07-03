let cards = [];
let sum = 0;
let displaySum = document.querySelector(".sum");
let displayCards = document.querySelector(".cards");
let hasBlackjack = false;
let isAlive = false;
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
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard()
    sum = firstCard + secondCard;
    cards = [firstCard, secondCard];
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
    if(isAlive === true && hasBlackjack === false) {
        let newCard = getRandomCard();
        sum += newCard;
        cards.push(newCard);
        renderGame();
    }
};


