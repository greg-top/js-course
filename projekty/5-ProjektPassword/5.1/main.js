const input = document.querySelector('#pass');

//zdarzenia dla INPUT
//zdarzenie keyup
// input.addEventListener('keyup', (e) => {
//     console.log(e.target.value); //target - zwraca obiekt na którym zostało wykonane zdarzenie
// })

// //zdarzenie input
// input.addEventListener('input', (e) => {
//     console.log(e.target.value); //target - zwraca obiekt na którym zostało wykonane zdarzenie
// })

//zdarzenie change - zdarzenie zadziała jak zmienimy zawartość input i wyjdziemy z niego (np. klikając na inny element strony)
// input.addEventListener('change', (e) => {
//     console.log(e.target.value);

// })

//zadanie
const password = "user";
const message = "Wyjechałam na wakacje"
const div = document.querySelector('.message');
const button = document.querySelector('button');
let flagShow = true;

input.addEventListener('focus', (e) => {
    e.target.classList.add('active');
})
//zdarzenie focusout działa na tej samej zasadzie jak zdarzenie blur
// input.addEventListener('focusout', (e) => {
//     e.target.classList.remove('active');
// })
input.addEventListener('blur', (e) => {
    e.target.classList.remove('active');
})

// input.addEventListener('input', (e) => {
//     // console.log(e.target.value);
//     if (password === e.target.value) {
//         div.textContent = message;
//         e.target.value = '';
//     } else {
//         div.textContent = '';
//     }
// })

button.addEventListener('click', (e) => {
    // console.log('klik');
    if (input.value) {
        if (flagShow) {
            e.target.textContent = 'conceal';
            input.setAttribute('type', 'text');
            flagShow = !flagShow;
        } else {
            e.target.textContent = 'reveal';
            input.setAttribute('type', 'password');
            flagShow = !flagShow;
        }
    }
})

//różnica między funkcją deklarowaną a funkcją strzałkową
//funkcja strzałkowa nie posiada własnej właściwości THIS, ale dziedziczy ją z obiektu globalnego. W tym przykładzie THIS będzie wskazywał na obiekt nadrzędny WINDOW który nie ma właściwości VALUE
input.addEventListener('input', (element) => {
    console.log(element.target.value);
    console.log(this.value); //brak wartości Value dla obieku Window
    console.log(element.target);
    console.log(this); //wskaże obiekt Window
})