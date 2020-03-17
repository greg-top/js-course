// link do gry: https://websamuraj.pl/examples/js/gra/ 

class Game {
    constructor(startMoney) {
        //utworzenie nowego obiektu statistics 
        this.stats = new Statistics();
        //utworzenie nowego obiektu wallet
        this.wallet = new Wallet(startMoney);

        //kliknięcie przycisku zakręć
        document.getElementById('start').addEventListener('click', this.startGame.bind(this)); //zapobiegnięcie utraty wiązania this z obiektem game. Bez metody bind this utworzyłby wiązanie z elementem button o id = start (button 'zakreć')!!

        //pobranie elementów DOM
        this.boards = [...document.querySelectorAll('div.color')]; //pola gry
        this.inputBid = document.getElementById('bid'); //input stawki gry
        this.spanWallet = document.querySelector('.panel span.wallet'); //kwota portfela
        this.spanResult = document.querySelector('.score span.result'); //Wygrana/przegrana
        this.spanGames = document.querySelector('.score span.number'); //ilość rozegranych gier
        this.spanWins = document.querySelector('.score span.win'); //ilość zwycięstw
        this.spanLosses = document.querySelector('.score span.loss'); //ilość porażek

        //renderowanie gry (default)
        this.render();
    }

    render(colors = ['#999', '#777', '#999'], money = this.wallet.getWalletValue(), result = '', stats = [0, 0, 0], bid = 0, wonMoney = 0) {
        console.log('renderowanie gry - Gramy!!');

        //renderowanie początkowych wartości gry
        this.boards.forEach((board, index) => board.style.backgroundColor = colors[index]);

        this.spanWallet.textContent = money;

        if (result) {
            result = `Wygrałeś ${wonMoney}$`;
        } else if (!result && result !== '') {
            result = `Przegrałeś ${bid}$`;
        }

        this.spanResult.textContent = result;

        this.spanGames.textContent = stats[0];

        this.spanWins.textContent = stats[1];

        this.spanLosses.textContent = stats[2];
    }

    startGame() {
        console.log('nowa runda');
        //console.log(this); //przed utratą wiązania z obiektem użyliśmy metody bind() w momencie wywołania metody startGame() na przycisku id=start (przycisk 'zakręć')!

        // sprawdzenie czy podana kwota zakładu jest prawidłowa
        if (this.inputBid.value < 1) return alert('Zakład gry musi być większy od zera');

        //pobranie wartości zakładu z input.bid
        const bid = Math.floor(this.inputBid.value); //zaokrąglenie w dół i konwersja do typu Number. Domyślna wartość z inputa to 'string'

        //sprawdzenie czy użytkownik ma odpowiednią ilość środków aby zagrać
        if (!this.wallet.checkCanPlay(bid)) {
            return alert('Masz za mało środków lub podana została nieprawidłowa wartość');
        }

        //zabranie wartości bid z portfela (użytkownik obstawił zakład)
        this.wallet.changeWallet(bid, '-');

        //stworzenie instancji obiektu draw (losowania), za każdym razem jak użytkownik kliknie button id=start ('zakręć') to tworzymy nową instancje obiektu draw. Używamy słowa kluczowego this aby dodać nową właściwość do obiektu game!!
        this.draw = new Draw();
        // console.log(draw);

        //zapisanie kolorów z losowania do stałej colors. Zostanie użyta do renderowania widoku gry po każdej rundzie
        const colors = this.draw.getDrawResult();
        console.log(`Kolory z aktywnej rozgrywki: ${colors}`);

        //sprawdzenie czy gracz wygrał rundę, przekazujemy stałą colors aby sprawdzić warunki wygranej w metodzie statycznej Result.checkWinner(colors);
        const win = Result.checkWinner(colors);
        console.log(`Czy gracz wygrał? ${win}`);

        //sprawdzenie czy gracz wygrał jakieś pieniądze
        const wonMoney = Result.moneyWinInGame(win, bid);
        // console.log(`Użytkownik wygrał ${wonMoney}$`);

        //dodanie środków do portfela gracza
        const money = this.wallet.changeWallet(wonMoney); //domyślnie 2 parametr to '+'
        // this.wallet.changeWallet(wonMoney, '+');
        console.log(money);


        //Update statystyk gry 
        this.stats.addGameToStatistics(win, bid);
        console.log(`stats = ${this.stats}`);


        //renderowanie widoku po turze gry (z nowymi wartościami parametrów)
        this.render(colors, money, win, this.stats.showGameStatistics(), bid, wonMoney);
    }
}