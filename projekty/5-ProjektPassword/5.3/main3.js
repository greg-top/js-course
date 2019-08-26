const input = document.querySelector("input");
const passwords = ['jedEN', 'DwA'];
const messages = ["super", "działa!"]
const div = document.querySelector('div');

// Użycie metody Map do utworzenia tymczasowej tablicy [alternatywa dla foreach]

//metoda map w wyniku swojego działania zwróci nam nową tablicę
//metoda map wymaga zwrócenie elementu do tablicy -> wyjątkiem jest funkcja strzałkowa bez blocku kodu {} gdzie instrukcja return działaautomatycznie, jako w poniższym przykładzie:
const LCPasswords = passwords.map(number => number.toLowerCase()); // test in broswer console

// tutaj metoda map z returnem
const LCPassword2 = passwords.map((password) => {
    return password.toLowerCase();
});

//metoda forEach wykona działanie na tablicy ale nie zwróci nam nowej tablicy
[10, 45, 66].forEach(number => number * 3); // test in broswer console

const showMessage = (e) => {
    div.textContent = '';
    const inputText = e.target.value.toLowerCase();

    //rozwiązanie za pomocą metody map
    LCPassword2.map((password, index) => {
        if (password === inputText) {
            div.textContent = messages[index];
        }
    });

    //rozwiązanie za pomocą petli for
    // for (let i = 0; i <= LCPassword2.length; i++) {
    //     if (LCPassword2[i] === inputText) {
    //         div.textContent = messages[i];
    //     }
    // }
}

input.addEventListener("input", showMessage)