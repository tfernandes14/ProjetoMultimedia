"use strict";

(function(){
	window.addEventListener("load", main);
}());
	
function main(){
	var cookie = document.cookie;	/* musica=Off % som=Off $ dificuldade=facil % tentativas=1 % score=0;path=/ */
	console.log("COOKIE: " + cookie);
	var auxCookie = cookie.split("$");  // musica=Off%som=Off     dificuldade=facil%tentativas=1%score=0
	var auxCookie2 = auxCookie[0].split("%");	// musica=Off     som=Off
	var auxCookie3 = auxCookie[1].split("%");	// dificuldade=facil     tentativas=1     score=0
	var auxCookie4 = auxCookie2[0].split("=");	// musica     Off
	var auxCookie5 = auxCookie2[1].split("=");	// som     Off
	var auxCookie6 = auxCookie3[0].split("=");	// dificuldade     facil
	var auxCookie7 = auxCookie3[1].split("=");	// tentativas     1
    var auxCookie8 = auxCookie3[2].split("="); // score     0
	var musica = auxCookie4[1];
	var som = auxCookie5[1];
	var dificuldade = auxCookie6[1];
	var tentativas = auxCookie7[1];
	var score = auxCookie8[1];
	var scoreGame = 0;

	var canvas = document.getElementById('game-canvas');
    var ctx = canvas.getContext('2d');
    console.log("TENTATIVAS INICIO: " + tentativas);
    ctx.font = 'bold 56px Comic Sans MS';
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';

    // Variables
	var pressed = false; // Flag variable, determines if a key is pressed
	var isPaused = true; // Flag variable, determines if the game is paused or unpaused
	var isGameOver = false; // Flag variable, determines if the game is over or not
	var asas = new Audio("../../resources/floppyEagle/passaro_floppy_eagle.mp3");
	console.log("---------- INICIO FLOPPY -----------");

	// Objects
	var player = new Bird(32, 240, 80, 70);
	var pipeTop = new Pipe(360, 0, 80, 300, 2);
	var pipeBottom = new Pipe(360, 480, 80, 300, 2);
	var background1 = new Background(0, 0, 360, 600, 2);
	var background2 = new Background(360, 0, 360, 600, 2);

	var game = new Floopy(ctx, scoreGame, pressed, isPaused, isGameOver, player, pipeBottom, pipeTop, background1, background2, dificuldade, false);

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
		    var min, pontos;
	        // If the game is in a game over state, refresh the page to restart the game
	        if (game.isGameOver && tentativas != 2) {
	        	tentativas++;
	        	console.log("game.score1: " + game.score);
	        	document.cookie = "musica=" + musica + "%som=" + som + "$dificuldade=" + dificuldade + "%tentativas=" + tentativas + "%score=" + game.score + ";path=/";
	            window.location.reload();
	        }
	        // Second try - losea and advance
	        else if (game.isGameOver && tentativas == 2){
	        	document.cookie = "musica=" + musica + "%som=" + som + "$dificuldade=" + dificuldade + "%tentativas=" + tentativas + "%score=" + score + ";path=/";
	        	if (dificuldade == "facil"){
	        		min = 2;	// Verificar como esta noo Floppy.js e ver o valor de la do minimo
				}
	        	else if (dificuldade == "medio"){
	        		min = 2;	// Verificar como esta noo Floppy.js e ver o valor de la do minimo
				}
	        	else if (dificuldade == "dificil"){
	        		min = 1;	// Verificar como esta noo Floppy.js e ver o valor de la do minimo
				}
	        	// Passou a segunda
	        	if (game.score == min && score != 0){
	        	    console.log("So passei a segunda vez");
	        		pontos = score + game.score;
	        	}
	        	else{
	        		pontos = parseInt(game.score) + parseInt(score) ;
				}
	        	window.parent.postMessage("memoria$" + pontos, "*");
			}
	        // If the game is paused, unpause it
	        else if (game.isPaused) {
	            game.isPaused = false;
	        }

	        else if (game.isFinish){
	        	if (dificuldade == "facil"){
	        		min = 2;	// Verificar como esta noo Floppy.js e ver o valor de la do minimo
				}
	        	else if (dificuldade == "medio"){
	        		min = 2;	// Verificar como esta noo Floppy.js e ver o valor de la do minimo
				}
	        	else if (dificuldade == "dificil"){
	        		min = 1;	// Verificar como esta noo Floppy.js e ver o valor de la do minimo
				}
	        	if (game.score == min && score != 0){
	        	    console.log("So passei a segunda vez");
	        	    pontos = min + parseInt(score);
				}
	        	else if (game.score == min){
	        	    pontos = min * 3;
                }
	        	else{
	        		pontos = parseInt(game.score) + parseInt(score);
				}
	        	window.parent.postMessage("memoria$" + pontos, "*");
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