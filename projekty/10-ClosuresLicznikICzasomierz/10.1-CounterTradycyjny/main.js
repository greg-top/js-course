// Rozwiazanie te jest prawidlowe jednak wymaga zastosowania zmiennej w zakresie globalnym co niesie ze soba ryzyko usunicia, badz nadpisania zmiennej przez inny fragment kodu.

let number = 0;

const add = () => {
    number++;
    document.body.textContent = `aktualny stan licznika to ${number}`;

}

document.addEventListener('click', add);