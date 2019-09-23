// http://websamuraj.pl/examples/js/projekt8/
// Uzyskaj efekt jak pod tym linkiem 
// Użyj setTimeout zamiast setInterval,
// Opóźniej start pisanie każdego słowa
// Uwaga: Zadanie bardzo trudne

const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = ['tekst1', 'tekst2', 'tekst3'];

//ustawienie początkowych wartości litery i słowa
let activeLetter = 0;
let activeWord = 0;

//ustawienie flagi dla pierwszego słowa dla timeouta na sam start
let isFirstWord = true;

// Implementacja
const addLetter = () => {
    // Użyj w środku setTimeout

    //zatrzymanie wykonania pisania pierwszego słowa poprzez użycie flagi
    if (isFirstWord) {
        return setTimeout(() => {
            isFirstWord = false;
            addLetter();
        }, 1500);
    }

    spnText.textContent += txt[activeWord][activeLetter]; //wyświetlanie napisu poprzez dodawanie kolejnych liter

    activeLetter++; //zwiększenie indeksu activeLetter

    //zatrzymanie wykonywania funkcji po wypisaniu wszytskich liter słowa, zwiększenie indeksu słowa i uruchomienie funkcji addLeter dla nowego słowa
    if (activeLetter === txt[activeWord].length) {
        return setTimeout(() => {
            activeWord++;
            if (activeWord === txt.length) return; //zatrzymanie działania programu gdy zużyjemy wszystkie słowa z tablicy txt, ważne jest zatrzymanie działania programu zanim wyzerujemy zawartość spnText!
            activeLetter = 0;
            spnText.textContent = '';
            addLetter();
        }, 2000);
    }
    setTimeout(addLetter, 250); //funkcja setTimeout uruchomi kolejną funkcje addLetter z 250ms opóźnieniem
}

addLetter(); //pierwsze wywołanie


// Animacja kursora (zostaw bez zmian)
const cursorAnimation = () => {
    spnCursor.classList.toggle('active');
}
setInterval(cursorAnimation, 400);