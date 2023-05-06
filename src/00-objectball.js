
function gameObject() {
    const game = {
        home: {
            teamName: "Brooklyn Nets",
            colors: ['Black', 'White'],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    Points: 22,
                    Rebounds: 12,
                    Assist: 12,
                    Steals: 3,
                    Blocks: 1,
                    "Slam Dunks": 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    Points: 12,
                    Rebounds: 12,
                    Assist: 12,
                    Steals: 12,
                    Blocks: 12,
                    "Slam Dunks": 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    Points: 17,
                    Rebounds: 19,
                    Assist: 10,
                    Steals: 3,
                    Blocks: 1,
                    "Slam Dunks": 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    Points: 26,
                    Rebounds: 12,
                    Assist: 6,
                    Steals: 3,
                    Blocks: 8,
                    "Slam Dunks": 5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    Points: 19,
                    Rebounds: 2,
                    Assist: 2,
                    Steals: 4,
                    Blocks: 11,
                    "Slam Dunks": 1
                }
            }

        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ['Turquoise', 'Purple'],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    Points: 10,
                    Rebounds: 1,
                    Assist: 1,
                    Steals: 2,
                    Blocks: 7,
                    "Slam Dunks": 2
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    Points: 12,
                    Rebounds: 4,
                    Assist: 7,
                    Steals: 7,
                    Blocks: 5,
                    "Slam Dunks": 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    Points: 24,
                    Rebounds: 12,
                    Assist: 12,
                    Steals: 4,
                    Blocks: 5,
                    "Slam Dunks": 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    Points: 33,
                    Rebounds: 3,
                    Assist: 2,
                    Steals: 1,
                    Blocks: 1,
                    "Slam Dunks": 0,
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    Points: 6,
                    Rebounds: 12,
                    Assist: 12,
                    Steals: 22,
                    Blocks: 5,
                    "Slam Dunks": 12,
                }
            }
        }
    }
    return game
}
function homeTeamName() {
    let homeObject = gameObject()
    return homeObject.home.teamName
}
function awayTeamName() {
    let awayObject = gameObject()
    return awayObject.away.teamName
}
function numPointsScored(playerName) {
    const gameObj = gameObject();
    for (let team in gameObj) {
        for (let player in gameObj[team].players) {
            if (player === playerName) {
                return gameObj[team].players[player].Points
            }
        }
    }
}
numPointsScored("Brook Lopez")
function shoeSize(playerName) {
    const gameObj = gameObject();
    for (const team in gameObj) {
        for (const player in gameObj[team].players) {
            if (player === playerName) {
                return gameObj[team].players[player].shoe
            }
        }
    }
}
function teamColors(teamName) {
    const gameObj = gameObject();

    for (let team in gameObj) {
        if (gameObj[team].teamName === teamName) {
            return gameObj[team].colors;
        }
    }
}
function teamNames() {
    const gameObj = gameObject();
    const teamNamesArr = [];
    for (let team in gameObj) {
        teamNamesArr.push(gameObj[team].teamName);
    }
    return teamNamesArr;
}
function playerNumbers(teamName) {
    const gameObj = gameObject();

    for (let team in gameObj) {
        if (gameObj[team].teamName === teamName) {
            const jerseyNumsArr = [];
            for (let player in gameObj[team].players) {
                const playerObj = {};
                playerObj.name = player;
                playerObj.number = gameObj[team].players[player].number;
                jerseyNumsArr.push(playerObj);
            }
            return jerseyNumsArr;
        }
    }
}
function playerStats(playerName) {
    const gameObj = gameObject();
    for (let team in gameObj) {
        const playersObj = gameObj[team].players;
        if (playerName in playersObj) {
            return playersObj[playerName];
        }
    }
}
function bigShoeRebounds() {
    const gameObj = gameObject();
    let largestShoeSize = 0;
    let playerWithLargestShoeSize;
    for (let team in gameObj) {
        const playersObj = gameObj[team].players;
        for (let playerName in playersObj) {
            const playerObj = playersObj[playerName];
            const playerShoeSize = playerObj.shoe;
            if (playerShoeSize > largestShoeSize) {
                largestShoeSize = playerShoeSize;
                playerWithLargestShoeSize = playerObj;
            }
        }
    }
    return playerWithLargestShoeSize.Rebounds;
}
function mostPointsScored() {
    const gameObj = gameObject();
    let mostPoints = 0;
    let playerWithMostPoints = null;
    for (let team in gameObj) {
        const playersObj = gameObj[team].players;
        for (let player in playersObj) {
            if (playersObj[player].points > mostPoints) {
                mostPoints = playersObj[player].points;
                playerWithMostPoints = player;
            }
        }
    }
    return playerWithMostPoints;
}

