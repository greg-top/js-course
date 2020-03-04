// Problem utraty wiązania

// const szarik = {
//     children: ['fafik', 'żaba'],
//     showChildren: function () {
//         console.log(this);

//         this.children.forEach(function (name, index) {
//             console.log(this); // utworzy wiązanie z obiektem głównym

//             console.log(this.children[index]);  //utrata wiązania
//         })
//     }
// }

// szarik.showChildren();

/* Rozwiązanie */

// 1. that = this

// const szarik = {
//     children: ['fafik', 'żaba'],
//     showChildren: function () {
//         const that = this; // tworzymy referencje do this do użycia w metodach obiektu. Często spotykana nazwa zmiennej to self
//         // console.log(that);

//         this.children.forEach(function (name, index) {
//             // console.log(that); 

//             console.log(that.children[index]); //utrata wiązania nie nastąpi ponieważ używamy wcześniej zadeklarowanej zmiennej that, która ma referencje do this obiektu
//         })
//     }
// }

// szarik.showChildren();

// 2. Bez funkcji - za pomocą pętli for of

// const szarik = {
//     children: ['fafik', 'żaba'],
//     showChildren: function () {
//         for (child of this.children) {
//             console.log(child); // pętla nie tworzy nowego this jak w przypadku użycia metody, np. metody foreach
//         }
//     }
// }

// szarik.showChildren();

// 3. Arrow function


// const szarik = {
//     children: ['fafik', 'żaba'],
//     showChildren: function () {

//         this.children.forEach((name, index) => {

//             console.log(this.children[index]); //funkcja strzałkowa nie tworzy własnego wiązania this, tylko dziedziczy go z zakresu powyżej
//         })
//     }
// }

// szarik.showChildren();

// 4. bind -> metoda która tworzy w oparciu o jedną funkcję nową funkcję która ma na stałe przypisane wiązanie this

const szarik = {
    children: ['fafik', 'żaba'],
    showChildren: function () {

        this.children.forEach(function (name, index) {

            console.log(this.children[index]);
        }.bind(this)) // wywołujemy metodę bind i wskazujemy mu poprawnego this
    }
}
szarik.showChildren();