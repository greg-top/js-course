//Metody tablicowe

const arr = [34, 219, 445, 67, 345];

//metoda FILTER
// metoda filter zwraca nowa tablice, wartosci zwrocone musza spelniac warunek w funkcji callback (musza miec wartosc TRUE)
const oddNumbers = arr.filter((number) => number % 2);
const evenNumbers = arr.filter((number) => !(number % 2));
const bigNumbers = arr.filter(number => number > 100);

// metoda MAP
// metoda map zwraca nowa tablice, wykonuje ona dzialanie na nowym elemencie a wynik dzialania jest przekazywany do nowej tablicy

const double = arr.map(item => item * 2);
const people = arr.map(item => `${item} osob`);
const oddNumbersMap = arr.map(item => item % 2 ? item : null); // w tym przypadku tablica bd zawierala elementy null dla liczb parzystych. 

// metoda FOREACH
// metoda foreach nie zwraca nam nowej tablicy, ciagle pracuje na tym samym elemencie

arr.forEach((item, index) => arr[index] = item * 2);