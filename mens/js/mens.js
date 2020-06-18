import players from './players.js';
import weeklyResults from './weekly.js'

const rankPlayers = (playerArray) => {
    return playerArray.sort(function (a, b) { return b.wins/b.losses - a.wins/a.losses || b.points - a.points })
}

const updateStandings = (resultsArray) => {
    resultsArray.forEach(async week => {
        await week.results.map((player, index) => {
            players[player.id].wins += player.wins;
            players[player.id].losses += player.losses;
            players[player.id].points += player.points;
        });
    });
}

updateStandings(weeklyResults);
const pContent = document.querySelector('#playerContent');
const playersRanked = rankPlayers(players);
console.log(playersRanked);
const pItems = playersRanked.map((player, index) => `<tr>
                                        <th scope="row">${++index}</th>
                                        <td>${player.name}</td>
                                        <td>${Math.round(player.wins)}</td>
                                        <td>${Math.round(player.losses)}</td>
                                        <td>${player.losses !== 0 ? player.wins/player.losses : Math.round(player.wins)}</td>
                                        <td>${Math.round(player.points)}</td>                
                                    </tr>`)

pContent.innerHTML = pItems.join('');
