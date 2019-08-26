const btn = document.querySelector('button');
const names = ['Jagienka', 'Dobrawa (Dobrusia)', 'Daria', 'Asia', 'Kira', 'Marysia', 'Anastazja'];
const div = document.querySelector('div');

//losowość 
// Math.random();
// console.log(Math.random());
//console.log(Math.random() * 7); //bo 7 elementów tablicy, wypadnie wynik między 0 - 6.999
//console.log(Math.floor(Math.random() * 7)) //metoda floow odrzuca część ułamkową, wypadnie wynik między 0-6
const nameGenerator = () => {
    const nameIndex = Math.floor(Math.random() * names.length); //sprawdzenie dlugości tablicy
    div.textContent = `Świetnym imieniem będzie ${names[nameIndex]}`;
}

btn.addEventListener('click', nameGenerator);