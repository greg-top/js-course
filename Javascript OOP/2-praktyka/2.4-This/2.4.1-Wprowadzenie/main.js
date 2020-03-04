'use strict' // tryb ścisły, pozwala na wychwytywanie problemów, polecany do używania w kodzie ES5, od ES6 tryb śisły jest zaimplementowany do wielu mechanizmów automatycznie (np. klasy)

/* --- THIS --- */

this //obiekt globalny, w przypadku przeglądarki będzie to obiekt Window

//this w funkcji nabiera wiązania w momencie wywołania funkcji a nie jej deklaracji
const fn = function () {
    console.log(this.name);
}
//fn(); //this znowu się odwołuje do obiektu Window


const obj = {
    name: "Adam",
    fn: fn
}

obj.fn()

document.addEventListener('click', function () {
    console.log(this);
    const inside = function () {
        'use strict';
        console.log(this);
    }
    inside();
})

//CO TO JEST THIS


//DLACZEGO THIS JEST POTRZEBNE

//KIEDY WIĄZANIE THIS POWSTAJE

//JAK POWSTAJE WIĄZANIE THIS (ZASADY)