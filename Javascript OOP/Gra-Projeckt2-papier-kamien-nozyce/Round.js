// będziemy musieli stworzyć instancje tej klasy da każdej tury gry 

class Round {
    constructor() {
        this.options = [
            'scissors',
            'rock',
            'paper'
        ];

        let _resultPlayer = this.drawResult();
        let _resultComputer = this.drawResult();

        //example of results
        // _resultComputer = 'scissors';
        // _resultPlayer = 'rock';

        this.getRoundResults = () => [_resultPlayer, _resultComputer];
    }

    drawResult() {
        const index = Math.floor(Math.random() * this.options.length); //draw number between 0 - 2
        const result = this.options[index];
        // console.log(result);

        return result;
    }
}