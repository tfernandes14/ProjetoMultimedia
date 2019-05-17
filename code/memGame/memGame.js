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
	var cookie = document.cookie;	/* musica=Off % som=Off $ dificuldade=facil % tentativas=1 % score=0;path=/ */
	console.log("------------ memGame ------------");
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
	console.log("Cookie musica: " + musica);
	console.log("Cookie som: " + som);
	console.log("Cookie dificuldade: " + dificuldade);
	console.log("Cookie tentativas: " + tentativas);
	console.log("Cookie score: " + score);

	var tab;
	var virar = new Audio("../../resources/memGame/woosh.mp3");
    var bom = new Audio("../../resources/memGame/cartasCerta.mp3");
    var mau = new Audio("../../resources/memGame/cartasErrada.mp3");
    mau.volume = 0.2;
    bom.volume = 0.2;
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
			var mensagem = "quizz$" + tab.cartasViradas;
			console.log("[memGame] mensagem: " + mensagem);
			window.parent.postMessage(mensagem, "*");
		}
		else if (res){
			sleep(800);
			tab.firstCard.removeEventListener('click', clicked);
			tab.secondCard.removeEventListener('click', clicked);
			tab.resetBoard();
			if (som != "Off"){
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