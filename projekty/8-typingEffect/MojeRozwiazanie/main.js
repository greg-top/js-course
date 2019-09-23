// http://websamuraj.pl/examples/js/projekt8/
// Uzyskaj efekt jak pod tym linkiem 
// Użyj setTimeout zamiast setInterval,
// Opóźniej start pisanie każdego słowa
// Uwaga: Zadanie bardzo trudne

const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = ['Cześć Bob', 'Jak się masz Bob', 'Co słychać Bob'];

// utworzenie 2 zmiennych do odwołania się do tablicy z tekstem
let activeLetter = 0;
let activeText = 0;
let firstText = true;

// Implementacja
const addLetter = () => {
    // Użyj w środku setTimeout

    if (firstText) return setTimeout(() => { //ustawienie funkcji setTimeout rzy pierwszym wczytywaniu slowa z tablicy text z użyciem flagi
        addLetter();
        firstText = false;
    }, 1000);
    spnText.textContent += txt[activeText][activeLetter];
    activeLetter++;
    if (activeLetter === txt[activeText].length) {
        activeText++;
        if (activeText === txt.length) return; //zatrzymanie działania funkcji addLetter gdy tablica txt nie posiada więcej indeksów do wyświetlenia

        return setTimeout(() => { //zatrzymanie działania funkcji addLetter na 2s
            activeLetter = 0;
            spnText.textContent = '';
            addLetter(); //funkcja addLetter musi być znowu wywołana
        }, 2000);

    }
    setTimeout(addLetter, 100);
}


addLetter(); //pierwsze wywołanie


// Animacja kursora (zostaw bez zmian)
const cursorAnimation = () => {
    spnCursor.classList.toggle('active');
}
setInterval(cursorAnimation, 400);