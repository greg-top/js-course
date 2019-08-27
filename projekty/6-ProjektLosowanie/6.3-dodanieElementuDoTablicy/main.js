const names = [];
const div = document.querySelector('div');

const addName = (e) => {
    e.preventDefault(); //metoda blokująca domyślne działanie
    const input = document.querySelector('input');
    const name = input.value;
    if (name) {
        if (!names.includes(name)) {
            names.push(name);
            div.textContent += `${name}, `;
        } else {
            alert('to imię zostało już wpisane');
        }
    } else {
        alert('dodaj imię');
    }
}

document.querySelector('button').addEventListener('click', addName);