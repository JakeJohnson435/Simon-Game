var game = {
    count: 0,
    possibilities: ['#green','#blue', '#red', '#dark'],
    currentGame: [],
    player: [],
    strict: false
};

function newGame() {
    start();
}

function start() {
    game.currentGame = [];
    game.player = [];
    game.count = 0;
    addCount();
    generateMove();
}

function addCount() {
    game.count++;

}

$(".start").click(function() {
    newGame()
});

function generateMove(){
    game.currentGame.push(game.possibilities[(Math.floor(Math.random()*4))]);
    showMoves();
}

function showMoves() {

}





$("#green").click(function(event) {
    $(this).addClass("lightGreen");
    setTimeout(function () {
        $("#green").removeClass("lightGreen");
    }, 300);
    game.player.push(this.id);
    console.log(game.player);
});


$("#red").click(function(event) {
    $(this).addClass("lightRed");
    setTimeout(function () {
        $("#red").removeClass("lightRed");
    }, 300);
    game.player.push(this.id);
    console.log(game.player);
});

$("#blue").click(function(event) {
    $(this).addClass("lightBlue");
    setTimeout(function () {
        $("#blue").removeClass("lightBlue");
    }, 300);
    game.player.push(this.id);
    console.log(game.player);
});

$("#yellow").click(function(event) {
    $(this).addClass("lightYellow");
    setTimeout(function () {
        $("#yellow").removeClass("lightYellow");
    }, 300);
    game.player.push(this.id);
    console.log(game.player);
});
