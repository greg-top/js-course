//add and remove tasks
const form = document.querySelector('form');
const taskNumber = document.querySelector('h1 span');
const input = document.querySelector('input');
let liElements = document.getElementsByClassName('task');
const ul = document.querySelector('ul');

const removeTask = (e) => {
    e.target.parentNode.remove();
    taskNumber.textContent = liElements.length;
}

const addTask = (e) => {
    e.preventDefault();
    if (!input.value) {
        alert('Wpisz nazwe zadania');
        return;
    }

    const taskLi = document.createElement('li');
    taskLi.className = 'task';
    taskLi.innerHTML = input.value + '<button>Remove</button>';
    taskLi.querySelector('button').addEventListener('click', removeTask);

    ul.appendChild(taskLi);

    input.value = '';
    taskNumber.textContent = liElements.length;
}

form.addEventListener('submit', addTask);

//search tasks
const inputSearch = document.querySelector('input#searchTask');

const searchTask = (e) => {
    const searchText = e.target.value.toLowerCase();
    // console.log(searchText);
    TODO:
        // Do poprawy. Elementy tej listy usuwaja sie z kazdym uruchomieniem funkcji
        let tasks = document.querySelectorAll('li');
    console.log(tasks);

    tasks = [...tasks];
    const searchedtasks = tasks.filter(task => task.textContent.toLowerCase().includes(searchText));
    ul.textContent = '';
    tasks.forEach(task => {
        ul.appendChild(searchedtasks);
    });
    console.log(tasks);

}

inputSearch.addEventListener('input', searchTask);