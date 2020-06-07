import players from './players.js';
import weeklyResults from './weekly.js'
console.log('hey')
console.log(weeklyResults)
console.log(players)
const rankPlayers = (playerArray) => {
    return playerArray.sort(function (a, b) { return b.wins/b.losses - a.wins/a.losses || b.points - a.points })
}

const updateStandings = (resultsArray) => {
    resultsArray.forEach(async week => {
        await week.map((player, index) => {
            players[player.id].wins += player.wins;
            players[player.id].losses += player.losses;
            players[player.id].points += player.points;
        });
    });
}

updateStandings(weeklyResults);
const pContent = document.querySelector('#playerContent');
const playersRanked = rankPlayers(players);
const pItems = playersRanked.map((player, index) => `<tr>
                                        <th scope="row">${++index}</th>
                                        <td>${player.name}</td>
                                        <td>${player.wins}</td>
                                        <td>${player.losses}</td>
                                        <td>${typeof(player.wins/player.losses) === 'integer' ? player.wins/player.losses : player.wins}</td>
                                        <td>${Math.round(player.points)}</td>                
                                    </tr>`)

pContent.innerHTML = pItems.join('');
