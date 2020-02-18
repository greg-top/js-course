# Wstęp, tworzenie obiektu, konstruktor, instancja

## Programowanie obiektowe (OOP)
**Sposób (technika, paradygmat) programowania** w którym program zbudowany jest z obiektów. Program jest zbiorem obiektów (połączone dane i metody) oraz relacji i zależności między nimi.

## Czy JavaScript jest obiektowy?
**JS jest językiem obiektowym (podobnie jak m.in. Java, C++, C#, Python)**, który umożliwia tworzenie programu za pomcą paradygmatu obiektowego. Javascript pozwala też utworzyć porgramy proceduralne lub za pomocą programowania funkcyjnego. <br>
**Elementy niezbędne by język uznać za obiektowy:**
- Obiekty,
- wzorce obiektów (konstruktory, klasy),
- hermetyzacja,
- dziedziczenie
- polimorfizm,
- abstrakcja<br>
P.S. JS pewne koncepcje realizuje inaczej niż inne obiektowe języki programowania.

## OOP - składnia
m.in. obiekt (właściwości i metody), konstruktor, klasa, prototyp, instancja, this <br>
Oczywiście **składnia jest niezależna od OOP** (i można z niej korzystać nawet nie tworząc programowania w oparciu o paradygmat obiektowy), ale znajomość składni jest niezbędna do programowania obietkowego.

## OOP - myślenie
**Myślenie obiektowe** - umiejętność tworzenia programów za pomocą obiektów. <br>
Zmiana sposobu myślenia względem programowania proceduralnego, gdzie dane i zachowanie występują osobno. I to jest naprawdę coś innego, nie chodzi tylko o **składnie**, ale przede wszystkim o **sposób myślenia**.

## Modelowanie (myślenie w OOP)
**Modelowanie** - kluczowy aspekt myślenia w paradygmacie obiektowy. <br><br>
Model - (uproszczona) rzeczywistość zbudowana za pomocą obiektów (określamy to często abstrakcją). Dla tworzenia modelu kluczowa jest perspektywa programisty, który musi uchwycić całość rzeczywistości, którą opisuje. Dobry programista, w tym kontekście, to ktoś kto potrafi modelować (projektować obiektowo) program.<br><br>
Warto pamiętać, że nie chodzi tu tylko o tworzenie obiektów o określonych cechach i celach, ale także o tworzenie relacji między obiektami (zależności, powiązania).<br><br>
**Cech obiektu** - wlaściwości i metody potrzebne do wykonania zadania. <br>
**Relacja między obiektami** - np. zależność, agregacj, wbudowanie. <br>
**Zadanie obiektu** - obiekt tworzymy po to by realizował określone zadanie

## Obiekt - podstawowy budulec

DANE (właściwości)<br>
ZACHOWANIE (metody) <br><br>

Obiekt kontroluje też dostęp do składowych.<br><br>

**Technicznie obiekt** to nieuporządkowany (kolejność nie ma znaczenia) zbiór właściwości, które składają się z pary klucz (nazwa właściwości) - wartość (którą może być dowolny typ). Jeśli wartością jest funkcja to taką właściwość nazywamy metodą. 

## Tworzenie obiektu - literał obiektu
```
const user = {
    //właściwości
    name: "Janek",
    age: 28,
    showName: function() {
        console.log(`Cześć ${this.name}!`);
    } //jeśli wartością jest funkcja, to mówimy o metodzie
}

user.name //"Janek" (odczytanie - get)
user.age = 32; // (przypisanie nowej wartości - set)
user.gender = "male"; // (stworzenie i przypisanie)
//----------------------------------------------------
// Obiekty są dynamiczne (zmiana, dodawnia, usuwanie)
```
<br>
Alternatywny (od ES6) sposób tworzenia metod w obiekcie:<br>

```
const user = {
    //właściwości
    name: "Janek",
    age: 28,
    showName: function() {
        console.log(`Cześć ${this.name}!`);
    } //jeśli wartością jest funkcja, to mówimy o metodzie
    showAge() {
        console.log(`Wiek użytkownika ${this.name}, to ${this.age}`);
    }
}
```

## Tworzenie obiecktu - new + konstruktor Object
Ten sposób jest stosunkowo rzadko używany.<br>
```
const cat = new Object();

//po utworzeniu obiektu dodajemy właściwości

cat.name = "Leon";
cat.meow = function() {
    console.log(this.name + ": miau miau!");
}
```

## Konstruktor (wzór dla obiektu)
**Konstruktor - to funkcja**, której używamy jako wzór do tworzenia nowego obiektu (nowej instancji). Konwencja wymaga napisania nazwy konstruktora **wielką literą**. <br><br>

Konstruktory (funkcje) wbudowane to np.: Array, Object, Date, Function, String, Number. <br><br>

W programowaniu obiektowym nie obędziemy się bez pisania **własnych konstruktorów** czy to w postaci funkcji, czy za pomocą skladni klas, która pojawiła się w ES6.

## Tworzenie KONSTRUKTORA (wzór)
```
const Animal = function(name, species) {
    this.name = name;
    this.species = species;
    this.eat = function() {
        console.log(this.name + 'auuuuu (jakie dobre)');
    }
}
```

## Utworzenie Instancji obiektu
```
//konstruktor
const Animal = function(name, species) {
    this.name = name;
    this.species = species;
    this.eat = function() {
        console.log(this.name + 'auuuuu (jakie dobre)');
    }
}

//utworzenie obiektu (Instancji)
const dog = new Animal("azor", "owczarek"); //instancja obiektu
const dog2 = new Animal("Tiko", "jamnik"); //instancja obiektu

//praca na instancji
dog.name; // "azor" - odczytanie właściwości
dog2.name = "pluto" // przypisanie nowej wartości do właściwości
dog2.eat(); // "pluto auuuuu (jakie dobre)" - wywołanie metody
```

## Tworzene instancji - proces
```
const Animal = function(name, species) {
    this.name = name;
    this.species = species;
}

//TWORZENIE INSTANCJI
const dog = new Animal("azor", "owczarek");
```
Proces tworzenia instancji: <br>
1.) operator **new**, który tworzy w połączeniu z konstruktorem nowy (pusty) obiekt <br>
2.) **this** od tego momentu wskazuje na obiekt (następuje wiązanie this z nowym obiektem) <br>
3.) nowy obiekt zostaje połączony z prototypem funkcji konstruktora
4.) Nowy **obiekt jest zwracany** (i przypisywany, referencja do niego, w zmiennej)

## Czym jest Instancja i co robi Konstruktor

```
//Konstruktor (wzorzecz, instrukcja)
const Animal = function(name, species) {
    this.name = name;
    this.species = species;
}

//Tworzenie instancji
const dog = new Animal("azor", "owczarek");
```
<br>

- **Instancja** to obiekt stworzony **zgodnie z wzorcem w konstrukturze** <br>
- Powstający obiekt jest **niezależnym bytem**, który posiada **własne właściwości i metody** nadane mu przez obiekt wzorcowy(konstruktor) oraz **ma dostęp do metod i właściwości** będących w posiadaniu takiego obiektu wzorcowego (poprzez odwołanie się do **prototypu konstruktora**). <br>
- W wielu obiektowych języckach programowania mamy taką strukturę jak **klasa**, na podstawie której tworzone są obiekty. W JavaScript taka struktura wzorcowa (która jest funkcją konstruktorem, ale też od ES6 ma postać klasy) ma charakter **zbioru instrukcji, które są wykonywane na nowo tworzonym obiekcie**