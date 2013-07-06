function DartBoard(game) {
    this.bull        = document.getElementsByName('bull');
    this.twenty      = document.getElementsByName('twenty');
    this.nineteen    = document.getElementsByName('nineteen');
    this.eighteen    = document.getElementsByName('eighteen');
    this.seventeen   = document.getElementsByName('seventeen');
    this.sixteen     = document.getElementsByName('sixteen');
    this.fifteen     = document.getElementsByName('fifteen');
    this.fourteen    = document.getElementsByName('fourteen');
    this.thirteen    = document.getElementsByName('thirteen');
    this.twelve      = document.getElementsByName('twelve');
    this.eleven      = document.getElementsByName('eleven');
    this.ten         = document.getElementsByName('ten');
    this.nine        = document.getElementsByName('nine');
    this.eight       = document.getElementsByName('eight');
    this.seven       = document.getElementsByName('seven');
    this.six         = document.getElementsByName('six');
    this.five        = document.getElementsByName('five');
    this.four        = document.getElementsByName('four');
    this.three       = document.getElementsByName('three');
    this.two         = document.getElementsByName('two');
    this.one         = document.getElementsByName('one');
    this.zero        = document.getElementsByName('zero');

    for(i in this.bull) {
        this.bull[i].onclick = function() {
            DartBoard.throwDart('bull', 25, this);
        }
    };

    for(i in this.twenty) {
        this.twenty[i].onclick = function() {
            DartBoard.throwDart('twenty', 20, this);
        }
    };

    for(i in this.nineteen) {
        this.nineteen[i].onclick = function() {
            DartBoard.throwDart('nineteen', 19, this);
        }
    };

    for(i in this.eighteen) {
        this.eighteen[i].onclick = function() {
            DartBoard.throwDart('eighteen', 18, this);
        }
    };

    for(i in this.seventeen) {
        this.seventeen[i].onclick = function() {
            DartBoard.throwDart('seventeen', 17, this);
        }
    };

    for(i in this.sixteen) {
        this.sixteen[i].onclick = function() {
            DartBoard.throwDart('sixteen', 16, this);
        }
    };

    for(i in this.fifteen) {
        this.fifteen[i].onclick = function() {
            DartBoard.throwDart('fifteen', 15, this);
        }
    };

    for(i in this.fourteen) {
        this.fourteen[i].onclick = function() {
            DartBoard.throwDart('fourteen', 14, this);
        }
    };

    for(i in this.thirteen) {
        this.thirteen[i].onclick = function() {
            DartBoard.throwDart('thirteen', 13, this);
        }
    };

    for(i in this.twelve) {
        this.twelve[i].onclick = function() {
            DartBoard.throwDart('twelve', 12, this);
        }
    };

    for(i in this.eleven) {
        this.eleven[i].onclick = function() {
            DartBoard.throwDart('eleven', 11, this);
        }
    };

    for(i in this.ten) {
        this.ten[i].onclick = function() {
            DartBoard.throwDart('ten', 10, this);
        }
    };

    for(i in this.nine) {
        this.nine[i].onclick = function() {
            DartBoard.throwDart('nine', 9, this);
        }
    };

    for(i in this.eight) {
        this.eight[i].onclick = function() {
            DartBoard.throwDart('eight', 8, this);
        }
    };

    for(i in this.seven) {
        this.seven[i].onclick = function() {
            DartBoard.throwDart('seven', 7, this);
        }
    };

    for(i in this.six) {
        this.six[i].onclick = function() {
            DartBoard.throwDart('six', 6, this);
        }
    };

    for(i in this.five) {
        this.five[i].onclick = function() {
            DartBoard.throwDart('five', 5, this);
        }
    };

    for(i in this.four) {
        this.four[i].onclick = function() {
            DartBoard.throwDart('four', 4, this);
        }
    };

    for(i in this.three) {
        this.three[i].onclick = function() {
            DartBoard.throwDart('three', 3, this);
        }
    };

    for(i in this.two) {
        this.two[i].onclick = function() {
            DartBoard.throwDart('two', 2, this);
        }
    };

    for(i in this.one) {
        this.one[i].onclick = function() {
            DartBoard.throwDart('one', 1, this);
        }
    };

    for(i in this.zero) {
        this.zero[i].onclick = function() {
            DartBoard.throwDart('zero', 0, this);
        }
    };
}

DartBoard.throwDart = function(name, value, element) {

    var multiplier = 1;
    var isDouble   = false;
    if (element.className.indexOf('double') > -1) {
        multiplier = 2;
        isDouble   = true;
        name       = 'd' + name;
    }
    if (element.className.indexOf('triple') > -1) {
        multiplier = 3;
        name       = 't' + name;
    }

    game.addDart(name, value * multiplier,  isDouble);
}

board = new DartBoard();

