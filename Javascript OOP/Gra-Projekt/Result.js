//klasa posiada metody statyczne, nie będziemy tworzyli instancji tej klasy
class Result {
    //konstruktor jest zbyteczny, bo nie będziemy tworzyli instancji tej klasy

    //zwraca informacje ile pieniędzy wygraliśmy w rundzie
    static moneyWinInGame(result, bid) {
        if (result) return 3 * bid;
        else return 0;
    }

    //Zasady gry -> zwraca czy użytkownik wygrał czy przegrał
    static checkWinner(draw) {
        //wygrana gdy wszystkie 3 kolory są takie same lub różne
        if (draw[0] === draw[1] && draw[1] === draw[2] || draw[0] !== draw[1] && draw[1] !== draw[2] && draw[0] !== draw[2]) return true;
        else return false;
    }
}


// Testowanie klas statycznych
// Result.moneyWinInGame(true, 20);
// Result.moneyWinInGame(false, 40);