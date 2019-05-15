"use strict";

const cards = document.querySelectorAll('.memory-card'); /*vai buscar todos os elementos defenidos do CSS com a referencia .memory-card*/


(function shuffle() {
  for (var i = 0; i < cards.length; i++) {
    cards[i].style.order = Math.floor(Math.random() * cards.length);
  }
  main()
})();


/*var lockBoard = false;
var hasFlippedCard = false;*/ /*controlar o virar das 2 cartas false se não virou nenhuma true se já virou 1*/
/*var firstCard=null;
var secondCard=null;*/


function main(){
	var cartasViradas = 0;
	var pares = 0;
	var cookie = document.cookie;	/* musica=Off % som=Off $ dificuldade=facil;path=/ */
	var auxDificuldadeCookie = cookie.split("$");
	var auxSom = auxDificuldadeCookie[0].split("%");
	var auxSom2 = auxSom[1].split("=");
	var som = auxSom2[1];
	var tab;
	var virar = new Audio("../../resources/memGame/woosh.mp3");
    var bom = new Audio("../../resources/memGame/cartasCerta.mp3");
    var mau = new Audio("../../resources/memGame/cartasErrada.mp3");
	if (som == "Off"){
        tab = new Tabuleiro(false,false,null,null, cartasViradas, "", pares);
    }
	else{
	    tab = new Tabuleiro(false,false,null,null, cartasViradas, "../../resources/memGame/woosh.mp3", pares);
    }

	window.addEventListener("keydown", keyDownPressed);

	function keyDownPressed(ev){
		if (ev.code == "KeyF"){
			tab.pares = 6;
		}
		else if (ev.code == "KeyP"){
	    	window.parent.postMessage("voltar", "*");
		}
	}

	cards.forEach(card => card.addEventListener('click', clicked));
	function clicked(ev){
		let res = tab.virarCarta(ev.currentTarget);
		if (tab.pares == 6){
			sleep(800);
			if (som != "Off"){
				bom.play();
			}
			window.parent.postMessage("quizz", "*");
		}
		else if (res){
			sleep(800);
			tab.firstCard.removeEventListener('click', clicked);
			tab.secondCard.removeEventListener('click', clicked);
			tab.resetBoard();
			if (som != "Off"){
				console.log("ENTREI");
				bom.play();
			}
		}
		else if(res === false){
			sleep(800);
			tab.lockBoard = true;
		  	setTimeout(removerFlip , 1000, tab, virar, som);
		  	if (som != "Off"){
		        mau.play();
            }
		}
		console.log(tab.cartasViradas);
	}


}

function sleep(ms){
	var start = new Date().getTime();
	for (let i = 0; i < 1e7; i++){
		if ((new Date().getTime() - start) > ms){
			break;
		}
	}
}

/*function flip(tab, target){
	let res= tab.virarCarta(target);
	if (res){
		tab.firstCard.removeEventListener('click', clicked);
		tab.secondCard.removeEventListener('click', clicked);
		tab.resetBoard();
	}
	else if(res=== false){
		tab.lockBoard = true;
	  	setTimeout(removerFlip , 1000, tab);
	}
}*/

function removerFlip(tab, virar, som){
    if (som != "Off"){
        virar.play();
    }
	tab.firstCard.classList.remove('flip');
	tab.secondCard.classList.remove('flip');
	tab.resetBoard();
}