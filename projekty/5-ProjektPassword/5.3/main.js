// Projekt 5 - Zadanie dla Ciebie 
// Sprawdź czy wpisane w input hasło pasuje do któegoś z hasel w tablicy. Jeśli tak wyświetl wiadomość w <div>
//wielkość liter nie ma znaczenia (wykorzystaj metodę .toUpperCase lub .toLowerCase - pamiętaj, że metody te działają na pojedyńczym elemencie typu string)

const input = document.querySelector("input");
const passwords = ['jedEN', 'DwA'];
const messages = ["super", "działa!"]

const showMessage = (e, index) => {
    //tutaj rozwiązanie
    // PS. nie skupiaj się na niczym innym w zadaniu niż porównanie i wyświetlenie ( nie rób czyszczenia inputa itp. nie są potrzebne, chyba że masz ochotę)
    const text = e.target.value;
    // console.log(text);

    const div = document.querySelector('div');
    div.textContent = '';
    passwords.forEach((password, index) => {
        // console.log(password.toLocaleLowerCase);

        if (password.toLowerCase() === text.toLowerCase()) {
            // console.log(password, index);
            div.textContent = messages[index];
        }
    });

}

input.addEventListener("input", showMessage)