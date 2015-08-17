var Game_01 = require("./game_01");

// Create a game with two players, 'Homer Simpson', and 'Moe'
// And play a game of 301
var game = new Game_01(['Hommer Simpson','Moe'], 3);

// Throw the first round for 'Homeer Simpson'
game.addDart('3', 3);
game.addDart('d20', 20, true);
game.addDart('bull, 50', true);

// Throw next first round for 'Moe'
game.addDart('5');
game.addDart('10', 10)
game.addDart('t3', 9);

console.log(game.playerScoreByIndex(0));

console.log(game.saveState());

var game2 = Game_01.loadState(game.saveState());
