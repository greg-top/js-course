// TODO:

// 1.) Dodaj zdarzenie dla formularza (submit) z funkcja addTask
// 2.) zaktualizuj liczbe zadan w HTML
// 3.) Dodaj zadanie do listy ul oraz przycisk usun zadanie

// Moje rozwiazanie

// const tasksForm = document.querySelector('form');
// let tasksQty = document.querySelector('h1 span').textContent * 1; //change string to Number
// const input = document.querySelector('form input');
// const tasksList = document.querySelector('ul');
// let tasksButtons = [...document.querySelectorAll('li button')];

// //aktualizacja h1 span
// const updateTasksQty = (qty) => {
//     document.querySelector('h1 span').textContent = qty;
// }

// //usuwanie zadania z listy i aktualizacja h1 span
// const removeTask = (e) => {
//     e.target.parentNode.remove();
//     tasksQty--;
//     updateTasksQty(tasksQty);
// }

// // dodanie zadania do listy i aktualizacja h1 span
// const addTask = (e) => {
//     e.preventDefault();
//     tasksQty++;
//     const task = document.createElement('li');
//     task.textContent = input.value;
//     if (task.textContent) {
//         const remove = document.createElement('button')
//         remove.textContent = 'Remove';
//         task.appendChild(remove);
//         tasksList.appendChild(task);
//         input.value = '';

//         tasksButtons = [...document.querySelectorAll('li button')];
//         tasksButtons.forEach(button => {
//             button.addEventListener('click', removeTask)
//         })
//         updateTasksQty(tasksQty);
//     } else {
//         alert('dodaj nazwe zadania');
//     }
// }

// //aktualizacja default na start
// if (tasksButtons) {
//     document.querySelector('h1 span').textContent = tasksButtons.length;
//     tasksQty = tasksButtons.length;
//     tasksButtons.forEach(button => {
//         button.addEventListener('click', removeTask);
//     });
// }

// // nasluchiwanie elementu form
// tasksForm.addEventListener('submit', addTask);

// rozwiazanie z kursu
const form = document.querySelector('form');
const ul = document.querySelector('ul');
const taskNumber = document.querySelector('h1 span');
const listItems = document.getElementsByClassName('task'); //metoda getElementByClassName updatuje swoja zawartosc automatycznie
const input = document.querySelector('input');

const removeTask = (e) => {
    e.target.parentNode.remove();
    taskNumber.textContent = listItems.length;
}

addTask = (e) => {
    e.preventDefault();
    const titleTask = input.value;
    if (!titleTask) return;
    // console.log(titleTask);
    const task = document.createElement('li');
    task.className = 'task';
    task.innerHTML = titleTask + '<button>Usun</button>'
    ul.appendChild(task);
    input.value = '';
    taskNumber.textContent = listItems.length;
    // dodanie zdarzenia do nowo utworzonego przycisku
    task.querySelector('button').addEventListener('click', removeTask);
}

if (listItems) {
    document.querySelectorAll('.task button').forEach(button => {
        button.addEventListener('click', removeTask);
    })
    taskNumber.textContent = listItems.length;
}

form.addEventListener('submit', addTask);