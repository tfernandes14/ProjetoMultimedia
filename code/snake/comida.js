class Comida{
	//Calcula coordenadas random para colocar a fruta
	coordRandom(){
		this.x = Math.round(Math.random() * (canvas.width-canvas.unidade)/canvas.unidade);
		this.y = Math.round(Math.random() * (canvas.height-canvas.unidade)/canvas.unidade);
		this.verificaColisao();
	}

	//Verifica que as coordenadas random não são iguais a de qql parte da snake
	verificaColisao(){
		if(snakeRei.colisao(this.x, this.y)) {
			this.coordRandom();
		}
	}

	//Desenha a frutinha
	show(){
		canvas.paint(this.x, this.y, 'red', 'black');
	}
}