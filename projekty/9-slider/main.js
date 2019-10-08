//------------------
// ----Interfejs----
//------------------
// tablica przechowująca obiekty opisujące poszczególne slajdy (ścieżka do obrazu + opis slajdu)
const slideList = [{
        img: 'images/img1.jpg',
        text: 'Pierwszy tekst'
    },
    {
        img: 'images/img2.jpg',
        text: 'Drugi tekst'
    },
    {
        img: 'images/img3.jpg',
        text: 'Trzeci tekst'
    }
];

//obraz slajsu
const slideImg = document.querySelector('img.slider');
const slideText = document.querySelector('h1.slider');

// czas zmiany slajdu
const time = 2000;
//aktywny slajd
let activeSlide = 0;

//------------------
//--Implementacja---
//------------------

const changeSlide = () => {
    activeSlide++;
    if (activeSlide === slideList.length) {
        activeSlide = 0;
    }
    slideImg.src = slideList[activeSlide].img;
    slideText.textContent = slideList[activeSlide].text;

}

setInterval(changeSlide, time);