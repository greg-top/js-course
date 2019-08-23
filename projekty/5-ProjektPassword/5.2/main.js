const input = document.querySelector('#pass');

//zadanie z użyciem tablicy
const passwords = ["user", "wiosna", "Ania"];
const messages = ["Wyjechałam na wakacje", "piękna pora roku", "fajny styl masz"];
const div = document.querySelector('.message');
const button = document.querySelector('button');
let flagShow = true;

input.addEventListener('focus', (e) => {
    e.target.classList.add('active');
})
input.addEventListener('blur', (e) => {
    e.target.classList.remove('active');
})

button.addEventListener('click', (e) => {
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
input.addEventListener('input', (e) => {
    div.textContent = '';
    const text = e.target.value;
    console.log(text);
    passwords.forEach((password, index) => {
        if (password === text) {
            div.textContent = messages[index];
            e.target.value = '';
        }
    })
})