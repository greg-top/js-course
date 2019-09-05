// Zobacz gotowy projekt: https://websamuraj.pl/examples/js/projekt7/
// stworzenie poczætkowych obiektów do przechowywania danych o stanie gry
const gameSummary = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0
}

const game = {
    playerHand: null,
    aiHand: null,
    result: null
}

// funkcje gry
// 1 funkcja
function handSelection() {
    //console.log(this); //odwołanie do klikniętego elementu. Słowo this nie działa poprawnie dla funkcji strzałkowej. Funkcja strzałkowa nie posiada własnej metody this, zostanie pobrana ona z obiektu window. W przypadku użycia funkcji strzałkowej można użyć metody target eventu (e.target) aby pobrać kliknięty element
    //console.log(this.dataset.option); //pobranie niestandardowego atrybuty z elementu HTML
    game.playerHand = this.dataset.option;
    hands.forEach(hand => hand.style.boxShadow = '') //czyszczenie obramówka dla wszystkich elementów
    this.style.boxShadow = ' 0 0 0 4px red'; //nadanie obramowania klikniętemu elementowi
}

// 2 funkcja - wybór komputera
function aiChoice() {
    return hands[Math.floor(Math.random() * hands.length)].dataset.option; //wylosowanie ręki dla komputera
}

//3 funkcja - sprawdzenie wyniku
function checkResult(player, ai) {
    //console.log(`player: ${player}`);
    //console.log(`ai: ${ai}`);

    if (player === ai) {
        //console.log('remis');
        return 'draw';
    } else if ((player === 'papier' && ai === 'kamień') || (player === 'kamień' && ai === 'nożyczki') || (player === 'nożyczki') && ai === 'papier') {
        //console.log('wygrałeś');
        return 'win';
    } else {
        //console.log('przegrałeś');
        return 'loss';
    }
    //console.log('=====================');
}

// 4 funkcja - pubblikacja wyniku
function publishResult(player, ai, result) {
    //wyniki gry - lewy panel
    document.querySelector('[data-summary="your-choice"]').textContent = player; //pobranie elementu za pomocą atrybutu
    document.querySelector('[data-summary="ai-choice"]').textContent = ai;
    switch (result) {
        case 'draw':
            ++gameSummary.draws;
            document.querySelector('[data-summary="who-win"]').textContent = 'Remis';
            document.querySelector('[data-summary="who-win"]').classList.remove('win');
            document.querySelector('[data-summary="who-win"]').classList.remove('loss');
            document.querySelector('[data-summary="who-win"]').classList.add('draw');
            break;
        case 'win':
            ++gameSummary.wins;
            document.querySelector('[data-summary="who-win"]').textContent = 'Użytkownik';
            document.querySelector('[data-summary="who-win"]').classList.remove('draw');
            document.querySelector('[data-summary="who-win"]').classList.remove('loss');
            document.querySelector('[data-summary="who-win"]').classList.add('win');
            break;
        case 'loss':
            ++gameSummary.losses;
            document.querySelector('[data-summary="who-win"]').textContent = 'Komputer';
            document.querySelector('[data-summary="who-win"]').classList.remove('win');
            document.querySelector('[data-summary="who-win"]').classList.remove('draw');
            document.querySelector('[data-summary="who-win"]').classList.add('loss');
    }
    //aktualne wyniki - prawy panel
    document.querySelector('.numbers span').textContent = ++gameSummary.numbers;
    document.querySelector('.wins span').textContent = gameSummary.wins;
    document.querySelector('.losses span').textContent = gameSummary.losses;
    document.querySelector('.draws span').textContent = gameSummary.draws;
}

//5 - funkcja czyszcząca wybór użytkownika
function finishRound() {
    game.playerHand = null;
    game.aiHand = null;
    hands.forEach(hand => hand.style.boxShadow = ''); //czyszczenie obramówka dla wszystkich elementów
}

//ostatnia funkcja - sterująca grą
function startGame() {
    if (!game.playerHand) return alert('wybierz dłoń'); //wywołanie alertu i zakończenie funkcji
    game.aiHand = aiChoice();
    game.result = checkResult(game.playerHand, game.aiHand);
    //console.log(game.result);
    publishResult(game.playerHand, game.aiHand, game.result); //tą funkcję chcemy tylko wywołać
    finishRound();
}



// pobieranie wszystkich obrazków do gry - możliwe opcje: papier, nożyce, kamień i zamiana na tablicę
const hands = [...document.querySelectorAll('.select img')];
// console.log(hands);

//przebieg gry
hands.forEach((hand) => {
    hand.addEventListener('click', handSelection);
})

document.querySelector('.start').addEventListener('click', startGame);