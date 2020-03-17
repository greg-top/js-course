class Game {
    constructor() {
        this.stats = new Statistics();

        // click play Game button
        document.getElementById('start').addEventListener('click', this.gameStart.bind(this));

        this.playerSpan = document.querySelector('.player-result');
        this.computerSpan = document.querySelector('.computer-result');
        this.gameResultSpan = document.querySelector('.game-result');

        this.statisticsGamesSpan = document.querySelector('.game-statistics .games');
        this.statisticsWinsSpan = document.querySelector('.game-statistics .wins');
        this.statisticsLoosesSpan = document.querySelector('.game-statistics .looses');
        this.StatisticsDrawsSpan = document.querySelector('.game-statistics .draws');

        //render default game view
        this.render();
    }

    gameStart() {
        console.log('===New Round!===');
        this.gameRound = new Round();
        const gameResult = this.gameRound.getRoundResults();
        // console.log(gameResult);
        const playerWin = Result.checkWin(gameResult);
        // console.log(playerWin);
        const handIcons = Result.showHandIcon(gameResult);
        this.stats.addGameToStatistics(playerWin, gameResult[0], gameResult[1]);

        this.render(handIcons, playerWin, this.stats.showGameStats())
        console.log('================');
    }

    render(handIcons = ['fa-question-circle-o', 'fa-question-circle-o'], drawResult = '', gameStats = [0, 0, 0, 0]) {
        // console.log('Render Game ');

        this.playerSpan.className = 'fa player-result';
        this.playerSpan.classList.add(handIcons[0]);
        this.computerSpan.className = 'fa computer-result';
        this.computerSpan.classList.add(handIcons[1]);

        this.gameResultSpan.className = 'game-result alert';
        if (drawResult) {
            this.gameResultSpan.textContent = 'You WON!'
            this.gameResultSpan.classList.add('alert-success');
        } else if (!drawResult && drawResult !== '' && drawResult !== 0) {
            this.gameResultSpan.textContent = 'You LOST!'
            this.gameResultSpan.classList.add('alert-danger');
        } else if (drawResult === 0) {
            this.gameResultSpan.textContent = "DRAW!";
            this.gameResultSpan.classList.add('alert-warning');
        } else {
            this.gameResultSpan.textContent = '';
        }

        this.statisticsGamesSpan.textContent = gameStats[0];
        this.statisticsWinsSpan.textContent = gameStats[1];
        this.statisticsLoosesSpan.textContent = gameStats[2];
        this.StatisticsDrawsSpan.textContent = gameStats[3];
    }
}