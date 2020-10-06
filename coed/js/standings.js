import teams from './fixtures/teams.js';
import weeklyResults from './fixtures/weekly.js'
import {
    updateCoedStandings,
    rankTeams,
} from './coedService.js'
updateCoedStandings(weeklyResults);
const pContent = document.querySelector('#teamContent');
const teamsRanked = rankTeams(teams);
console.log(teamsRanked);
const pItems = teamsRanked.map((team, index) => `<tr>
                                        <th scope="row">${++index}</th>
                                        <td>${team.name}</td>
                                        <td>${Math.round(team.wins)}</td>
                                        <td>${Math.round(team.losses)}</td>
                                        <td>${team.losses !== 0 ? (team.wins/team.losses).toFixed(2) : Math.round(team.wins)}</td>
                                        <td>${Math.round(team.points)}</td>                
                                    </tr>`)

pContent.innerHTML = pItems.join('');