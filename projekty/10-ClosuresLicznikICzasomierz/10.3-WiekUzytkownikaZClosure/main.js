// zbuduj funkcje czy dany uzytkownik moze kupic alkohol

const user = (name = '', age = 25) => {
    let userName = name;
    let userAge = age;

    function showName() {
        console.log(`Czesc ${userName}, ${userAge >= 18 ? 'Mozesz kupic piwo' : 'Nie mozesz kupic piwa'}`);
    }

    return showName;
}

const greg = user('Greg', 18);
const asia = user('Asiulka', 17);

greg();
asia();