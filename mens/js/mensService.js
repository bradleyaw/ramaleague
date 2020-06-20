import players from './fixtures/players.js';

export const rankPlayers = (playerArray) => {
    return playerArray.sort(function (a, b) { return b.wins/b.losses - a.wins/a.losses || b.points - a.points })
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

