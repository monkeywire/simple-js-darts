/* The Game_01 Class
 * This extends the Game class.  This class holds
 * all the rules for the x01 dart game variation.
 */
 var Game = require("./game");
 var Player = require("./player");
 
Game_01.prototype = new Game(new Array());

function Game_01(playerNames, gameScore) {
    //Find the winning game score
    this.gameScore = gameScore * 100 + 1;
    Game.apply(this, arguments);
}

Game_01.prototype.isPlayerWinner = function(player) {
    var score        = player.score() == this.gameScore;
    var doubleThrown = player.lastDartThrown.isDouble;

    if(score && doubleThrown)
        return true;

    return false;
}

Game_01.prototype.playerScore = function(player) {
    var score = 0;
    var doubleThrown = this.currentPlayer().lastDartThrown.isDouble;

    var that = this;
    player.rounds.forEach(function(round) {
        if(score + round.score() < (that.gameScore - 1)) {
            score += round.score();
        }

        if((score + round.score() == that.gameScore) && doubleThrown) {
            score += round.score();
        }
    })
    return score;
}

Game_01.prototype.roundIsBust = function() {
    var player = this.currentPlayer()
    var dartsThrown = player.currentRound().numberOfDartsThrown() > 0;

    if(dartsThrown &&  player.score() == 0)
        return false;

    if(player.currentRound().score > 0 && player.score() == player.scoreAfterLastRound && dartsThrown)
        return true;

    return false;
}

Game_01.prototype.roundIsComplete = function() {
    var threeDartsThrown = this.currentPlayer().currentRound().isComplete();

    return threeDartsThrown || this.roundIsBust();
}

Game_01.prototype.saveState = function() {
    var i = 0;
    var players = new Array();
    this.players.forEach(function(player) {
        players.push(new Object);
        players[i].playerName = player.playerName;
        players[i].lastDartThrown = eval(player.lastDartThrown);
        players[i].rounds = eval(player.rounds);
        players[i].scoreAfterLastRound = player.scoreAfterLastRound;
        i++;
    });
    
    var state = {
        "players": players,
        "playerTurn": this.playerTurn,
        "playerNames": this.playerNames,
        "round": this.round,
        "winner": this.winner
    }
    
    return JSON.stringify(state);
}

Game_01.loadState = function(jsonState) {
    var state = JSON.parse(jsonState);
    var game = new Game_01(state.playerNames, 3);
    var i = 0;
    state.players.forEach(function(player) {
        game.players[i].lastDartThrown = player.lastDartThrown;
        game.players[i].rounds = player.rounds;
        game.players[i].scoreAfterLastRound = player.scoreAfterLastRound;
        i++;     
    });  
    
    game.playerTurn = state.playerTurn;
    game.round = state.round;
    game.winner = state.winner;
    
    return game;
}

module.exports = Game_01;