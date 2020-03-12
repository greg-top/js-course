// będziemy musieli stworzyć instancje tej klasy da każdej tury gry 

class Draw {
    constructor() {
        this.options = [
            'red',
            'green',
            'blue',
        ]
        //prywatna właściwość
        let _result = this.drawResult();
        // przykładowe wartości _result:
        // _result = [
        //     'green',
        //     'green',
        //     'red'
        // ];
        //zwrócenie wartości _result
        this.getDrawResult = () => _result;
    }

    //wylosowanie kolorów, przypisanie początkowej wartości do właściwości _result. Późniejsze wywołanie metody nie nadpisuje wartości _result!!
    drawResult() {
        let colors = [];
        //uzupełnianie poprzez losowanie
        for (let i = 0; i < this.options.length; i++) {
            const index = Math.floor(Math.random() * this.options.length); //wylosowanie indexu 0 -2
            const color = this.options[index];
            // console.log(color);
            colors.push(color);
        }
        // console.log(`wylosowane kolory to: ${colors}`);

        return colors;
    }
}


// obiekt testowy
// const draw = new Draw();