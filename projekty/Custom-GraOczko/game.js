// http://www.jak-to-zrobic.pl/index.php/a/3/b/11/c/49/d/145/id/931

//initial game settings
const cardFigures = [
    'ace',
    'king',
    'queen',
    'jack',
    'ten',
    'nine'
];

const cardScores = [
    11,
    4,
    3,
    2,
    10,
    9
];

const cardColors = [
    'hearts',
    'diamonds',
    'spades',
    'clubs'
];

const game = {
    round: null,
    score: null
}

const card = {
    figure: null,
    color: null,
    score: null,
    imageTitle: null
};

const firstPlayer = {
    score: null,
    isTurn: true
}

const secondPlayer = {
    score: null,
    isTurn: false
}

//how to play window
const howToPlayCloseBtn = document.querySelector('.close-btn');
const howToPlayContainer = document.querySelector('.how-to-play');
const gameInfoBtn = document.querySelector('.info-btn');

howToPlayCloseBtn.addEventListener('click', () => {
    howToPlayContainer.classList.add('hidden');
    gameInfoBtn.classList.remove('hidden');
});

gameInfoBtn.addEventListener('click', () => {
    howToPlayContainer.classList.remove('hidden');
    gameInfoBtn.classList.add('hidden');
});

// functionality
function randomCard() {
    // console.log('losowanie karty');
    cardFigureIndex = Math.floor(Math.random() * cardFigures.length);
    card.figure = cardFigures[cardFigureIndex];
    // console.log(card.figure);
    card.color = cardColors[Math.floor(Math.random() * cardColors.length)];
    // console.log(card.color);
    card.score = cardScores[cardFigureIndex];
    // console.log(card.score);
    card.imageTitle = `${card.color}_${card.figure}`;
    // console.log(card.imageTitle);

    return card;
}

function showCard(card) {
    // console.log(`firstCard`);
    // console.log(card);
    // TODO: update index of the card with Game round
    // console.log(document.querySelector('[data-card="1"]'));
    game.round++;


    document.querySelector(`[data-card="${game.round}"]`).src = `src/images/cards/${card.imageTitle}.png`;
    document.querySelector(`[data-card="${game.round}"]`).classList.remove('hidden');

}

function startGame() {
    // console.log('start gry');
    startButton.classList.add('hidden');
    stopRoundButton.classList.remove('hidden');
    const firstCard = randomCard(); //this is local variable to store info about first card, remember to pass it to another function
    // console.log(firstCard);
    showCard(firstCard);

}

//start Game
const startButton = document.querySelector('.start-btn');
const stopRoundButton = document.querySelector('.end-player-round');
const nextCard = document.querySelector('.stock');
startButton.addEventListener('click', startGame);