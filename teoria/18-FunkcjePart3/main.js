// Operator rest (ES6) - wiele elementów podanych jako argumenty do jednej tablicy
//...nazwa (dowolna zgodnie z zasadami dla zmiennej)
// zwraca tablicę (obiekt arguments nie jest tablicą)

function showAllArguments(...items) {
    console.log(items);
    console.log(arguments); //to nie jest tablica tylko obiekt tablicopodobny ARGUMENTS
    return items;
}
// showAllArguments("1", 2, 12, "ab", true, "Adam")

function addAllWords(...words) {
    let txt = "";
    for (let i = 0; i < words.length; i++) {
        // txt += words[i] + "-";
        txt += `${words[i]}-`; //szybszy zapis super string
    }

    // mozemy uzyc teraz metody forEach jako operator rest zwraca tablice - przyklad ponizej
    // words.forEach(function (word) {
    //     // txt += word + "-";
    //     txt += `${word}-`
    // })

    // szybszy zapis powyzszej metody forEach
    // words.forEach(word => txt += `${word}-`) //uzyty zostal zapis strzalkowy (przy 1 parametrze i jednaj instrukcji bloki kodu moga byc pominiete, mozliwy jest zapis (word) => {'${word}-'} )

    console.log(txt);
}
// addAllWords()
// addAllWords("ja", "ty", 2, "Gdańsk")

// dzięki operatorowi rest możemy zbierać pozostałe argumenty (które zostaly umieszczone poza paramterami)

function showUsers(owner, ...others) {
    console.log(`Na imprezie był ${owner}${others.length ? " oraz " + others + "." : "."}`) //przyklad super stringa (template stringa) z uzyciem instrukcji warunkowej (operator trojargumentowy warunkowy)
}

showUsers("Adrian");
showUsers("Adrian", "Jadzia", "Staszek", "Henio");


/* ---------------------------------------- */

// METODY A FUNKCJE
// Metody to funkcje umieszczone w obiektach (poznamy w przyszłości). 

const objectExample = {
    name: "Adam",
    showName: function () {
        console.log("Jan")
    },
    // w ES6 mozemy tworzyc metody jak ponizej => wytlumaczone w dalszej czesci kursu
    showAge() {
        console.log(30);
    }
}

// objectExample.showName();
// objectExample.showAge();

const showName = function () {
    console.log("Jan")
}

// showName();