import players from './fixtures/players.js';
import weeklyResults from './fixtures/weekly.js'
import {
    updateStandings,
    rankPlayers,
} from './mensService.js'
updateStandings(weeklyResults);
const pContent = document.querySelector('#playerContent');
const playersRanked = rankPlayers(players);
console.log(playersRanked);
const pItems = playersRanked.map((player, index) => `<tr>
                                        <th scope="row">${++index}</th>
                                        <td>${player.name}</td>
                                        <td>${Math.round(player.wins)}</td>
                                        <td>${Math.round(player.losses)}</td>
                                        <td>${player.losses !== 0 ? (player.wins/player.losses).toFixed(2) : Math.round(player.wins)}</td>
                                        <td>${Math.round(player.points)}</td>                
                                    </tr>`)

pContent.innerHTML = pItems.join('');