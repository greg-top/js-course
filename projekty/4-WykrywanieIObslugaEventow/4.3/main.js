const div = document.querySelector('div');

let divX = 150;
let divY = 50;
let size = 200;

div.style.left = `${divX}px`;
div.style.top = `${divY}px`;

let drawActive = false;

let insertDivX;
let insertDivY;

div.addEventListener('mousedown', (e) => {
    div.style.backgroundColor = 'grey';
    insertDivX = e.offsetX;
    insertDivY = e.offsetY;
    console.log(insertDivX, insertDivY);

    drawActive = true;
})

div.addEventListener('mousemove', (e) => {

    divX = e.clientX;
    divY = e.clientY;
    if (drawActive) {
        div.style.left = `${divX-insertDivX}px`;
        div.style.top = `${divY-insertDivY}px`;
    }

})

div.addEventListener('mouseup', () => {
    div.style.backgroundColor = 'black';
    drawActive = false;
})