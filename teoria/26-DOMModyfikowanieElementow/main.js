// MODYFIKACJA ELEMENTÓW DOM

const firstLi = document.querySelector('li:first-child');

// Możemy modyfikować zawartość elementy poprzez przypisanie nowych właściwości textConten lub innerHTML. Stara wartość jest usuwana.
// firstLi.textContent = "Nowa zawartość tekstowa";
firstLi.innerHTML = '<strong>Pogrubienie</strong> i normalnie';

// Możemy też dodać do obecnej zawartości dodatkową treść np.
// firstLi.textContent += " coś nowego";

// Dodawanie stylów do elementu(liniowo)
firstLi.style.fontSize = "30px";
firstLi.style.backgroundColor = "#ccc";
firstLi.style.letterSpacing = "2px"

// Dodawanie, odejmowanie i przełączanie klas
// firstLi.classList.toggle("space");
firstLi.classList.add("space");
// firstLi.classList.remove("space");

// Nadpisywanie zawartości atrybutów - przykładowo class i id. Ale można też innych atrybutów. Zwrócmy uwagę, że nie używay słowa class (które jest w JS zarezerwowane), a zamiast niego nazwa właściwości brzmi className. Z id jest już "normalnie", podobnie z .src
// firstLi.className = "one two"; //uwaga, ta wlasciwosc nadpisze istniejace klasy!!
// firstLi.id = ""; //jak powyzej

// Ustawić zawartość atrybutu (również nadpisując ten obecny) można za pomocą metody setAttribute. Zwrócmy uwagę, że tu już możemy użyć nazwy class ponieważ jest ona przekazana w stringu (a zawartość stringa moze być dowolna i nie jest oczywiscie bolokowana przez nazwy zastrzeżone)
firstLi.setAttribute('title', 'Uwaga, ważne'); //uwaga, atrybut zostanie nadpisany!!
firstLi.setAttribute('class', 'sizeX'); //uwaga, atrybut zostanie nadpisany!!

//setAttribute czy odniesienie do własciwości (element.id czy element.className) nadpisują, więc nie zawsze śą dobrym rozwiązaniem.




// Modyfikowanie wielu elementów

// zamiana na tablicę, dzięki temu mamy dostęp do wielu metod, m.in. forEach
const liItems2 = document.querySelectorAll("li"); //obiekt tablicopodobny, w tym wypadku Nodelist. Posiada on metode forEach jednak brakuje mu duzo metod obiektu tablicy
const liItems = [...document.getElementsByTagName("li")]; //uzycie operatora REST do zamiany obiektu tablicopodobnego na tablice

// liItems.style.fontSize = "40px"; // nie zadziała, bo nie przypisujemy wszystkim elementom a próbujemy tak naprawdę przypisać tablicy. Musimy odwołać się do każdego elementu osobno.

// Dodanie klasy (pętla i forEach)

//petle for mozna wykonac ten na elemencie tablicopodobnym 
// for (let i = 0; i < liItems.length; i++) {
//     liItems[i].style.fontSize = "40px";
//     liItems[i].classList.add('red');
// }

// metode forEach() mozna wywolac tylko na tablicy i NodeList (element tablicopodobny). Natomiast element tablicopodobny HTML collection nie posiada metody forEach i wyswietli blad
liItems.forEach(function (item) {
    item.style.textDecoration = "underline";
    item.style.fontSize = "40px";
    item.classList.add('red');
})


// Konkluzja - zamieniac elementy tablicopodobne na tablice!!