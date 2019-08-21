console.log('start');
const heading = document.querySelector('h1');

document.body.addEventListener('mousemove', (e) => {

    //object event 
    // console.log(e);

    //target element of the event
    // console.log(e.target);

    //get position of the cursor - clientX and clientY properties
    console.log(`get position of the cursor from browser edges - X:${e.clientX}, Y:${e.clientY}`);
    console.log(`get position of the cursor from page edges - X:${e.pageX}, Y:${e.pageY}`);
    console.log(`get position of the cursor from screen edges - X:${e.screenX}, Y:${e.screenY}`);

    //show position of the cursor
    heading.textContent = `X:${e.pageX}, Y:${e.pageY}`;

    //generate random numbers between 0 - 255
    let r = Math.floor(Math.random() * 256);
    console.log(`R: ${r}`);
    let g = Math.floor(Math.random() * 256);
    console.log(`G: ${g}`);
    let b = Math.floor(Math.random() * 256);
    console.log(`B: ${b}`);
    // add bacakground color
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
    // document.body.style.backgroundColor = `rgb(233,23,45)`;

});