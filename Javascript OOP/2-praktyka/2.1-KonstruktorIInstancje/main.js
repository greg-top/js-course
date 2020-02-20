//deklaracja konstruktora za pomocą wyrażenia funkcyjnego

const Car = function (name) {
    this.name = name;
}
// function Car() {}    //stary sposób deklaracji konstruktora

const maluch = new Car('maluch');
// co sie dzieje:
// 1. nowy pusty obiekt
// 2. następuje wiązanie this z utworzonym obiektem
// 3. powstaje właściwość __proto__
// 4. wywołanie funkcji i przypisanie do zmiennej

const polonez = new Car('polonez');

maluch.name = "zabytek";

//odwołanie do konstruktora obiektu
maluch.constructor;