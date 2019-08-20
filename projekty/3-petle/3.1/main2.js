//general
const btnLoop = document.querySelector('.for-loop-btn');
const btnForeach = document.querySelector('.for-each-btn');
const liElements = document.querySelectorAll('li');
let fontSize = 10;
//change NodeList to Array 
const liArray = [...liElements];

//for loop
btnLoop.addEventListener('click', function () {
    // console.log('click');
    for (let i = 0; i <= liArray.length; i++) {
        // console.log(`i = ${i}`);
        //showing elements
        if (liArray[i].style.display != 'list-item') {
            // console.log('showing li elements when hide');
            liArray[i].style.fontSize = `${fontSize}px`;
            liArray[i].style.display = 'list-item';
        } else {
            fontSize++;
            liArray[i].style.fontSize = `${fontSize}px`;
        }
    }
});

//forEach method
btnForeach.addEventListener('click', () => {
    // console.log('foreach start');
    liElements.forEach(function (element) {
        // console.log(`element - ${element.textContent}`);
        if (element.style.display != 'list-item') {
            element.style.fontSize = `${fontSize}px`;
            element.style.display = 'list-item';
        } else {
            fontSize++;
            element.style.fontSize = `${fontSize}px`;
        }
    });
});