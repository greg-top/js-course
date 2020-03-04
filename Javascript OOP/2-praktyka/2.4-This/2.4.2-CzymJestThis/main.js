/* CO TO JEST THIS? */
// -- this - dłowo zawierające odwołanie do obiektu. JavaScript przypisuje (zgodnie z regułami) do 'this' wiązanie z obiektem.
// -- O tym czym jest 'this' decyduje źródło (sposób) wywołania funkcji
// -- przypisanie do obiektu w this jest zawsze w chwili wywołania funkcji. Domyślnie ma charakter niejawny (a więc nie musimy wskazywać czym jest this, to stanie się automatycznie)
// -- 'this' tworzy kontekst (obiekt) do którego możemy się odwołać w kodzie

/* DLACZEGO THIS JEST POTRZEBNE */
// -- nie ma potrzeby używania precyzyjnych funkcji (osobnych dla każdego obiektu). Możliwość wielokrotnego użycia tej samej funkcji.
// -- czystość w kodzie, łatwiejsza edycja kodu

function showName() {
    console.log(this.name);
}

const karol = {
    name: 'Karol',
    showName: showName
}

const tatiana = {
    name: 'Tatiana',
    showName: showName
}

karol.showName();
tatiana.showName();

/* KIEDY WIĄZANIE THIS POWSTAJE? */
// -- wiązanie this powstaje w chwili wykonania metody i nie jest zależne wprost od miejsca deklaracji funkcji a od sposobu jej wywołania.
// -- w chwili wykonywania funkcji powstaje kontekst wykonawczy, którego częścią jest this

function one() {
    this.name = 'pierwsza';
    return this.name;
}

one(); // w przypadku wywołania w zakresie globalnym this stworzy wiązanie z obiektem globalnym WINDOW

const object1 = {
    two: one,
    four: function () {
        console.log(this);
    }
}

object1.two(); //wywołać w konsoli //w tym wypadku this stworzy wiązanie z obiektem object1

const three = object1.two;

three(); // this stworzy wiązanie z obiektem globalnym WIDNOW

const five = object1.four;
five();

/* RESUME */
// Źródłem powstania this jest wywołanie funkcji. Wiązanie powstaje w chwili wywołania funkcji/metody. Wiązanie this powstaje niezależnie czy w funkcji wykorzystujemy this (trochę tak jak przy wykryciu zdarzenia powstaje event tego zdarzenia. Też możemy, ale nie musimy go użyć)

/* REGUŁY - DLACZEGO THIS JEST JAKIE JEST */
// 1. wiązanie domyślne this to obiekt globalny, chya że używamy 'use strict' (tryb ścisły), które na to nie pozwoli (będzie undefined)

const thisExample = function () {
    //Tryb ścisły (strict mode) - wartość domyślna this będzie undefined
    // 'use strict' //usunie domyślne wiązanie this z obiektem globalnym i wyświetli błąd - this otrzyma wartość undefined
    console.log(this.example, this);
    const inside = function () {
        console.log(this.example, this);
    }
    inside();
}

thisExample();

// 2. wiązanie niejawne - co jest obiektem kontekstu, co jest źródłem wywołania

const user = {
    age: 45,
    showAge() {
        console.log(this.age);
    },
    showAge2: function () {
        console.log(this.age);
    }
}

const stefan = {
    age: 20,
    showAge: user.showAge
}

// Jeśli istnieje obiekt kontekstu na którym wywołana jest metoda, to on zostanie przypisany do this

// 3. Wiązanie jawne
// Możemy powiedzieć funkcji z czym ma powiązać this. Mówimy to przy wywołaniu funkcji. Metody call i apply

const human = {
    pesel: 2020202020202,
}

const showPesel = function () {
    console.log(`Twój pesel to ${this.pesel}`);
}

showPesel.call(human); //ustawia this na 1 argument i wywołuje funkcje showPesel

const showUser = function (name, age) {
    console.log(`użytkownik ${name} w wieku ${age} ma pesel:${this.pesel}`);
}

// showUser.call(human, arg2, arg3);
showUser.call(human, 'Tomasz', 35);

// 4. wiązanie twarde
// bind - nowa funkcja ze stałym this

const showPeselUser = showPesel.bind(human); //bind nie wywołuje funkcji a tylko przypisuje na twardo this do obiektu podanego w argumencie
showPeselUser(); //teraz można wywołać funkcje bez metody call a i tak będzie ona posiadała wiązanie this z obiektem human

// 5. Wiązanie z operatorem new

class User {
    constructor(name) {
        this.name = name;
    }
}

const stasiek = new User('Stasiek');

/* ARROW FUNCTION A THIS */

// Arrow function nie tworzy podczas wywołania własnego wiązania this, a je dziedziczy, co czasami jest plusem a czasamni minusem.

const cat = {
    age: 5,
    showAge() {
        console.log(this.age, this);
    },
    showAge2: () => {
        console.log(this.age, this);
    }
}

cat.showAge(); //this zwiąże się w sposób niejawny z obiektem cat
cat.showAge2(); //domyślne wiązanie z obiektem globalnym