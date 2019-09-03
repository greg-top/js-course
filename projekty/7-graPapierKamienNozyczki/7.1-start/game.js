// Zobacz gotowy projekt: https://websamuraj.pl/examples/js/projekt7/

// stworzenie poczætkowych obiektów do przechowywania danych o stanie gry
const gameSumarry = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0
}

const game = {
    playerHand: null,
    aiHand: null
}

// funkcje gry
// 1 funkcja
function handSelection() {
    console.log(this); //odwołanie do klikniętego elementu. Słowo this nie działa poprawnie dla funkcji strzałkowej. Funkcja strzałkowa nie posiada własnej metody this, zostanie pobrana ona z obiektu window. W przypadku użycia funkcji strzałkowej można użyć metody target eventu (e.target) aby pobrać kliknięty element
    console.log(this.dataset.option); //pobranie niestandardowego atrybuty z elementu HTML
    game.playerHand = this.dataset.option;
    hands.forEach(hand => hand.style.boxShadow = '') //czyszczenie obramówka dla wszystkich elementów
    this.style.boxShadow = ' 0 0 0 4px red'; //nadanie obramowania klikniętemu elementowi
}

// 2 funkcja - wybór komputera
function aiChoice() {
    return hands[Math.floor(Math.random() * hands.length)].dataset.option; //wylosowanie ręki dla komputera
}

//ostatnia funkcja - sterująca grą
function startGame() {
    if (!game.playerHand) return alert('wybierz dłoń'); //wywołanie alertu i zakończenie funkcji
    game.aiHand = aiChoice();

    hands.forEach(hand => hand.style.boxShadow = '') //czyszczenie obramówka dla wszystkich elementów
}



// pobieranie wszystkich obrazków do gry - możliwe opcje: papier, nożyce, kamień i zamiana na tablicę
const hands = [...document.querySelectorAll('.select img')];
// console.log(hands);

//przebieg gry
hands.forEach((hand) => {
    hand.addEventListener('click', handSelection);
})

document.querySelector('.start').addEventListener('click', startGame);