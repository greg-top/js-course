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
    changeDot()
}
let indexInterval = setInterval(changeSlide, time)

const keyChangeSlide = (e) => {
    // console.log(e.keyCode);

    if (e.keyCode == 37 || e.keyCode == 39) {
        // wylaczenie interval slidera po kliknieciu klawisza strzalki
        clearInterval(indexInterval);
        // uaktualnienie zmiennej active dla slidera po wcisnieciu klawisza
        e.keyCode == 37 ? active-- : active++; // strzalka w lewo dekrementuje wartosc zmiennej activ,  strzalka w prawo inkrementuje wartosc zmiennej active 
        // uaktualnienie zmiennej active w zakresie dosytepnych elementow tablicy slideList
        if (active === slideList.length) {
            active = 0;
        } else if (active < 0) {
            active = slideList.length - 1; //musi byc odjete 1 na koncu, dlugosc tablicy nie jest rowna indeksowi ostatniego elementu tablicy (np. tablica ma 3 element ale index ostatniego elementu jest rowny 2)
        }
        console.log(active);
        //zmiana obrazu, naglowka oraz kropki slajdu po kliknieciu klawisza strzalki
        image.src = slideList[active].img;
        h1.textContent = slideList[active].text;
        changeDot()

        //uruchomienie interval slidera, musi byc przypisany dla zmiennej indexInterval aby moc wylaczyc go przy kolejnym wowolaniu funkcji keyChangeSlide
        indexInterval = setInterval(changeSlide, time);
    }

}


// utwórz funkcje keyChangeSlide. Zadanie może wymagać także zmian poza funkcją.
window.addEventListener('keydown', keyChangeSlide)