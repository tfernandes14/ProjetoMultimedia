class Jogo{
	construtor(fps, pontos){
		this.fps = fps;
		this.pontos = pontos;
	}

	//ESCREVE A PONTUAÇÃO NO CANTO INFERIOR ESQUERDO
	showPontos(){
		canvas.paintText("Pontuação: " + this.pontos);
	}

	//TRATAR DE MANTER O JOGO A CORRER ATÉ ORDEM CONTRARIA
	loop(){
		//setTimeout usado para controlar a velocidade da animação
		setTimeout(function() {
			var requestID = requestAnimationFrame(jogo.loop);
			snakeRei.move();
			if(stopAnimation == true){
				cancelAnimationFrame(requestID);
			}
			else{
			jogo.showPontos();
				if(typeof comida.show != 'undefined') {
					comida.show();
				}
			}
		}, 1000 / jogo.fps);
	}
	
	//DÁ START NO JOGO COM AS DEFINIÇÕES IMBUTIDAS
	start(){
		//Começa o jogo com uma snake nas coord (5,5) com um comprimento de 5 unidades
		snakeRei = new Snake();
		snakeRei.length = 5;
		snakeRei.bodyColour = 'green';
		snakeRei.outlineColour = 'black';
		snakeRei.coordInic = {x: 5, y: 5};
		snakeRei.array = [];
		snakeRei.direction = 'right';
		snakeRei.pd = [];
		snakeRei.create();
		comida = new Comida();
		comida.coordRandom();
		comida.verificaColisao();
		comida.show();
		jogo.pontos = 0;
		stopAnimation = false;
	}

	//ECRÃ DE GAME OVER
	over(){
		canvas.reset('lightblue', 'black');
		canvas.paintText('GAME OVER', 200, 200, 'white', '80px Consolas');
		canvas.paintText('Carregue no espaço para tentar de novo!', 190, 250, 'white', '20px Consolas');
		stopAnimation = true;
	}

	//RESTART NO JOGO TODO
	restart(){
		stopAnimation = false;
		this.start();
		this.loop();
	}

	//ECRÃ DE VITÓRIA
	vitoria(){
		canvas.reset('gold', 'white');
		canvas.paintText('Vitória', 250, 220, 'white', '90px Consolas');
		canvas.paintText('Carregue no espaço se quiser jogar de novo!', 240, 270, 'white', '15px Consolas');
		stopAnimation = true;
	}

}