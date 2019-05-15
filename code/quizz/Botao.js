"use strict";

class Botao{

	
	constructor(x, y, w, h, img, clickable){

		//posição
		this.x = x;
		this.y = y;
		this.width = w;
		this.height = h;

		this.clickable = clickable;

		//imagem
		this.img = img;	
	}


	draw(ctx){
		ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
	}


	clear(ctx){
		ctx.clearRect(this.x, this.y, this.width, this.height);
	}	


	mouseOverBoundingBox(ev) //ev.target é a canvas
	{
		var mx = ev.offsetX;  //mx, my = mouseX, mouseY na canvas
		var my = ev.offsetY;
		if(!this.clickable)
			return false;
		if ((mx >= this.x && mx <= this.x + this.width) && (my >= this.y && my <= this.y + this.height)){
			return true;
		}
		else
			return false;
	}
}