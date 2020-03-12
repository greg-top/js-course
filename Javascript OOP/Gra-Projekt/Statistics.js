//w grze będziemy musieli stworzyć tylko 1 instancje klasy na cała grę

class Statistics {
    constructor() {
        this.gameResults = [];
        //przykładowe wartości właściowści gameResults
        // this.gameResults = [{
        //         win: true,
        //         bid: 2
        //     },
        //     {
        //         win: false,
        //         bid: -3
        //     }
        // ];
    }
    // wszystkie metody mogą zostać utworzone w prototypie ponieważ korzystamy w nich z publicznej właściwości gameResults;

    //dodaj informacje z tury gry
    addGameToStatistics(win, bid) {
        // let gameResult = {
        //     win: win,
        //     bid: bid
        // }
        // szybszy zapis powyższej metody
        let gameResult = {
            win,
            bid
        }
        console.log(gameResult);
        this.gameResults.push(gameResult);
    }

    //metoda ma zwrócić wartość właściwości gameResults
    showGameStatistics() {
        let games = this.gameResults.length;
        let wins = this.gameResults.filter(result => result.win).length; //zwraca nową tablicę gdzie wszystkie elementy zwracają true, następnie za pomocą metody length zwracamy ilość elementów w nowo utworzonej tablicy
        let losses = this.gameResults.filter(result => !result.win).length;

        console.log(`gier: ${games}, wygranych: ${wins}, przegranych: ${losses}`);


        return [games, wins, losses]
        // return liczbaGier, liczbaWygranych, liczbaPorażek

    }
}

// const stats = new Statistics();
// stats.addGameToStatistics(true, 2);
// stats.addGameToStatistics(false, -10);
// stats.addGameToStatistics(false, -6);
// stats.gameResults;

// stats.showGameStatistics();