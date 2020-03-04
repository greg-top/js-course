// PROTOTYP

const Person = function (name, age) {
    this.name = name;
    this.age = age;
    this.children = [];

    //Ta metoda jest niepotrzebna gdyż każdy obiekt będzie przechowywał własną wersję tej samej metody. Powinniśmy posłużyć się prototypem do utworzenie metod w konstruktorze
    // this.addChildren = function (name) {
    //     this.children.push(name);
    // }
}

// prototyp dla konstruktora
Person.prototype.addChildren = function (name) {
    this.children.push(name);
}

const arek = new Person('Arek', 20);
const asia = new Person('Asia', 30);

//sprawdzenie prototypu obiektu
// Person.prototype;

// CZYM JEST PROTOTYP
// Prototyp to obiekt w funkcji konstruktora, współdzielony przez wszystkie egzemplarze. Każdy egzemplarz ma dostęp do obiektu prototypu.

// CO ZAWIERA PROTOTYP
// domyślnie właściwość constructor (funkcja konstruktora lub klasa) + to co zostanie przypisane do prototypu

function Player() {

}

Player.prototype.age = 25;
const janek = new Player; //jeśli nie przekazujemy żadnego argumentu to nawiasy są zbędne przy tworzeniu instancji obiektu
const marta = new Player;

janek.constructor; //odwołanie do konstruktora obiektu
Player.prototype; //odwołanie do prototypu konstruktora

class User {

}

const zdzisio = new User();
zdzisio.constructor; //wskaże na klasę User

const darek = new janek.constructor(); // też utworzy instancję obiektu Player. Widzimy, że jest to referencja do konstruktora 

// DODANIE ELEMENTÓW DO PROTOTYPU (KONSTRUKTOR)

function Citizen(name, country, citizenship) {
    this.age;
    this.name = name;
    this.country = country;
    this.citizenship = citizenship;
}

Citizen.prototype.changeCitizenship = function (citizenship) {
    this.citizenship = citizenship; // this w prototypie nabiera znaczenia w momencie kiedy jest wywoływane. Wskazuje na obiekt z którym jest związany
    console.log(`Zmiana właściwości za pomocą prototypu -> nowe obywatelstwo osoby ${this.name}: ${this.citizenship}`);
}

const zenek = new Citizen("Zenek", "Polska", "polskie");

zenek.changeCitizenship('włoskie'); //this z metody w prototypie wskaże nam na obiekt zenek 


zdzisio.toString(); //Ważne -> takiej metody nie mamy w konstruktorze oraz w prototypie konstruktora. Występuje jednak ona w prototypie głównego obiektu Object [łańcuch prototypowy, dziedziczenie]

// Obiekt Prototype jest zawsze aktualny - nawet jeśli obiekty powstały wcześniej to możemy zaktualizować prototyp i wszystkie wcześniej utworzone instancje będą posiadały nowo utworzone metody

Citizen.prototype.addAge = function (age) {
    this.age = age;
    console.log(`Dodanie wieku obywatela za pomocą prototypu. ${this.name}: ${this.age}`);
}

zenek.addAge(29); // zenek może skorzystać z metody prototypu Citizen nawet jeśli instancja zenek została utworzona wcześniej

// PRZYSŁANANIE
// metody są przysłaniane w kolejności -> najpierw w konstruktorze obiektu, później w prototypie konstruktora. Zawsze są wykonywane metody które są bliżej instancji obiektu (przysłaniają pozostałe o tych samych nazwach)

// ROZSZERZANIE PROTOTYPÓW OBIEKTÓW WBUDOWANYCH
const arr = [5, 6, 7, 8];

// aby usunąć element z tablicy możemy posłużyć się metodą splice. Ale możemy napisać własną metodą i dodać ją do prototypu tablicy. Wtedy wszystkie tablice będą miały do niej dostęp i mogą z nowej metody skorzystać.
Array.prototype.removeElement = function (index) {
    console.log(`Metoda usuwająca element z tablicy z indexem ${index}`);
    return this.splice(index, 1);
}

//arr.removeElement(1); // wszystkie instancje obiektu tablicy mają teraz dostęp do nowej metody

// ŁAŃCUCH PROTOTYPÓW (PROTOTYPE CHAIN)

// arr.__proto__    // odwołuje się do prototypu konstruktora

// arr.__proto__.__proto__  //odwołujemy się do prototypu kontruktora Object (w tym przypadku)

// arr.__proto__.__proto__.__proto__    // null; nie ma prototypu konstrukotra powyżej obiektu głównego Object


//KILKA ISTOTNYCH ELEMENTÓW

// instanceof  - sprawdzenie czy obiekt jest instancja danego konstruktora

arr instanceof Array; //true
arr instanceof Object; //true
arr instanceof String; //false

//Object.getPrototypeOf - zwraca prototyp konstrukotra na podstawie którego ostała utworzona instancja obiektu

Object.getPrototypeOf(arr); //zwraca prototyp konstrukotra Array

// instancja obiektu łączy się z konstruktorem za pomocą prototypu

// arr -- prototype -- Array
// arr.constructor  // metoda constructor jest zagnieżdzona w prototypie i jest 