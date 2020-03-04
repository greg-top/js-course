/* --- KLASY I DZIEDZICZENIE ----*/

// Klasy nadrzędne (superclass), klasy pochodne, podrzędne (subclass) i dziedziczenie

// Klasa dziedziczy po innej klasie
//1.) Zbudowanie prototypu klasy dziedziczącej w oparciu o klasę po której dziedziczy (można zapamiętać w pewnym uproszczeniu, że powstaje łańcuch prototypów)
//2.) Wywołanie konstruktora klasy (klas) nadrzędnej (nadrzędnych)

// Słowo kluczowe extends - wskazanie klasy po której nowa klasa powinna dziedziczyć

// Słowo kluczowe super - służy do rozszerzania konstruktora nowej klasy o konstruktor klasy z której dziedziczy

class Animal {
    constructor(age, name) {
        this.age = age;
        this.name = name;
    }
    breathe() {
        console.log('Zwierze oddycha');
    }
}

const zwierze = new Animal(3, "Artek");

class Mammal extends Animal {
    constructor(age, name, hair) {
        // this.hair = hair;    //błąd - nowe własności subclass-y muszą znaleźć się poniżej super!!
        super(age, name); //wywołujemy konstruktor klasy nadrzędnej
        this.hair = hair; // dodajemy nowe własności dla klasy podrzędnej
    }
    drinkMilk() {
        console.log('ssaki piją mleko');
    }
    speak() {
        console.log('ssak mówi');
    }
}

const ssak = new Mammal(2, 'Maks', 'blond'); //dziedziczenie własności age z klasy Animal

ssak.breathe(); // posiadamy dostęp do metod klasy nadrzędnej Animal

ssak.drinkMilk(); //wywołanie metody z klasy Mammal

class Human extends Mammal {
    constructor(age, name, hair, language) {
        super(age, name, hair);
        this.language = language;
    } // dodajemy nowy konstruktor do klasy podrzędnej tylko jeśli mamy zamiar rozzszerzyć go o nowe właściwości
    speak() {
        console.log('Człowiek mówi');
    }
}

const czlowiek = new Human(35, 'Jarek', 'ciemne', 'polski')

ssak.speak(); //"Ssak mówi" - instancja ssak użyje metody ze swojego prototypu
czlowiek.speak(); //"Człowiek mówi" - instancja ssak nadpisze metodę speak() bo posiada ją w swoim prototypie