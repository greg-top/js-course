const spnText = document.querySelector('.text');
const txt = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam maxime praesentium asperiores sint magni eum placeat cum fugit itaque illum.';
const cursor = document.querySelector('.cursor');

//Parametry
let indexText = 0;
const time = 40;

//Implementacja
const addLetter = () => {
    // console.log('ok');
    spnText.textContent += txt[indexText];
    indexText++;
    if (indexText >= txt.length) clearInterval(indexTyping); //uzycie indexu funkcji setInterval do przerwania jej działania po spełnieniu warunku
}

const toggleCursor = function () {
    cursor.classList.toggle('hidden');
}

const indexTyping = setInterval(addLetter, time); //funkcja setInterval zwraca swoj index, przydatne do zatrzymania działania funkcji
setInterval(toggleCursor, time * 15); //animacja kursora ma się nie kończyć więc nie musimy przypisywać indexu funkcji setInterval do zmiennej