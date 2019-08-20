// create top bar container 
const topBar = document.createElement('div');
topBar.classList.add('.top-bar');

//adding element to the DOM structure
document.body.appendChild(topBar);

//initial configuration of the element
let barHeight = 20;
let barColor = 'red';
let flag = true;

//initial styling of the element
document.body.style.height = '100000px';
topBar.style.position = 'fixed';
topBar.style.width = '100vw';
topBar.style.height = `${barHeight}px`;
topBar.style.backgroundColor = barColor;

//functions delcaration - it's important to assign function to the variable!!
const changeHeight = function () {
    //set flag
    if (barHeight >= window.innerHeight / 2) {
        flag = false;
    } else if (barHeight <= 10) {
        flag = true;
    }
    //draw topBar
    if (flag) {
        barColor = 'red';
        barHeight += 5;
    } else {
        barColor = 'blue';
        barHeight -= 5;
    }
    topBar.style.height = `${barHeight}px`;
    topBar.style.backgroundColor = barColor;
}

//window scroll action
window.addEventListener('scroll', changeHeight);