const chars = 'ABCDEFGHIJKLMNOPQRSTUVYWZabcdefghijklmnopqrstuvqyz0123456789!@#$%%^&*()_+-=';
const codes = Array.from(chars); //wygenerowanie tablict ze stringa z ES6, działa lepiej niż metoda split

const btn = document.querySelector('button');
const section = document.querySelector('section');

const codesNumber = 1000;
const charsNumber = 18;

const codesGenerator = () => {
    section.innerHTML = '';
    for (let i = 0; i < codesNumber; i++) {
        // section.innerHTML += `<p>${i}: code</p>`; // ta opcja jest bardzo wolna, lepiej jest utworzyć nowy element i dodac go do DOM
        // const code = 'tekst';
        let code = '';
        for (let i = 0; i < charsNumber; i++) {
            //metoda z użyciem tablicy znaków
            const codeIndex = Math.floor(Math.random() * codes.length);
            code += codes[codeIndex];

            //metoda z użyciem stringa ze znakami
            // const charsIndex = Math.floor(Math.random() * chars.length);
            // code += chars[charsIndex];

        }
        const p = document.createElement('p');
        p.textContent = `Password ${i}: ${code}`;
        section.appendChild(p);
    }
};

btn.addEventListener('click', codesGenerator);