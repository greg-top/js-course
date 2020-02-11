const scheduledTime = new Date('2020-04-26 17:45:07').getTime();

const spanD = document.querySelector('.d');
const spanH = document.querySelector('.h');
const spanM = document.querySelector('.m');
const spanS = document.querySelector('.s');

const timeCounter = () => {
    const nowTime = new Date().getTime(); //zwroci czas w ms od 01-01-1970

    const time = (scheduledTime - nowTime) / 1000;
    // console.log(time);

    const days = Math.floor((scheduledTime / (1000 * 60 * 60 * 24)) - (nowTime / (1000 * 60 * 60 * 24)));

    spanD.textContent = days;

    const hours = Math.floor((((scheduledTime / (1000 * 60 * 60 * 24)) - (nowTime / (1000 * 60 * 60 * 24))) % 1) * 24);

    // console.log(hours);
    spanH.textContent = hours;

    const minutes = Math.floor((((((scheduledTime / (1000 * 60 * 60 * 24)) - (nowTime / (1000 * 60 * 60 * 24))) % 1) * 24) % 1) * 60);
    // console.log(minutes);

    spanM.textContent = minutes;

    const seconds = Math.floor((((((((scheduledTime / (1000 * 60 * 60 * 24)) - (nowTime / (1000 * 60 * 60 * 24))) % 1) * 24) % 1) * 60) % 1) * 60);
    // console.log(seconds);

    spanS.textContent = seconds;

}

setInterval(timeCounter, 1000);