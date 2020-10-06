import teams from './fixtures/teams.js';


export const rankTeams = (teamArray) => {
    return teamArray.sort(function (a, b) { return b.wins/b.losses - a.wins/a.losses || b.points - a.points })
}

export const updateCoedStandings = (resultsArray) => {
    resultsArray.forEach(async week => {
        await week.results.map((team, index) => {
            teams[team.id].wins += team.wins;
            teams[team.id].losses += team.losses;
            teams[team.id].points += team.points;
        });
    });
}