import teams from './teams.js'
import weeklyResults from './weekly.js'
const rankTeams = (teamArray) => {
    return teamArray.sort(function (a, b) { return b.wins - a.wins || b.points - a.points })
}

const updateCoedStandings = (resultsArray) => {
    resultsArray.forEach(async week => {
        await week.map((team, index) => {
            teams[team.id].wins += team.wins;
            teams[team.id].losses += team.losses;
            teams[team.id].points += team.points;
        });
    });
}

updateCoedStandings(weeklyResults);
const pContent = document.querySelector('#teamContent');
const teamsRanked = rankTeams(teams);
const pItems = teamsRanked.map((team, index) => `<tr>
                                        <th scope="row">${++index}</th>
                                        <td>${team.name}</td>
                                        <td>${team.wins}</td>
                                        <td>${team.losses}</td>
                                        <td>${team.points}</td>                
                                    </tr>`)

pContent.innerHTML = pItems.join('');
