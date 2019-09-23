//Typing effect with showing and removing letters

const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
// const txt = ["Hi, my name is gReg", "I'm front-end developer", "And I really enjoy this typing effect exercise :)"];
const txt = ["Powiedz cześć Bob!!", "Nie, nie, teraz jest Filipek a nie Bob", "Dobrze, to powiedz cześć Filipek", "Cześć Asiulka, Grzesio i Ptysia :)"];

//ustawienie początkowych wartości litery i słowa
let activeLetter = 0;
let activeWord = 0;

//ustawienie czasu (ms)
const addLetterSpeed = 200;
const removeLetterSpeed = 50;
const firstWordDelay = 1500;
const nextWordDelay = 2000;
const cursorAnimationTime = 400;

//ustawienie flagi dla pierwszego słowa w celu opóźnienia pisania pierwszego słowa
let isFirstWord = true;
//ustawienie flagi dla ostatniego słowa w celu zatrzymania programu przed wymazaniem ostatniego słowa
let lastWord = false;

// Implementacja
//wymazanie liter aktualnego słowa
const removeLetter = () => {
    if (lastWord) return;
    spnText.textContent = spnText.textContent.substring(0, spnText.textContent.length - 1);
    activeLetter--;
    //zatrzymanie wykonywania funkcji po usunięciu wszystkich liter słowa i uruchomienie funkcji addLetter dla kolejnego słowa
    if (activeLetter <= 0) {
        return setTimeout(() => {
            activeWord++;
            if (activeWord === txt.length - 1) {
                lastWord = true;
            };
            addLetter();
        }, nextWordDelay);
    }
    setTimeout(removeLetter, removeLetterSpeed);
}

// Dodawanie liter aktualnego słowa
const addLetter = () => {
    //opóźnienie wykonania pisania pierwszego zdania poprzez użycie flagi
    if (isFirstWord) {
        return setTimeout(() => {
            isFirstWord = false;
            addLetter();
        }, firstWordDelay);
    }

    spnText.textContent += txt[activeWord][activeLetter]; //wyświetlanie kolejnych liter aktywnego zdania

    activeLetter++; //zwiększenie indeksu activeLetter

    //zatrzymanie wykonywania funkcji po wypisaniu wszystkich liter aktualnego zdania i uruchomienie funkcji removeLetter dla aktualnego zdania
    if (activeLetter === txt[activeWord].length) {
        // console.log(`lastWord: ${lastWord}`);
        if (lastWord) {
            console.log('Ostatnie zdanie zostało wypisane - koniec programu!');
            return;
        };
        return setTimeout(() => {
            removeLetter();
        }, nextWordDelay);
    }

    setTimeout(addLetter, addLetterSpeed); //funkcja setTimeout uruchomi kolejną funkcje addLetter z  opóźnieniem
}

addLetter(); //pierwsze wywołanie


// Animacja kursora 
const cursorAnimation = () => {
    spnCursor.classList.toggle('active');
}
setInterval(cursorAnimation, cursorAnimationTime);