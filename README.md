###Simple JS Darts
Simple JS Darts is not a darts game, or a dart AI.  What Simple JS Darts is,
is a simple Java Script that tracks player scores, rounds, darts thrown, and
determine winners.

Usage of the program simply involves telling it what dart was thrown.  The rest
of the logic is handled by the script.  There are many helper methods to help
track progress of the game that can be used to update views or anything else
that you want to be able to track game progress with.

#Simple Example:

```js
// Create a game with two players, 'Homer Simpson', and 'Moe'
// And play a game of 301
game = new Game_01(['Hommer Simpson','Moe'], 3);

// Throw the first round for 'Homeer Simpson'
game.addDart('3', 3);
game.addDart('d20', 20, true);
game.addDart('bull, 50', true);

// Throw next first round for 'Moe'
game.addDart('5');
game.addDart('10', 10)
game.addDart('t3', 9);
```

#Another Simple Example:

```js
// Create a game with one players, 'Mayor `Joe` Quimby'
// And play a game of 501
game = new Game_01(['Mayro Quimby'], 5);

// Throw the first round for 'Mayor `Joe` Quimby'
game.addDart('three', 3);
game.addDart('double 20', 40, true);
game.addDart('iris', 25);
```

##A few things to note:
* The label of the dart thrown can be anything you want.
* You can have as many players as you want
* To change the goal in x01, use the second parameter in the constructor for game.


##Some Helper Methods of Note:
```js
game = new Game_01(['Lisa Simpson', 'Santas Little Helper'], 3);

game.playerScoreByIndex(0);          // Returns the score for 'Lisa Simpson'
game.playerTurn                      // The index of the current player
game.currentPlayerName()             // The name of the current player
game.addDart(label, value, isDouble) // Returns true if the dart wins the game
game.round                           // Returns the current round of play
```

##Callback
There is one callback that is called every time addDart is called

```js
game.updateView = function() { // your callback function };
```
