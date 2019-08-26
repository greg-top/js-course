// Projekt 5 - Zadanie dla Ciebie 
// Sprawdź czy wpisane w input hasło pasuje do któegoś z hasel w tablicy. Jeśli tak wyświetl wiadomość w <div>
//wielkość liter nie ma znaczenia (wykorzystaj metodę .toUpperCase lub .toLowerCase - pamiętaj, że metody te działają na pojedyńczym elemencie typu string)

const input = document.querySelector("input");
const passwords = ['jedEN', 'DwA'];
const messages = ["super", "działa!"]

const passwordsTemp = [];

// konwersja hasel do tablicy tymczasowej
passwords.forEach((password, index) => {
    passwordsTemp[index] = password.toLowerCase();
});

const showMessage = (e, index) => {
    //tutaj rozwiązanie
    // PS. nie skupiaj się na niczym innym w zadaniu niż porównanie i wyświetlenie ( nie rób czyszczenia inputa itp. nie są potrzebne, chyba że masz ochotę)

    //czyszczenie wiadomosci na start
    document.querySelector('div').textContent = '';

    const textTemp = e.target.value.toLowerCase();

    passwordsTemp.forEach((passwordTemp, index) => {
        if (passwordTemp === textTemp) {
            document.querySelector('div').textContent = messages[index];
        }
    });

}

input.addEventListener("input", showMessage);