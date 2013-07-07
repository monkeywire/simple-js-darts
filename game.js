/* The main Game class
 * All variations of darts are derived from this class.
 * This is the main game 'loop', though it is not actually a loop.
 * The addDart method should be called every time a player throws a dart.
 *
 * This class contains many helper methods to track the progress and
 * status of the game.
 */
function Game(playerNames) {
    this.players = new Array();

    this.playerTurn = 0;
    this.round = 1;
    this.winner = undefined;
    this.updateView = function() {};

    var that = this;
    playerNames.forEach(function(playerName) {
        that.players.push(new Player(that, playerName));
    })
}

Game.prototype.addDart = function(name, score, isDouble) {
    var dart = new Dart(name, score, isDouble);

    var wasEndOfRound = this.currentPlayer().addDart(dart);


    if(this.currentPlayer().isWinner()) {
        this.winner = this.playerTurn;
        this.updateView();
        return true;
    }

    if(wasEndOfRound) {
        this.nextPlayer();
    }

    this.updateView();
    return false;
}

Game.prototype.currentPlayer = function() {
    return this.players[this.playerTurn]
}

Game.prototype.nextPlayer = function() {
    this.playerTurn++;

    if(this.playerTurn >= this.players.length) {
        this.playerTurn = 0;
        this.round++;
    }
}

Game.prototype.playerScoreByIndex = function(index) {
    player = this.players[index];
    return this.playerScore(player);
}

Game.prototype.currentPlayerName = function() {
    return this.currentPlayer().playerName;
}

// A callback method called after the game adds the new dart
Game.prototype.updateView = function() { /*empty*/ }

/* You must override these methods in the game variation class. */
// All player is winner checks call this method.
Game.prototype.currentPlayerIsWiner = function() { /*empty*/ }
// All score checks call this method.
Game.prototype.playerScore = function(player) { /*empty*/ }
