// CZYM JEST KLASA W JS
// Klasy powstały w ES6 (2015), Klasy to lukier składniowy, mechanizm jest taki sam jak użycie konstruktorów i prototypów. Jednak pozwalają nam tworzyć obiekty szybciej i prościej. 
//Klasy, podobnie jak konstruktor służą nam do tworzenia nowych obiektów, które posiadają pewne właściwości i metody.

// JAK TWORZYMY KLASY

class Family {
    constructor(name) {
        this.name = name;
    }
}

const nowakowie = new Family('Nowakowie');



// Tworzymy nazwy klas z dużej litery
// Klasa w środku składa się z metod
// konstruktor klasy tworzymy za pomocą specjalnej metody constructor()
// metoda konstuktor służy do tworzenia właściwości i metod (rzadziej) które mają być kopiami w naszych instancjach
// wszystkie pozostałe metody dodane do klasy (oprócz constructor()) będą dodawane do prototypu klasy


// PROTOTYP KLASY
// metody prototypu dodajemy w klasie

class Family2 {
    constructor(name) {
        this.name = name;
        this.addMember = function () {
            console.log('wywołane z instancji obiektu');
        } // przykład niepraktyczny, używać prototyp do dodawania metod
    }
    addMember() {
        console.log('wywołane z prototypu klasy');
    }
}

// w przypadku gdy w prototypie klasy oraz w konstrukorze klasy pojawią się metody lub właściwości z taką samą nazwą instancja obiektu nadpisze je przeciwnie do łańcucha prototypów (najważniejsza jest metoda konstruktora obiektu => Prototyp Obiektu => ... => Prototyp obiektu głównego Object) 

const kowalscy = new Family2('Kowalscy');

// FUNKCJA KONSTRUKTORA A KLASY
class Rodzina {
    constructor(members, ...names) { //użycie operatora RES pozwoli dodawać imiona bezpośrednio do tablicy
        this.members = members;
        this.names = names;
    }
    addMember(newMember) {
        this.names.push(newMember);
        this.members++;
    }
}

const topolewscy = new Rodzina(3, 'Grzes', "Asia", "Fifi");

// WYRAŻENIE KLASY
class Family4 {

} // deklaracja klasy

const Family5 = class {

} // wyrażenie klasy

// METODY STATYCZNE
// są to metody bezpośrednio przypisane do klasy. Metody statystyczne są dostępne tylko z poziomu klasy(instancja nie posiada danej metody)

class Family6 {
    constructor(members, ...names) {
        this.members = members;
        this.names = names;
    }
    addMember(name) {
        this.names.push(name);
        this.members++;
    }

    //metoda statyczna, dostępna tylko z poziomu klasy
    static makeFamily(...members) {
        return members;
    }
}

const tusiakowie = Family6.makeFamily('Tusiak1', 'Tusiak2');

//innym przykładem metody statycznej jest Math.floor()

// WARTO PAMIĘTAĆ O KLASACH

//Hoisting
//klasa nie podlega hoistingowi
class Animal {}

// poniższy sposób tworzenia podlega hoistingowi
function Animal2() {}

//Używanie klas jest bezpieczniejsze przy tworzeniu instancji obiektów

const cat = Animal; //zwróci błąd, brak słowa kluczowego new do utworzenia klasy. Jak widzimy tworzenie instancji obiektu za pomocą klasy jest bezpieczniejsze

const dog = Animal2(); // wywoła funkcję zamiast utworzyć klasę. Każda właściwość this.name, this.age, etc. odwoła się do obiektu Window

//