Game_01.prototype = new Game(new Array());

function Game_01(playerNames) {
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

    if(player.score() == player.scoreAfterLastRound && dartsThrown)
        return true;

    return false;
}

Game_01.prototype.roundIsComplete = function() {
    var threeDartsThrown = this.currentPlayer().currentRound().isComplete();

    return threeDartsThrown || this.roundIsBust();
}
