var game = {
    count: 0,
    possibilities: ['#green','#blue', '#red', '#yellow'],
    currentGame: [],
    player: [],
    strict: false
};

$(".start").click(function() {
    newGame()
});

function newGame() {
    start();
}

function reset() {
    game.player = []
}

function start() {
    game.currentGame = [];
    game.player = [];
    game.count = 0;
    generateMove();
}

function generateMove(){
    game.currentGame.push(game.possibilities[(Math.floor(Math.random()*4))]);
    showMoves();
    console.log(game.currentGame);
}

function showMoves() {
    var i = 0;
    var moves = setInterval(function(){
        playGame(game.currentGame[i]);
        i++;
        if (i >= game.currentGame.length) {
            clearInterval(moves);
        }
    }, 600);

    reset();
}

function playGame(color) {
    $(color).addClass('light');
    setTimeout(function(){
        $(color).removeClass('light');
    }, 300);
}



function addToPlayer(id) {
    var color = "#"+id;
    console.log(color);
    game.player.push(color);
    playerTurn();
}

function playerTurn(x) {
    if (game.player.valueOf()!== game.currentGame.valueOf()) {
            alert('Game Over');
            newGame();
    } else {
            alert('Next round!');
            nextLevel();
            }
}

function nextLevel() {
    addCount();
}

function addCount() {
    game.count++;
    generateMove();
}

$("#green").click(function(event) {
    $(this).addClass("light");
    setTimeout(function () {
        $("#green").removeClass("light");
    }, 300);
    game.player.push("#" + this.id);
    console.log(game.player);
});

$("#red").click(function(event) {
    $(this).addClass("light");
    setTimeout(function () {
        $("#red").removeClass("light");
    }, 300);
    game.player.push("#" + this.id);
    console.log(game.player);
});

$("#blue").click(function(event) {
    $(this).addClass("light");
    setTimeout(function () {
        $("#blue").removeClass("light");
    }, 300);
    game.player.push("#" + this.id);
    console.log(game.player);
});

$("#yellow").click(function(event) {
    $(this).addClass("light");
    setTimeout(function () {
        $("#yellow").removeClass("light");
    }, 300);
    game.player.push("#" + this.id);
    console.log(game.player);
});

$(document).keypress(function(e) {
    if(e.which == 13) {
        addToPlayer();
    }
});
