// KOLOR GENEROWANY W ZALEŻNOŚCI OD TEGO GDZIE KLIKNIEMY

// jeśli wartość dla x (event.clientX) i y (event.clientY) jest parzysta (np. 100,122)  to kolor czerwony
// jesli wartość dla x i y jest nieparzysta to kolor niebieski
// jeśli jeden z kolorów jest parzysty a drugi nieparzysty to kolor zielony

console.log('====My Solution=======');

const changeColor = (event) => {
    // console.log('test click');
    let color = getColor(event);

    console.log(`X:${event.clientX}, Y:${event.clientY}`);
    console.log(`======================================`);
    document.body.style.backgroundColor = color;
}

const isOdd = (number) => {
    if (number % 2) {
        return true;
    } else {
        return false;
    }
}

const getColor = (e) => {
    let x = e.clientX;
    let y = e.clientY;

    if (isOdd(x) && isOdd(y)) {
        console.log('x i y nieparzyste');
        return 'blue';
    } else if (isOdd(x) || isOdd(y)) {
        console.log('x lub y nieparzyste');
        return 'green';
    } else {
        console.log('x i y parzyste');
        return 'red';
    }
}

document.body.addEventListener('click', changeColor);