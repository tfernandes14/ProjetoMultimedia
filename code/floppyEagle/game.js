"use strict";

(function(){
	window.addEventListener("load", main);
}());
	
function main(){
	var cookie = document.cookie;	/* musica=Off % som=Off $ dificuldade=facil;path=/ */
	var auxDificuldadeCookie = cookie.split("$");
	var auxSom = auxDificuldadeCookie[0].split("%");
	var auxSom2 = auxSom[1].split("=");
	var som = auxSom2[1];
	var dificuldadeCookie = auxDificuldadeCookie[1].split("=");
	var canvas = document.getElementById('game-canvas');
    var ctx = canvas.getContext('2d');
    ctx.font = 'bold 56px Comic Sans MS';
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';

    // Variables
	var score = 0; // Will hold the global score
	var pressed = false; // Flag variable, determines if a key is pressed
	var isPaused = true; // Flag variable, determines if the game is paused or unpaused
	var isGameOver = false; // Flag variable, determines if the game is over or not
	var asas = new Audio("../../resources/floppyEagle/passaro_floppy_eagle.mp3");

	// Objects
	var player = new Bird(32, 240, 80, 70);
	var pipeTop = new Pipe(360, 0, 80, 300, 2);
	var pipeBottom = new Pipe(360, 480, 80, 300, 2);
	var background1 = new Background(0, 0, 360, 600, 2);
	var background2 = new Background(360, 0, 360, 600, 2);

	var game = new Floopy(ctx, score, pressed, isPaused, isGameOver, player, pipeBottom, pipeTop, background1, background2, dificuldadeCookie[1], false);

	game.gameLoop();

   	addEventListener("keyup", keyUpPressed);
		
    function keyUpPressed(ev){
        game.pressed = false;
    }
    addEventListener("keydown" , keyDownPressed);

	function keyDownPressed(ev){
		if (ev.code == "ArrowUp" && game.pressed === false && !game.isPaused && !game.isGameOver && !game.isFinish){
			if (som != "Off"){
				asas.play();
			}
			game.player.moveUp(2.5); // Call the necessary player action
			game.pressed = true; // Mark this true so the player can not keep the button pressed
		}
		if (ev.code == "Enter") {
	        // If the game is in a game over state, refresh the page to restart the game
	        if (game.isGameOver) {
	            window.location.reload();
	        }
	        // If the game is paused, unpause it
	        else if (game.isPaused) {
	            game.isPaused = false;
	        }

	        else if (game.isFinish){
	        	window.parent.postMessage("memoria", "*");
			}
		}
		 // ESC button: Pause the game
	    if (ev.code == "Escape" && !game.isPaused && !game.isGameOver) {
	        game.isPaused = true;
	    }

	    // P button: Leave the game
	    if (ev.code == "KeyP"){
	    	window.parent.postMessage("voltar", "*");
		}

	    // F button: Finish the game
		if (ev.code == "KeyF"){
	    	window.parent.postMessage("memoria", "*");
		}
	}
}

function drawText(ctx,text, x, y) {
    ctx.fillStyle = 'white';
    ctx.fillText(text, x, y);
    ctx.strokeText(text, x, y);
}

function drawTint(ctx, x, y, w, h) {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    ctx.fillRect(x, y, w, h);
}