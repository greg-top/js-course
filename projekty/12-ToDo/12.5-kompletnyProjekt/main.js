// rozwiazanie z kursu

const toDoList = [];

const form = document.querySelector('form');
const ul = document.querySelector('ul');
const taskNumber = document.querySelector('h1 span');
const listItems = document.getElementsByClassName('task'); //metoda getElementByClassName updatuje swoja zawartosc automatycznie
const input = document.querySelector('input');

const renderList = () => {
    ul.textContent = '';
    toDoList.forEach((todoElement, index) => {
        todoElement.dataset.key = index;
        ul.appendChild(todoElement);
    });
}

const removeTask = (e) => {
    const index = e.target.parentNode.dataset.key; //pobranie data-key usuwanego elementu
    toDoList.splice(index, 1); //usuniecie elementu z tablicy

    //wygenerowanie nowej tablicy aby uniknac problemu z indexami, po usunieciu elementu date-key nie jest zsynchronizowany z elementami tablicy
    taskNumber.textContent = listItems.length;
    renderList();
}

addTask = (e) => {
    e.preventDefault();
    const titleTask = input.value;
    if (!titleTask) return;
    // console.log(titleTask);
    const task = document.createElement('li');
    task.className = 'task';
    task.innerHTML = titleTask + '<button>Usun</button>'
    toDoList.push(task);
    renderList();

    // ul.appendChild(task);
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