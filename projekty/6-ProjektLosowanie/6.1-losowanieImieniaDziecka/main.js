const btn = document.querySelector('button');
const names = ['Jagienka', 'Dobrawa (Dobrusia)', 'Daria', 'Asia', 'Kira', 'Marysia', 'Anastazja'];
const greetings = ['Uważam, że ', 'Genialne imię to ', 'Zastanów się nad ', 'A co ty na imię ', 'Piękne imię to '];
const div = document.querySelector('div');

//losowość 
// Math.random();
// console.log(Math.random());
//console.log(Math.random() * 7); //bo 7 elementów tablicy, wypadnie wynik między 0 - 6.999
//console.log(Math.floor(Math.random() * 7)) //metoda floow odrzuca część ułamkową, wypadnie wynik między 0-6
const nameGenerator = () => {
    const nameIndex = Math.floor(Math.random() * names.length); //sprawdzenie dlugości tablicy
    const greetingIndex = Math.floor(Math.random() * greetings.length);
    div.textContent = `${greetings[greetingIndex]} ${names[nameIndex]}`;
}

btn.addEventListener('click', nameGenerator);