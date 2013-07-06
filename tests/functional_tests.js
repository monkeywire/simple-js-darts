
test( 'Add a dart to a player', function() {
    var game = new Game_01(new Array('Player1'), 3);
    game.addDart('bull', 50, true);
    equal(game.currentPlayer().score(), 50, 'Value of score returned');
});

test('Round number advances on bust', function() {
    var game = new Game_01(new Array('Player1', 'Player2'), 3);

    //round1
    //player1
    game.addDart('bull', 50, true); //50
    game.addDart('d20', 40, true);  //90
    game.addDart('t20', 60);        //150

    //player2
    game.addDart('fakeDart', 100);  //100
    game.addDart('t20', 60);        //160
    game.addDart('t20', 60);        //220

    //round2
    //player1
    game.addDart('iris', 25);     //175
    game.addDart('10', 10);       //185
    game.addDart('t10', 30);      //215

    //player2
    /* TODO Player turn should end as soon as he busts*/
    game.addDart('t20', 60);      //280
    game.addDart('t20', 60);      //340 Bust!

    equal(game.playerScoreByIndex(1), 220, 'Player score correct after bust');
    equal(game.round, 3, 'Advanced to next round after bust');
    equal(game.playerTurn, 0, 'Advanced to the next player after bust');

});

test('Player wins the game', function() {
    var game = new Game_01(new Array('Player1'), 3);
    game.addDart('test', 295);
    var result = game.addDart('d3', 6, true);
    ok(result, 'Player won the game');
});

test('Play a round of 301', function() {
    var game = new Game_01(new Array('Player1', 'Player2'), 3);

    //player1
    game.addDart('bull', 50, true);
    game.addDart('d20', 40, true);
    game.addDart('t20', 60);

    //player2
    game.addDart('iris', 25);
    game.addDart('10', 10);
    game.addDart('t10', 30);

    equal(game.playerScoreByIndex(0), 150, 'Player1 score after round');
    equal(game.playerScoreByIndex(1), 65, 'Player2 score after round');
});

test('Play a game of 301!', function() {
    var game = new Game_01(new Array('Player1', 'Player2'), 3);

    //round1
    //player1
    ok(game.addDart('bull', 50, true) != true, 'Player1 turn 1 round 1'); //50
    ok(game.addDart('d20', 40, true) != true, 'Player1 turn 2 round 1');  //90
    ok(game.addDart('t20', 60) != true, 'Player1 turn 3 round 1');        //150

    //player2
    ok(game.addDart('bull', 50) != true, 'Player2 turn 1 round 1');
    ok(game.addDart('t20', 60) != true, 'Player2 turn 2 round 1');
    ok(game.addDart('t20', 60) != true, 'Player2 turn 3 round 1');

    //round2
    //player1
    ok(game.addDart('iris', 25) != true, 'Player1 turn 1 round 2');       //175
    ok(game.addDart('10', 10) != true, 'Player1 turn 2 round 2');         //185
    ok(game.addDart('t10', 30) != true, 'Player1 turn 3 round 2');        //215

    //player2
    /* TODO Player turn should end as soon as he busts*/
    ok(game.addDart('t20', 60) != true, 'Player2 turn 1 round 2');
    ok(game.addDart('t20', 60) != true, 'Player2 turn 2 round 2');
    ok(game.addDart('t20', 60) != true, 'Player2 turn 3 round 2');
    equal(game.playerScoreByIndex(1), 170, 'Player2 round is bust');

    //round3
    //player1
    ok(game.addDart('t20', 60) != true, 'Player1 turn 2 round 3');        //275
    ok(game.addDart('20', 20) != true, 'Player1 turn 3 round 3');         //295

    //player1 wins
    var win = game.addDart('d3', 6, true)                                 //301
    equal(game.playerScoreByIndex(0), 301, ' Player1 score is 301');
    ok(game.currentPlayer().lastDartThrown.isDouble, 'The last dart throw is Double')
    equal(win, true, 'Player one wins when score is 301');
})
