const square = document.createElement("div");
document.body.appendChild(square);

// wielkosc kwadratu
let size = 20;

square.style.width = `${size}px`;
square.style.height = `${size}px`;

let growFlag = true;

const changeElementSize = function () {

    if (growFlag) {
        size += 5;
        square.style.width = `${size}px`;
        square.style.height = `${size}px`;
    } else {
        size -= 5;
        square.style.width = `${size}px`;
        square.style.height = `${size}px`;
    }

    if (size >= window.innerWidth / 2) {
        growFlag = !growFlag;
    } else if (size < 10) {
        growFlag = !growFlag;
    }
}

window.addEventListener("scroll", changeElementSize);