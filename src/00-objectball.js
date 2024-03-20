function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        }
    };
}

function numPointsScored(playerName) {
    let game = gameObject();
    for (let team in game) {
        let players = game[team].players;
        if (playerName in players) {
            return players[playerName].points;
        }
    }
    return null; 
}

function shoeSize(playerName) {
    let game = gameObject();
    for (let team in game) {
        let players = game[team].players;
        if (playerName in players) {
            return players[playerName].shoe;
        }
    }
    return null; 
}

function teamColors(teamName) {
    let game = gameObject();
    for (let team in game) {
        if (game[team].teamName === teamName) {
            return game[team].colors;
        }
    }
    return null; 
}

function teamNames() {
    let game = gameObject();
    return [game.home.teamName, game.away.teamName];
}

function playerNumbers(teamName) {
    let game = gameObject();
    for (let team in game) {
        if (game[team].teamName === teamName) {
            let players = game[team].players;
            return Object.values(players).map(player => player.number);
        }
    }
    return null; 
}

function playerStats(playerName) {
    let game = gameObject();
    for (let team in game) {
        let players = game[team].players;
        if (playerName in players) {
            return players[playerName];
        }
    }
    return null; 
}

function bigShoeRebounds() {
    let game = gameObject();
    let maxShoeSize = -Infinity;
    let playerWithMaxShoeSize = null;
    for (let team in game) {
        let players = game[team].players;
        for (let player in players) {
            if (players[player].shoe > maxShoeSize) {
                maxShoeSize = players[player].shoe;
                playerWithMaxShoeSize = player;
            }
        }
    }
    if (playerWithMaxShoeSize) {
        return game.home.players[playerWithMaxShoeSize].rebounds || game.away.players[playerWithMaxShoeSize].rebounds;
    }
    return null; 
}

console.log(numPointsScored("Alan Anderson")); 
console.log(shoeSize("Ben Gordon")); 
console.log(teamColors("Brooklyn Nets")); 
console.log(teamNames()); 
console.log(playerNumbers("Brooklyn Nets")); 
console.log(playerStats("Mason Plumlee")); 
console.log(bigShoeRebounds()); 
