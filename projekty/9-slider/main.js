//------------------
// ----Interfejs----
//------------------
// tablica przechowująca obiekty opisujące poszczególne slides (ścieżka do obrazu + opis slajdu)
const slideList = [{
        img: 'images/img1.jpg',
        text: 'Pierwszy tekst',
        positionId: '#one'
    },
    {
        img: 'images/img2.jpg',
        text: 'Drugi tekst',
        positionId: '#two'
    },
    {
        img: 'images/img3.jpg',
        text: 'Trzeci tekst',
        positionId: '#three'
    }
];

//właściwości slide
const slideImg = document.querySelector('img.slider');
const slideText = document.querySelector('h1.slider');
const slideDots = [...document.querySelectorAll('.dots span')];
// czas zmiany slide
const time = 4000;
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
    changeDot();
}

const changeDot = () => {
    //reset active slide dot
    // console.log(slideDots);
    slideDots.forEach((dot) => {
        if (dot.classList.contains('active')) {
            dot.classList.remove('active');
        }
    })
    document.querySelector(slideList[activeSlide].positionId).classList.add('active');
}

setInterval(changeSlide, time);