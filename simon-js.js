var game = {
    count: 0,
    possibilities: ['#green','#blue', '#red', '#yellow'],
    currentGame: [],
    player: []
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

function mainFunction (input) {
    $(document).click(function (event) {
        if(game.currentGame.every((el, i) => el === game.player[i])) {
            $(".score").text(game.count + 1);
            nextRound();
        } else {
            console.log("Game Over");
            newGame();
        }

        // for (var i =0; i<game.currentGame.length; i++) {
        //     if (game.currentGame[i] !== game.player[i]) {
        //         alert("Game Over");
        //         newGame();
        //     }
        // }

    });
}

// function konamiCode(input) {
//     var codeEntered = "";
//     var key = "3838404037393739666513";
//     $(document).keydown(function (event) {
//         codeEntered += ("" + event.keyCode);
//         if (codeEntered === key) {
//             return input();
//         }
//         if (!key.indexOf(codeEntered))
//             return;
//         codeEntered = ("" + event.keyCode);
//     });
// }

mainFunction();


function nextRound() {
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

// $(document).keypress(function(e) {
//     if(e.which === 13) {
//         console.log(game.player);
//         console.log(game.currentGame);
//         turnCheck()
//     }
// });
