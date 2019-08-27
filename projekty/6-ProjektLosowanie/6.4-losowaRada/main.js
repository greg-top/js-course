const tips = ['Walcz', 'Przemyśl to jeszcze raz'];
const input = document.querySelector('input');
const addBtn = document.querySelector('.add');
const cleanBtn = document.querySelector('.clean');
const showBtn = document.querySelector('.showAdvice');
const showAllBtn = document.querySelector('.showOptions');
const tipContainer = document.querySelector('h1');


addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    // console.log('add Btn');
    if (input.value) {
        if (!tips.includes(input.value)) {
            tips.push(input.value);
            input.value = '';
        } else {
            alert('Ta porada już istnieje');
        }
    } else {
        alert('Wprowadź poradę');
    }
});

cleanBtn.addEventListener('click', (e) => {
    e.preventDefault();
    // console.log('clean Btn');
    tips.splice(2);
});

showBtn.addEventListener('click', () => {
    // console.log('show Btn');
    tipIndex = Math.floor(Math.random() * tips.length)
    tipContainer.textContent = tips[tipIndex];
});

showAllBtn.addEventListener('click', () => {
    // console.log('show all Btn');
    alert(tips);
});