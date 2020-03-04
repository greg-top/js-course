// PRYWATNE I PUBLICZNE WŁAŚCIWOŚCI
// Domyślnie wszystkie metody i właściwości obiektów są publiczne w JS

//PRZYKŁADY UKRYWANIA DANYCH (hermetyzajca)
// 1.) _konwencja
// 2.) wykorzystanie closure - metody dostępowe do ukrytych właściwości

// 1 - KONWENCJA

class Cat {
    constructor(color) {
        this._color = color; //_ podkreślenie powie innym programistom że ta właściwość ma być traktowana jako prywatna. Musimy w tym wypadku utworzyć metodę w prototypie które pozwolą nam się do tej właściwości dostać
    }
    // metoda pobierająca zawartość kolor
    getColor() {
        return this._color;
    }
    setColor(value) {
        if (typeof (value) !== 'string') {
            alert('podana wartość musi być typu String')
        } else {
            return this._color = value; // ustawi nowy kolor i zwróci jego wartość
            console.log(`nowa wartość _color = ${value}`);
        }
    }

}

const kotek = new Cat('czarny');
kotek.getColor(); // użycie metody prototypu do uzyskania dostępu do właściwości prywatnej obiektu

// kotek.setColor(2); //wywoła błąd
kotek.setColor('biały');


kotek.getColor();


// 2 - CLOSURE - dzięki 

//przykład 1

class Dog {
    constructor(name, dogColor) {
        this.name = name; //właściwość publiczna
        let _color = dogColor; //zmienna istnieje tak długo jak istnieje konstruktor. W momencie jak konstruktor zakończy swoje działanie zmienna zniknie.

        //Interfejsy do pracy z ukrytą właściwością color - Closure
        this.getColor = () => {
            return _color;
        }
        this.setColor = (value) => {
            return _color = value;
        }
    }
}

const fafik = new Dog('fafik', 'brązowy')

fafik.color; // 'undefined'  -  nie możemy bezpośrenio odwołać się do właściwości kolor ale możemy wykorzystać mechanizm closure z metody getColor;
fafik.getColor(); // 'brązowy'
fafik.setColor('biały'); // 'biały'

//przykład 2

class Car {
    constructor(name, counter = 100000, year = 2000) {
        this.name = name;
        let _counter = counter; //ukryta właściwość
        let _year = year; //ukryta właściwość
        let _changeNumber = 0; //ukryta właściwość

        //interfejsy dla ukrytych dancyh muszą być w konstruktorze

        this.getYear = function () {
            return _year;
        }
        this.setYear = (value) => {
            if (typeof (value) !== 'number') {
                alert('Year needs to be type of number');
            } else {
                return _year = value;
            }
        }

        this.showCarAge = function () {
            return `Samochód ma: ${new Date().getFullYear() - _year} lat`;
        }

        this.getCounter = () => {
            if (_changeNumber) alert(`Licznik został zmieniony ${_changeNumber} razy`)
            return _counter;
        }

        this.setCounter = function (value) {
            _changeNumber++;
            return _counter = value;
        }

        this.getChangeNumber = () => _changeNumber; //szybszy zapis funkcji strzałkowej
    }
}


const polonez = new Car('Polonez Caro', 25000, 2009);
polonez.getYear();
polonez.setYear(2012);
polonez.setCounter(10000);
polonez.getChangeNumber();
polonez.showCarAge();