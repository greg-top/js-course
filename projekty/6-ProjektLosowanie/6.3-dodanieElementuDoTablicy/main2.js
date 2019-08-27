// moje rozwiązanie 

const btn = document.querySelector('button');
const input = document.querySelector('input');
const div = document.querySelector('div');

const elements = [];

const addElement = (e) => {
    e.preventDefault(); //zatrzymanie odświeżania strony dla przycisku typu submit (domyślny stan przycisku)
    if (input.value) {
        if (!elements.includes(input.value)) {
            elements.push(input.value);
        } else {
            alert('Ten element już jest w tablicy');
            input.value = '';
        }
    }
    div.textContent = elements.toString();
    input.value = '';
};

btn.addEventListener('click', addElement);