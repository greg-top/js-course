class Statistics {
    constructor() {
        this.gameResults = [];
        // przykładowa właściwość gameResult
        // gameResult = [
        //     {
        //         win: true,
        //         playerResult: 'P',
        //         computerResult: 'N'
        //     },
        //     {
        //         win: false,
        //         playerResult: 'K',
        //         computerResult: 'N'
        //     },
        //     {
        //         win: 0,
        //         playerResult: 'K',
        //         computerResult: 'K'
        //     }
        // ];
    }
    addGameToStatistics(win, playerResult, computerResult) {
        let gameResult = {
            win,
            playerResult,
            computerResult
        }
        // console.log(gameResult);
        this.gameResults.push(gameResult);
    }
    showGameStats() {
        const games = this.gameResults.length;
        const wins = this.gameResults.filter(result => result.win).length;
        const looses = this.gameResults.filter(result => !result.win && result.win !== 0).length;
        const draws = this.gameResults.filter(result => result.win === 0).length;

        // console.log(`gier: ${games}, wygranych: ${wins}, przegranych: ${looses}, remisów: ${draws}`);

        return [games, wins, looses, draws];

    }
}