// 1. Klawisz <- (stzałka w lewo) przesuwa w lewo (cofa) slider
// 2. Klawisz -> (stzałka w lewo) przesuwa w prawo slider (do przod, czyli tak jak przy funkcji changeSlide) 
// lewa strzałka: keyCode = 37
// prawy strzałka: keyCode = 39
// 3. (strzałki) wstrzymuje setInterval, a po zmianie slajdu uruchamiają go ponownie (czas ma się liczyć ponownie)

// Projekt tutaj (przetestuj działajanie strzałek na klawiaturze)
// https://websamuraj.pl/examples/js/projekt9/


const slideList = [{
        img: "images/img1.jpg",
        text: 'Pierwszy tekst'
    },
    {
        img: "images/img2.jpg",
        text: 'Drugi tekst'
    },
    {
        img: "images/img3.jpg",
        text: 'Trzeci tekst'
    }
];

const image = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');
const dots = [...document.querySelectorAll('.dots span')]
// Interfejs
const time = 3000;
let active = 0;
let stopSlider = false;

// Implementacje

const changeDot = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
    dots[activeDot].classList.remove('active');
    dots[active].classList.add('active');
}

const changeSlide = () => {
    active++;

    if (active === slideList.length) {
        active = 0;
    }
    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    changeDot();
}
let startSlider = setInterval(changeSlide, time);



const keyChangeSlide = (e) => {
    const key = e.keyCode;

    // console.log(key);
    if (key === 37) {
        // console.log('zatrzymanie slidera');
        clearInterval(startSlider);
        //cofniecie do poprzedniego slajdu
        if (active === 0) {
            active = slideList.length - 1;
        } else {
            active--;
        }
        image.src = slideList[active].img;
        h1.textContent = slideList[active].text;
        changeDot();
        console.log('start slider again');
        console.log(`active slide ${active}`);

        startSlider = setInterval(changeSlide, time);


    } else if (key === 39) {
        // console.log('kliknieta strzalka w prawo');
        // console.log('zatrzymanie slidera');
        clearInterval(startSlider);
        //przewinięcie do kolejnego slajdu
        if (active === slideList.length - 1) {
            active = 0;
        } else {
            active++;
        }
        image.src = slideList[active].img;
        h1.textContent = slideList[active].text;
        changeDot();
        console.log('start slider again');
        console.log(`active slide ${active}`);

        startSlider = setInterval(changeSlide, time);
    }
}

// utwórz funkcje keyChangeSlide. Zadanie może wymagać także zmian poza funkcją.
window.addEventListener('keydown', keyChangeSlide)