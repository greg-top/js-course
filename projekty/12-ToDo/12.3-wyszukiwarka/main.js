// TODO:
// 1.) Pobrac element input i zapisac do zmiennej searchInput
// 2.) ustawic nasluchiwanie na zdarzenie input dla zmiennej searchInput (funkcja search)
// 3.) pobrac zawartosc wszytkich li i zapisac je do tablicy allLi
// 4.) za pomoca metody filter przefiltrowac tablice allLi i sprawdzic czy element tablicy zawiera wyszukiwana fraze (metoda includes), string.includes(substring). Zapisac do nowej zmiennej filteredLi
// 5.) zastosowac metode foreach na tablicy filteredLi i dodac wszystkie elementy tablicy do ul na stronie(metoda innerHtml)

// Moje rozwiazanie
// const input = document.querySelector('input');
// const ul = document.querySelector('ul');
// const allLi = [...document.querySelectorAll('li')];

// const search = () => {

//     const filteredLi = allLi.filter(li => li.textContent.toLowerCase().includes(input.value.toLowerCase()));
//     // console.log(allLi);
//     // console.log(filteredLi);
//     ul.innerHTML = '';
//     filteredLi.forEach(li => {
//         ul.innerHTML += `<li>${li.textContent}</li>`;
//     });
// }

// input.addEventListener('input', search);

// Rozwiazanie z kursu
const input = document.querySelector('input');
const ul = document.querySelector('ul');
const liElemets = document.querySelectorAll('li');

const searchTask = (e) => {
    // console.log(e.target.value.toLowerCase());
    const searchText = e.target.value.toLowerCase();
    let tasks = [...liElemets];

    tasks = tasks.filter(task => task.textContent.toLowerCase().includes(searchText));
    // console.log(tasks);

    ul.textContent = '';

    tasks.forEach(task => ul.appendChild(task));

}

input.addEventListener('input', searchTask);