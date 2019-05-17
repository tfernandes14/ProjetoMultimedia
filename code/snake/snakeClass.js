class Snake{
	construtor(length, bodyColour, outlineColour, coordInic){
		this.length = length;
		this.bodyColour = 'green';
		this.outlineColour = 'black';
		this.coordInic = coordInic;
		this.array = array;
		this.direction = direction;
		this.pd = pd;
		this.px;
		this.py;
	}

	create(){
		var coordInic = this.coordInic;
		for(var i = this.length-1; i >= 0; i--) {
			this.array.push({x: coordInic.x + i, y: coordInic.y});
			//Cria um array com as coord de cada parte do corpo da Snake
		}
	}

	move(){
		//Verifica que a array da proxima direcao não está vazia
		if (this.pd.length) {
			this.direction = this.pd.shift(); //Retorna e remove o 1º elemento da array
		}

		this.px = this.array[0].x;
		this.py = this.array[0].y;
		var ultimo; //aka CAUDA

		switch(this.direction) {
			case 'right':
				this.px++;
				break;
			case 'left':
				this.px--;
				break;
			case 'up':
				this.py--;
				break;
			case 'down':
				this.py++;
				break;
		}

		//Envia para o ecra de fim do jogo
		if(this.foraLimites() || this.colisao()) {
			jogo.over();
			return;
		}

		//Pede uma nova comida e adiciona mais um quadrado
		//Caso não seja comida a fruta, simplesmente apaga o ultimo elemento
		if(this.comeuComida()) {
			jogo.pontos++; //adiciona 1 ponto
			ultimo = {x: this.px, y: this.py}; 
			comida = new Comida(); //pede nova comida
			comida.coordRandom();
			comida.verificaColisao();
			comida.show();
		} else {
			var ultimo = this.array.pop(); //Apaga o ultimo elemento
			ultimo.x = this.px;
			ultimo.y = this.py;
		}

		this.array.unshift(ultimo); //Adiciona a cauda ao array
		this.paint();	//Desenha
		this.pontuacao();	//Envia para o ecra de vitoria
	}

	//Desenha todas as partes da cobrinha
	paint(){
		canvas.reset();
		for(var i = 0; i < this.array.length; i++) {
			var j = this.array[i];
			canvas.paint(j.x, j.y, this.bodyColour, this.outlineColour);
		}
	}

	//Compara as coordenadas da snake com as coordenadas da canvas para saber se saiu ou não
	foraLimites(){
		if(this.px <= -1 || this.px === canvas.width/canvas.unidade || this.py <= -1 || this.py === canvas.height/canvas.unidade) {
			return true;
		}
			return false;
	}

	//Compara as coordenadas da snake com as da comida
	comeuComida(){
		if(this.px === comida.x && this.py === comida.y) {
			return true;
		}
		return false;
	}

	//Deteta quando a pontuação chega aos 10 pontos
	pontuacao(){
		if(jogo.pontos == 10){
			jogo.vitoria();
		}
	}

	//Compara as coordenadas da cabeça da snake com o resto do corpo
	colisao(x, y){
		var x = x || this.px;
		var	y = y || this.py;
		for(var i = 0; i < this.array.length; i++) {
			if(this.array[i].x === x && this.array[i].y === y) {
				return true;
			}
		}			
		return false;
	}
}