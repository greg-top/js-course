class Result {
    static checkWin(draw) {
        const userResult = draw[0];
        const computerResult = draw[1];

        if (userResult === 'paper' && computerResult === 'rock') {
            return true;
        } else if (userResult === 'scissors' && computerResult === 'paper') {
            return true;
        } else if (userResult === 'rock' && computerResult === 'scissors') {
            return true;
        } else if (userResult === computerResult) {
            return 0;
        } else {
            return false;
        }
    }

    static showHandIcon(draw) {

        console.log(draw);


        const icons = [];

        draw.forEach((result, index) => {
            if (result === 'scissors') {
                icons[index] = 'fa-hand-scissors-o';
            } else if (result === 'rock') {
                icons[index] = 'fa-hand-rock-o';
            } else if (result === 'paper') {
                icons[index] = 'fa-hand-paper-o';
            }
        });

        return icons;
    }
}