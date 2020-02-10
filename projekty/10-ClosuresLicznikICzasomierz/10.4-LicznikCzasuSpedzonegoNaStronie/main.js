//licznik czasu spedzonego na stronie za pomoca closure

// pseudokod:
// 1.) Stworzyc funkcje startCounter a w niej zmienna let seconds
// 2.) w funkcji stworzyc kolejna funkcje time
// 3.) W funkcji time inkrementowac zmienna seconds
// 4.) W funkcji time wyswietlic stringa 'Spedziles x sekund na stronie'
// 5.) przypisac funkcje startCounter do zmiennej start
// 6.) wywolac funkcje przypisana do zmiennej start w interwale co 1s

const startCounter = (startFrom = 0) => {
    let seconds = startFrom;

    document.body.textContent = 0 + " sekund";

    return () => {
        seconds++;
        console.log(`Spedziles na stronie ${seconds} sekund`);
        document.body.textContent = `Spedziles na strone ${seconds} sekund`;
    }
}

const start = startCounter();

setInterval(start, 1000);