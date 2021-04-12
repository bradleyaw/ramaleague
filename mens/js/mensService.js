import players from './fixtures/players.js';

const cmp = (a, b) => (a > b) - (a < b);

export const rankPlayers = (playerArray) => {
    return playerArray.sort(function (a, b) {
        const aWinLoss = Number.isNaN(a.wins/a.losses) ? 1 : a.wins/a.losses;
        const bWinLoss = Number.isNaN(b.wins/b.losses) ? 1 : b.wins/b.losses;
        console.log(aWinLoss)
        console.log(bWinLoss)
        return cmp(bWinLoss, aWinLoss) || cmp(b.points,a.points) 
    })
}

export const updateStandings = (resultsArray) => {
    resultsArray.forEach(async week => {
        await week.results.map((player, index) => {
            players[player.id].wins += player.wins;
            players[player.id].losses += player.losses;
            players[player.id].points += player.points;
        });
    });
}

