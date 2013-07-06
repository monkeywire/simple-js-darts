function Round() {
    this.darts = new Array();
}

Round.prototype.addDart = function(dart) {
    this.darts.push(dart);

    if(this.darts.length > 3) {
        throw new Round.RoundException('There are too many darts in the round');
    }
}

Round.prototype.isComplete = function() {
    return this.darts.length == 3;
}

Round.prototype.score = function() {
    var score = 0;
    this.darts.forEach(function(dart) {
        score += dart.getScore();
    })
    return score;
}

Round.prototype.lastDartThrownIsDouble = function() {
    return this.darts.last().isDouble();
}

Round.prototype.numberOfDartsThrown = function() {
    return this.darts.length;
}

Round.RoundException = function(msg) {
    this.message = msg;
    this.name = "RoundExcetpion";
}
