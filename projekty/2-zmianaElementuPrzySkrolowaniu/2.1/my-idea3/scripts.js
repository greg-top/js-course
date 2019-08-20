const square = document.createElement('div');
square.classList.add('rect');
let squareWidth = 100;
let squareHeight = 100;
square.style.width = `${squareWidth}px`;
square.style.height = `${squareHeight}px`;
document.body.appendChild(square);

let flag = true;


window.addEventListener('scroll', function () {
    // console.log('scroll action')
    // check flag
    if (squareHeight >= this.window.innerHeight / 2) {
        // console.log(`reached window.innerHeight/2`);
        flag = false;
    } else if (squareHeight <= 100) {
        // console.log(`reached initial height`);
        flag = true;
    }
    // update square
    if (flag) {
        squareWidth++;
        squareHeight++;
    } else {
        squareWidth--;
        squareHeight--;
    }
    square.style.width = `${squareWidth}px`;
    // this.console.log(`square width: ${squareWidth}`);
    square.style.height = `${squareHeight}px`;
    // this.console.log(`square height: ${squareHeight}`);

    // this.console.log(`=======================`);

});