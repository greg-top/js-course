## Prototyp - po co używać Prototyp

```
const Animal = function(name) {
    this.name = name;
    this.children = [];
    this.addChildren = function(childName) {
        this.children.push(childName);
    }   //ta funkcja powinna być taka sama dla wszystkich instancji => miejsce do użycia Prototypu. W przypadku tego rozwiązania niepotrzebnie tworzymy wiele instancji tej samej metody
}

const hamster = new Animal("Maniek");
hamster.addChildren("Zorro");
```
<br>
- Powyższe rozwiązanie nie posiada konstruktora i nie potrzebnie tworzy metodę addChildren dla każdej instancji
- Prototyp jest częścią konstruktora, jest obiektem który występuje w konstruktorze i do którego dostęp mają wszystkie instancje.
- Prototyp pozwala nam nie dublować kodu tylko utrzymywać ten kod w zewnętrznym obiekcie do którego wszystkie instancje mają dostęp.

## Prototyp - składnia

```
const Animal = function(name) {
    this.name = name;
    this.children = [];
}

//Utworzenie Prototypu dla konstruktora Animal
Animal.prototype.addChildren = function(childName) {
    this.children.push(childName);
}

const hamster = new Animal('Maniek');
hamster.addChildren('Zorro');
```
<br>
Prototyp można stworzyć w późniejszym etapie programu, po utworzeniu instancji obiektów, ale przed wywółaniem metody z prototypu<br>

```
const Animal = function(name) {
    this.name = name;
    this.children = [];
}

const hamster = new Animal('Maniek');
const canary = new Animal('Tweety');

//Utworzenie Prototypu dla konstruktora Animal
Animal.prototype.addChildren = function(childName) {
    this.children.push(childName);
}

hamster.addChildren('Zorro');

```
<br>
Do prototypu możemy również dodać właściwości, wtedy wszystkie instancje będą miały tą samą wartość właściwości. Zwykle jednak dodajemy właściwości do konstruktora. <br>
Do prototypu zwykle wkładamy metody które nie chcemy dublować w instancjach.<br>

```
const Animal = function(name) {
    this.name = name;
    this.children = [];
}

const hamster = new Animal('Maniek');
const canary = new Animal('Tweety');

//Utworzenie właściwości za pomocą Prototypu
Animal.prototype.age = 2;

canary.age; //2 => wartość zostanie pobrana z prototypu konstruktor Animal
hamster.age; //2

hamster.addChildren('Zorro');
```

## Prototyp - podsumowanie
PROTOTYP - specjalny obiekt w funkcji konstruktora (w klasie), który **przechowuje wspólne metody i właściwości dla wszystkich instancji**. <br><br>
Obiekt (instancja) może mieć własne właściwości i metody, a może je też dziedziczyć (bez przypisania). <br><br>
**Dziedziczenie w JS oparte jest przede wszystkim na prototypach**

## Klasy w JavaScript (class)

KLASA (ES6) - klasy w JS pojawiły się w 2015 roku. Ale nie jest to nowy mechanizm. Pod **nową składnią** kryją się **te same konstruktory**.
<br><br>

Klasy są rozwiązaniem z wielu innych języków programowania. Ich wprowadzenie czyni JS zbliżonym (składniowo) do innych języków obiektowych. Kod staje się też (subiektywnie) **czystszy, łatwiejszyw pisaniu i przejrzysty**, dlatego współcześnie większość programistów JS korzysta z klas zamiast z konstruktora. Przy czym warto pamiętać, że **mechanizm jest ten sam**. Klasy to tylko syntax sugar (robi to samo, ale "ładniej").

## Tworzenie Klasy (wzór)

Klasę traktujemy jako alternatywę dla konstruktora.<br>
```
//klasa 
class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
        this.eat = function() {
            console.log(this.name + ' mniam mniam');
        }
    }
}
```
dla przypomnienia wzór kontruktora:<br>
```
//konstruktor
const Animal = function(name, species) {
    this.name = name;
    this.species = species;
    //Poniższy sposób nie jest prawidłowy, metoda eat() powinna zostać dodana do klasy za pomocą prototypu
    this.eat = function() {
        console.log(this.name + 'auuuuu (jakie dobre)');
    }
}
```
W przypadku klasy możemy dodać metody prototypu wewnątrz klasy.<br>
W przypadku konstruktora musimy dodać metody prototypu poza konstruktorze.<br>
```
//Tworzenie klasy (wzór) - dodanie prototypu do klasy
class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
        //Poniższy sposób nie jest prawidłowy, metoda eat() powinna zostać dodana do klasy za pomocą prototypu
        //this.eat = function() {
        //    console.log(this.name + ' mniam mniam');
        //}
    }
    // do prototypu klasy dodajemy metodę eat()
    eat() {
        console.log(this.name + ' auuuuu (jakie dobre)');
    }
}
<br>
**Ważne:** zawartość klasy to zbiór metod.
```

## Tworzenie Instancji z klasy
```
const dog = new Animal('Nero', 'hienka');
```
Składnia dokładnie taka jak przy konstruktorze i dokładnie tak samo działający mechanizm.<br><br>

Klasa jest funkcją tak samo jak konstrukcją
```
type of Animal //"function" - klasa jest funkcją
```
<br>
Nie stworzymy obiektu bez konstruktora (klasy):

```
const obj = {} //literał wykorzystuje konstruktor Object
const arr = [] // literał wykorzystuje konstruktor Array
 ```

 ## this - wiązanie z obiektem
 **this**, to mechanizm w JavaScript, który często zaskakuje. <br>
 Dzięki **this** kod jest uniwersalny, przykład pseudokodu:

 ```
 "Weź **to** co masz w ręku i podrzuć"; //jest to wyrażenie uniwersalne
 "Weź jabłko, które masz w ręku i podrzuć";
 "Weź kluczyki, które masz w ręku i podrzuć";
 ```
 
 ## this - przykład
 ```
 btn.addEventListener("click", function() {
     this.classList.toggle("on");
 });
 ```
 **this** będzie odnosiło sie do przycisku, czyli do obiektu na którym wykonuje się funkcja.<br><br>

Zwróc uwagę, że ta sama funkcja może być wykonana na wielu elementach, jest uniwersalna, ponieważ **wiązanie this z obiektem następuje w chwili wywołania funkcji a nie w chwili tworzenia funkcji** (i to trzeba zapamiętać). 

## this i arrow function
```
btn.addEventListener("click", () => {
    this.classList.toggle("on");
}); //this - obiekt globalny
```
**this** będzie odnosiło się do obiektu globalnego, bo funkcja strzałkowa nie tworzy własnego wiązania this, tylko go przejmuje z wyższego zakresu (więc gdy addEventListener jest w zakresie globalnym, to z zakresu globalnego).

## this - przykład użycia w obiekcie
```
const car = {
    name: 'polonez',
    year: 1999.
    age() {
        console.log(`Wiek samochodu to ${2020 - this.year} lat`);
    }
}
car.age(); //"Wiek samochodu to 21 lat"
```
**this** będzie odnosiło się do obiektu car, ale pamiętaj, że this (wiązanie, określenie obiektu) nastąpi w chwili wywołania metody, czyli tu car.age().