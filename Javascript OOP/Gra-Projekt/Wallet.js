//w grze będziemy musieli stworzyć tylko 1 instancje klasy na cała grę

class Wallet {
    constructor(money) {
        let _money = money;

        //Wszystkie metody muszą zostać utworzone w konstruktorze aby mieć dostęp do prywatnej właściwości _money
        //pobieranie aktualnej zawartoßci portfela
        this.getWalletValue = () => _money;
        // To samo ponizej
        // this.getWalletValue = () => {
        //     return _money;
        // }

        //Sprawdzanie czy użytkownik ma odpowiednią ilość środków
        this.checkCanPlay = value => {
            if (_money >= value) return true; //po spełnieniu warunku metoda zakończy swoje działanie w tej lini kodu
            return false;
        }

        //zmiana obiektu wallet po rundzie gry
        this.changeWallet = (value, type = "+") => {
            if (typeof value === 'number' && !isNaN(value)) {
                if (type === "+") {
                    return _money += value;
                } else if (type === "-") {
                    return _money -= value;
                } else {
                    throw new Error("nieprawidłowy typ działania")
                }
            } else {
                console.log(typeof value);
                throw new Error("Nieprawidłowa liczba");
            }
        }
    }
}

// obiekt testowy - przetestowanie metod w konsoli
// const wallet = new Wallet(200);
// wallet.getWalletValue()
// wallet.checkCanPlay(101);
// wallet.checkCanPlay(301);
// wallet.changeWallet(50, '+');
// wallet.changeWallet(70, '-');
// wallet.changeWallet('70ds', '-');
// wallet.changeWallet(40, 'tjshj');