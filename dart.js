function Dart(name, score, isDouble) {
    this.name = name;
    this.score = score;
    this.isDouble = isDouble || false;

    this.getScore = function() {
        return this.score;
    }

    this.getName = function() {
        return this.name;
    }
}
