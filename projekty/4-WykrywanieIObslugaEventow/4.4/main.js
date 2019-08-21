/* Gotowy projekt - sprzawdz działanie strzałek i zrób podobnie. http://websamuraj.pl/examples/js/projekt4-zad2/ */

let red = 100;
let green = 100;
let blue = 100;
console.log(`Initial: R:${red}, G:${green}, B:${blue}`);

document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;

const changeColor = (e) => {
  let keyPressed = e.keyCode;
  console.log(`Pressed Key: ${e.key} = ${keyPressed}`);
  //wrsja 1 - instrukcja if
  // if (keyPressed === 38) {
  // red += 2;
  // green += 2;
  // blue += 2;
  // } else if (keyPressed === 40) {
  // red -= 2;
  // green -= 2;
  // blue -= 2;
  // }

  //wersja 2 - instrukcja switch
  switch (keyPressed) {
    case 38:
      document.body.style.backgroundColor = `rgb(${red>=255 ? red: red+=2},${green>=255 ? green : green+=2},${blue>=255 ? blue : blue+=2})`;
      console.log(`R:${red}, G:${green}, B:${blue}`);

      break;
    case 40:
      document.body.style.backgroundColor = `rgb(${red<=0 ? red : red-=2},${green<=0 ? green : green-=2},${blue<=0 ? blue : blue-=2})`;
      console.log(`R:${red}, G:${green}, B:${blue}`);

      break;
  }
}
window.addEventListener('keydown', changeColor);