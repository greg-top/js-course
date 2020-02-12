// http://websamuraj.pl/examples/js/projekt11/


const btnTime = document.querySelector('.main');
const resetBtn = document.querySelector('.reset');
const panel = document.querySelector('.time div');

let time = 0; //setne sekundy
let active = false;
let intervalId = null;

const timer = () => {
    if (!active) {
        active = !active;
        btnTime.textContent = 'Pauza';
        intervalId = setInterval(start, 10);
    } else {
        active = !active;
        btnTime.textContent = 'Start';
        clearInterval(intervalId);
    }
}

const start = () => {
    time++;
    panel.textContent = (time / 100).toFixed(2);
}

const reset = () => {
    clearInterval(intervalId);
    active = false;
    btnTime.textContent = 'Start';
    time = 0;
    panel.textContent = '0.00';
}

btnTime.addEventListener('click', timer);
resetBtn.addEventListener('click', reset);