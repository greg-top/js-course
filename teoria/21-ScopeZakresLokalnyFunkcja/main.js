/* ZAKRES LOKALNY (FUNKCJA) */


// Przykład 1

// Jeśli zakres lokalny tworzony jest przez funkcje to sposób deklaracji nie ma znacznie (istniało przed ES6).

var varFun = "a";
let letFun = "b";
const constFun = "c";


function variablesInFunction() {

    var inFunction = "jestem";
    let varFun = 0;
    varFun = 4;
    // console.log(varFun);
    // console.log(inFunction);
    let letFun = 5;
    // const constFun = 6;
    // console.log(funInFun); //bd blad, nie mozna przejsc z zakresu nadrzednego do podrzednego

    function showVariable() {
        // const constFun = "funkcja w funkcji";
        varFun = "nadpisuje wartość zmiennej z wyższego zakresu";
        let funInFun = "lokalny w lokalnym"
        console.log(varFun);
        console.log(letFun);
        console.log(constFun);
        //Zmienne zadeklarowane w zakresach wyżyszych są widoczne w zakresie zagnieżdzonym (również te zadeklarowane w zakresie globalnym), ale mogą być przysłonięte przez własny zakres (czy kolejny zakres nadrzędny).
    }
    showVariable();
};

variablesInFunction();

// showVariable(); //bd blad, funkcja istnieje w zakresie lokalnym innej funkcji wiec nie da sie jej wywolac w zakresie globalnym

// Funkcja tworzy zakres lokalny dla zmiennych zadeklarowanych za pomocą const var i let.

// PRZYKŁAD 2


function calculate(a, b) {
    // const a = a; // bd blad, w tym zakresie nazwa zmiennej a jest zajeta
    // const b = b; // bd blad jak powyzej
    let number1 = a;
    let number2 = b;

    // console.log(a);
    // console.log(b);
    // console.log(number1);
    // console.log(number2);


    function add(x, y) {
        x = 10;
        console.log(x + y);
    }
    // add(number1, number2);
}

const firstNumber = 10
// calculate(firstNumber, 3)


// PRZYKŁAD 3

function calculate2(a, b) {
    // const a = a;
    // const b = b;
    const number1 = a;
    const number2 = b;

    add2()

}

function add2() {
    // number2 = 10;
    // const number2 = 10;
    // console.log(number1 + number2) //bd blad, poniewaz deklaracja funkcji wystapila w zakresie globalnym, aby mozna bylo odwolac sie do zmiennych number1 i number2 ta funkcja musialaby byc zadeklarowana w funkcji calculate2
}

calculate2(2, 3)