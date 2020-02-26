import teams from 'js/teams.js'
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

const weeklyResults = [
    [
        { id: 0, wins: 2, losses: 1, points: 6 },
        { id: 1, wins: 2, losses: 1, points: 4 },
        { id: 2, wins: 3, losses: 0, points: 8 },
        { id: 3, wins: 1, losses: 2, points: 3 },
        { id: 4, wins: 2, losses: 1, points: 7 },
        { id: 5, wins: 1, losses: 2, points: 2 },
        { id: 6, wins: 0, losses: 3, points: 0 },
        { id: 7, wins: 2, losses: 1, points: 5 },
        { id: 8, wins: 2, losses: 1, points: 9 },
        { id: 9, wins: 0, losses: 0, points: 0 },
        { id: 10, wins: 0, losses: 0, points: 0 },
        { id: 11, wins: 0, losses: 0, points: 0 },
        { id: 12, wins: 0, losses: 0, points: 0 },
        { id: 13, wins: 0, losses: 0, points: 0 },
        { id: 14, wins: 0, losses: 0, points: 0 }
    ],
    [
        { id: 0, wins: 2, losses: 1, points: 6 },
        { id: 1, wins: 2, losses: 1, points: 4 },
        { id: 2, wins: 3, losses: 0, points: 8 },
        { id: 3, wins: 1, losses: 2, points: 3 },
        { id: 4, wins: 2, losses: 1, points: 7 },
        { id: 5, wins: 1, losses: 2, points: 2 },
        { id: 6, wins: 0, losses: 3, points: 0 },
        { id: 7, wins: 2, losses: 1, points: 5 },
        { id: 8, wins: 2, losses: 1, points: 9 },
        { id: 9, wins: 0, losses: 0, points: 0 },
        { id: 10, wins: 0, losses: 0, points: 0 },
        { id: 11, wins: 0, losses: 0, points: 0 },
        { id: 12, wins: 0, losses: 0, points: 0 },
        { id: 13, wins: 0, losses: 0, points: 0 },
        { id: 14, wins: 0, losses: 0, points: 0 }
    ]
]
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
