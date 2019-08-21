const h1 = document.querySelector('h1');

document.body.addEventListener('mousemove', (e) => {
    // console.log(e);
    //get position of the cursor
    const x = e.clientX;
    const y = e.clientY;
    h1.textContent = `X:${x}, Y:${y}`;

    //get width and height of the window
    const width = window.innerWidth;
    const height = window.innerHeight;

    //calculate colors
    let r = Math.floor(x / width * 101);
    let g = Math.floor(y / height * 101);
    let b = (r + g) / 2;

    // h1.style.backgroundColor = `rgb(50%,50%,50%)`;
    document.body.style.backgroundColor = `rgb(${r}%,${g}%,${b}%)`;
});