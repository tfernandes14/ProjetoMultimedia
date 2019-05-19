"use strict";

class Floopy{
	constructor(ctx, score, pressed, isPaused, isGameOver, player, pipeBottom, pipeTop, background1, background2, dificuldade, isFinish){
		this.ctx = ctx;
		this.score = score;
		this.pressed = pressed;
		this.isPaused = isPaused;
		this.isGameOver = isGameOver;
		this.player = player;
		this.pipeBottom = pipeBottom;
		this.pipeTop = pipeTop;
		this.background1 = background1;
		this.background2 = background2;
		this.isFinish = isFinish;
		this.dificuldade = dificuldade;
	}

	gameLoop(){
		// UPDATE CALLS

	    // If the game is not paused and is not over, keep executing the physics and the logic
	    if (!this.isPaused && !this.isGameOver && !this.isFinish) {
	        this.pipeTop.update(0);
	        this.pipeBottom.update(this.pipeTop.h +150);
	        this.background1.update();
	        this.background2.update();
	        this.player.update(this);
	        if (this.dificuldade == "facil" && this.score == 5){
	        	this.isFinish = true;
			}
	        else if (this.dificuldade == "medio" && this.score == 10){
	        	this.isFinish = true;
			}
	        else if (this.dificuldade == "dificil" && this.score == 15){
	        	this.isFinish = true;
			}
	    }

	    // DRAW CALLS

	    // Clear the screen first
	    this.ctx.clearRect(0, 0, 360, 600);

	    // Draw the backgrounds first
	    this.background1.draw(this.ctx);
	    this.background2.draw(this.ctx);

	    // Then draw the foreground objects
	    this.player.draw(this.ctx);
	    this.pipeTop.draw(this.ctx);
	    this.pipeBottom.draw(this.ctx);

	    // Show the informational text on top of everything
	    if (this.isPaused) {
	        // If the game is paused, show the necessary information
	        drawTint(this.ctx,0, 0, 360, 600);
	        drawText(this.ctx,'Carregue', 180, 185);
	        drawText(this.ctx,'no "Enter"', 180, 255);
	        drawText(this.ctx,'para iniciar!', 180, 325);
	        drawText(this.ctx,'Seta ⬆', 180, 395);
	        drawText(this.ctx,'para jogar!', 180, 465);
	        if (this.score > 0) {
	            drawText(this.ctx,this.score, 180, 52);
	        }
	    } else if (this.isGameOver) {
	        // If the game is over, show the necessary message
	        drawTint(this.ctx,0, 0, 360, 600);
	        drawText(this.ctx,'Perdeste!', 180, 220);
	        drawText(this.ctx,'Carregue', 180, 290);
	        drawText(this.ctx,'no "Enter"', 180, 360);
	        drawText(this.ctx,'Score: ' + this.score, 180, 430);

	    } else if (this.isFinish){
			drawTint(this.ctx,0, 0, 360, 600);
	        drawText(this.ctx,'Parabéns!', 180, 220);
	        drawText(this.ctx,'Carregue', 180, 290);
	        drawText(this.ctx,'no "Enter"', 180, 360);
	        drawText(this.ctx,'Score: ' + this.score, 180, 430);

		} else {
	        // If neither is true, just show the score
	        drawTint(this.ctx,0, 0, 360, 64);
	        drawText(this.ctx,this.score, 180, 52);
	    }

	    // Recursive loop - Calls itself
	    window.requestAnimationFrame(this.gameLoop.bind(this));
	}
}


