/* The Game_01 Class
 * This extends the Game class.  This class holds
 * all the rules for the x01 dart game variation.
 */
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
        var newScore = score + round.score();
        if((newScore < (that.gameScore - 1)) || (newScore == that.gameScore && doubleThrown)) {
            score = newScore;
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
