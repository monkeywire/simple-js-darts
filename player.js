/* The player class
 * This class keeps track of all player specific actions, and data */
function Player(game, playerName) {
    this.playerName = playerName;
    this.game = game;

    this.lastDartThrown = new Dart();
    this.rounds         = new Array(new Round());

    this.scoreAfterLastRound = 0;
}

//Returns true when the player's round is complete.
Player.prototype.addDart = function(dart) {
    this.lastDartThrown = dart;
    this.currentRound().addDart(dart);
    if(this.game.roundIsComplete()) {
        this.endRound();
        return true;
    }
    return false;
}

Player.prototype.endRound = function() {
    this.scoreAfterLastRound = this.score();
    this.rounds.push(new Round());
}

Player.prototype.score = function() {
    //Calls back to the game class since if the
    //players score depends on the game rules
    return this.game.playerScore(this);
}

Player.prototype.currentRound = function() {
    return this.rounds.last();
}

Player.prototype.isWinner = function() {
    //Calls back to the game class since if the player is
    //a winner depends on the game rules
    return this.game.isPlayerWinner(this);
}
