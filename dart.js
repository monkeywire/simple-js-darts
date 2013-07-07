/* The dart class
 * The dart class tracks the name, score, and properties of each
 * dart that was thrown.
 *
 * The dart class is a member of the Round class.  In this way
 * each round will have 3 darts assigned to it.  The Round class
 * in return is assigned to the Player class so each player class
 * tracks it's own darts and round.
 */
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
