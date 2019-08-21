let size = 10;
let orderElement = 1;
const list = document.createElement('ul');


// initialize DOM structure
const init = () => {
    //tutaj kod
    console.log('init DOM elements');
    const btn = document.createElement('button');
    btn.textContent = 'Start';
    const btnReset = document.createElement('button');
    btnReset.classList.add('btn-reset');
    btnReset.textContent = 'Reset List';
    // const list = document.createElement('ul');

    document.body.appendChild(btn);
    document.body.appendChild(btnReset);
    document.body.appendChild(list);

    btn.addEventListener('click', createLiElements);
    btnReset.addEventListener('click', resetLiElements);
}

// create li elements and style them
const createLiElements = () => {
    console.log('ad li click');
    for (let i = 1; i <= 10; i++) {
        const liElement = document.createElement('li');
        liElement.textContent = orderElement;
        liElement.style.fontSize = `${size++}px`;
        list.appendChild(liElement);
        orderElement++;
    }
}

const resetLiElements = () => {
    console.log('reset click');
    size = 10;
    orderElement = 1;
    ulElement = document.querySelector('ul');
    ulElement.textContent = '';
}
init();