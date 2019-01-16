// NASŁUCHIWANIE I OBSŁUGA ZDARZEŃ

// Metoda addEventListener - możemy wywołać ją na dowolnym elemencie DOM oraz na window (reprezentacja okna przeglądarki).

//PRZYKŁAD
// - jako pierwszy argument podajemy nazwę zdarzenie w tym przypadku podwójne kliknięcie czyli "dblclick".
// jako drugi argument podajemy funkcję (callback), która ma być wywołana w moemencie wystapienie zdarzenia (za każdym razem gdy wystąpi) 
// window.addEventListener("dblclick", function () {
//     console.log("podwójne kliknięcie");
// });
// window.addEventListener("scroll", function () {
//     console.log("skroluje");
// });

// PRZYKŁAD - możemy podać funkcję strzałkową
// document.body.addEventListener("click", () => console.log("kliknięcie"));
// document.addEventListener("scroll", () => console.log('skroluje'));

// PRZYKŁAD - mozemy też podać nazwę funkcji, która została stworzona poza metodą addEventListener
// const showScroll = () => {
//     console.log("skrol");
// }

// function showScroll() {
//     console.log("skrol");
// }

// window.addEventListener("scroll", showScroll);




// PRZYKŁAD - metodę możemy przypisać bezposrednio do pobieranego elementu
// document.querySelector('h1').addEventListener('mousemove', function() {
//  this.textContent += "+";
//  console.log("ruch myszką po h1");
// })

// PRZYKLAD

// const h1 = document.querySelector('h1');

// const addText = function () {
//     this.textContent += " :) "; //dodanie znaków (stringa) do istniejacej zawartości tekstowej
//     //h1.classList.toggle("red"); //dodanie/zabranie klasy z elementu (dodaje jak nie ma, zabiera jak jest). W tym przypadku uzylismy zmiennej h1 ale powinno byc uzyte slowo kluczowe this - jak ponizej
//     this.classList.toggle("red");
// }

// h1.addEventListener('click', addText);


// PRZYKŁAD - nastawienie nasłuchiwania, czyli uruchomienie metody addEventListener na każdym elemencie. Pamietajmy że nie można beżposrednio na pobranym obiekcie, tylko na każdym jego elemencie osobno

const addClassRed = function () {
    console.log("klik li");
}

const items = document.querySelectorAll("li");
// zapis items.addEventListener() nie zadziała, bo nie możemy ustawić nasłuchiwanie na tablicy tylko na pobranych elementach. Jak to zrobić, widać ponizej (można też użyć pętli)

//Metoda forEach sprawia, ze podana jako argument funkcja, jest wykonywana na każdym elemencie tablicy (na każdym li) Przy czym przekazujemy do środka ten element nadając mu nazwę (w tym wypadku item) Przy wywołaniu funkcji na kazdym elemencie w tym item będzie znajdowało się kolejne li (czyli kolejna pozycja z tablicy)
// items.forEach((item) => item.addEventListener("click", addClassRed))
//rozpisana lepiej ponizej
//items.forEach(
// 	(item)=>{
// 		item.addEventListener("click", function() {
//         	console.log("test3")
// 		})
// 	}
// )


// TWORZENIE I DODAWANIE ELEMENTÓW DO STRONY

//stworzenie elementu (wezla, node) w js. Ten element nie zostal podpiety do DOM
const divElement = document.createElement('div');

//wstawienie wartosci do stworzonego elementu
// divElement.textContent = "Ostatni DIV";
// divElement.style.backgroundColor = "red";

//przypiecie elementu do DOM 
// document.body.appendChild(divElement);