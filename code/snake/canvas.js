class Canvas{
	construtor(element, ctx, width, height, unidade){
		this.element = element;
		this.ctx = ctx;
		this.width = width;
		this.height = height;
		this.unidade = unidade;
	}

	//Reset na canvas
	reset(fillColour, strokeColour){
		var fillColour = fillColour || 'white';
		var strokeColour = strokeColour || 'black';
		//Chama a função paint para pintar a canvas original
		this.paint(0, 0, fillColour, strokeColour, this.width, this.height);
	}

	paint(x, y, fillColour, strokeColour, width, height){
		var width = width || this.unidade;
		var height = height || this.unidade;
		var fillColour = fillColour || 'red';
		var strokeColour = strokeColour || 'black';

		this.ctx.fillStyle = fillColour;
		this.ctx.fillRect(x*canvas.unidade, y*canvas.unidade, width, height);
		this.ctx.strokeStyle = strokeColour;
		this.ctx.strokeRect(x*canvas.unidade, y*canvas.unidade, width, height);
	}

	//Desenha o texto escolhido nas coordenadas e com as cores/font escolhidas
	paintText(text, x, y, colour, font){
		var x = x || this.unidade; //20 -> default
		var	y = y || this.height - this.unidade; // 480 -> default
		this.ctx.fillStyle = colour || 'blue'; // blue -> default
		this.ctx.font = font || '20px Consolas'; // 20px Consolas -> default
		this.ctx.fillText(text, x, y);
	}
}