import teams from './teams.js'
import weeklyResults from './weekly.js'
const rankPlayers = (playerArray) => {
    return playerArray.sort(function (a, b) { return b.wins - a.wins || b.points - a.points })
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

const updateCoedStandings = (resultsArray) => {
    resultsArray.forEach(async week => {
        await week.map((player, index) => {
            coedTeams[player.id].wins += player.wins;
            coedTeams[player.id].losses += player.losses;
            coedTeams[player.id].points += player.points;
        });
    });
}

updateStandings(weeklyResults);
const pContent = document.querySelector('#playerContent');
const rList = document.querySelector('#resultList');
const playersRanked = rankPlayers(players);
const pItems = playersRanked.map((player, index) => `<tr>
                                        <th scope="row">${++index}</th>
                                        <td>${player.name}</td>
                                        <td>${player.wins}</td>
                                        <td>${player.losses}</td>
                                        <td>${player.points}</td>                
                                    </tr>`)

pContent.innerHTML = pItems.join('');
