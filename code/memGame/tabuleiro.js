"use strict";

class Tabuleiro{
	constructor(lockBoard, hasFlippedCard, firstCard, secondCard, cartasViradas, audio, pares){
		this.lockBoard = lockBoard;
		this.hasFlippedCard = hasFlippedCard;
		this.firstCard = firstCard;
		this.secondCard = secondCard;
		this.cartasViradas = cartasViradas;
		if (audio != ""){
            this.audio = new Audio(audio);
        }
		this.pares = pares;
	}

	virarCarta(target){
		if (this.lockBoard){
	    	return null;
	  	}
	  	if (target === this.firstCard){
	    	return null;
	  	}

	  	target.classList.add('flip');       /*adiciona a propriedade flip se esta já possuir a propriedade esta é removida*/

		if (this.hasFlippedCard == false) {
			// first click
            this.audio.play();
			this.cartasViradas++;
			this.hasFlippedCard = true;
	    	this.firstCard = target;        /*guardar a referencia da 1 carta clicada*/
	  	  	return null;
	    }

		this.cartasViradas++;

	  	this.secondCard = target;

	  	if (this.firstCard.dataset.nome == this.secondCard.dataset.nome){   // Vai comparar a propriedade que está definida no HTML
	  	    this.pares += 1;
	  	    return true;
        }
	  	else{
	  	    return false;
        }
	}


	resetBoard(){
		this.hasFlippedCard =  this.lockBoard = false;
	  	this.firstCard = this.secondCard = null;
	}
}


