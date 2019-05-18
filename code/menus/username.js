"use strict";

(function(){
	window.addEventListener("load", main);
}());

function main() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var button = document.getElementById("nameBtn");
    button.addEventListener("click", clicked);
    ctx.fillStyle = "#0c6384";
    ctx.font = "100px Showcard Gothic";
    ctx.fillText("Créditos", 164, 160);
    ctx.font= "25px Showcard Gothic";
    ctx.fillText("What's your name?", 100,300);

   
}

function clicked(ev){
	var inputBox = document.getElementById("inputBox");
	console.log(inputBox.value);

	if (storage.length == 0){
		localStorage.setItem('Fácil','null');
		localStorage.setItem('Médio','null');
		localStorage.setItem('Difícil','null');
	}
	switch(/*ver a dificuldade da cookie*/){
		case 'Fácil':
			var lido= localStorage.getItem('Fácil');
			if (lido=== 'null'){
				localStorage.removeItem('Fácil');
				localStorage.setItem('Fácil', inputBox.value+ '' + /*pontuação das cookies*/+'/');
			}
			else{
				lido= lido.split('/');
				if (lido.length != 3){
					var fim = new Array(lido.lenght +1 );
				}
				else{
					var fim = new Array(3);
				}
				var j=0;
				for (var i = 0; i < fim.lenght; i++) {
					var escolhido= lido[j];
					escolhido.split(' ');
					if (/*resultado das cookies*/> parseInt(escolhido[1])){
						fim[i]= inputBox.value + ' '+ /*resultado das cookies*/;
						for ( i = i+1 ;i <fim.lenght ; i++ ) {
							fim[i]= lido[j];
							j++
						}
					}
					else{
						fim[i]=lido[j];
						j++;
					}
				}
				var string='';
				for (var i = 0; fim.lenght; i++) {
					string= string+ fim[i]+'/';
				}
				localStorage.setItem('Fácil', string);
			}
		case 'Médio':
			var lido= localStorage.getItem('Médio');
			if (lido=== 'null'){
				localStorage.removeItem('Médio');
				localStorage.setItem('Médio', inputBox.value+ '' + /*pontuação das cookies*/+'/');
			}
			else{
				lido= lido.split('/');
				if (lido.length != 3){
					var fim = new Array(lido.lenght +1 );
				}
				else{
					var fim = new Array(3);
				}
				var j=0;
				for (var i = 0; i < fim.lenght; i++) {
					var escolhido= lido[j];
					escolhido.split(' ');
					if (/*resultado das cookies*/> parseInt(escolhido[1])){
						fim[i]= inputBox.value + ' '+ /*resultado das cookies*/;
						for ( i = i+1 ;i <fim.lenght ; i++ ) {
							fim[i]= lido[j];
							j++
						}
					}
					else{
						fim[i]=lido[j];
						j++;
					}
				}
				var string='';
				for (var i = 0; fim.lenght; i++) {
					string= string+ fim[i]+'/';
				}
				localStorage.setItem('Médio', string);
			}
		case 'Difícil':
			var lido= localStorage.getItem('Difícil');
			if (lido=== 'null'){
				localStorage.removeItem('Difícil');
				localStorage.setItem('Difícil', inputBox.value+ '' + /*pontuação das cookies*/+'/');
			}
			else{
				lido= lido.split('/');
				if (lido.length != 3){
					var fim = new Array(lido.lenght +1 );
				}
				else{
					var fim = new Array(3);
				}
				var j=0;
				for (var i = 0; i < fim.lenght; i++) {
					var escolhido= lido[j];
					escolhido.split(' ');
					if (/*resultado das cookies*/> parseInt(escolhido[1])){
						fim[i]= inputBox.value + ' '+ /*resultado das cookies*/;
						for ( i = i+1 ;i <fim.lenght ; i++ ) {
							fim[i]= lido[j];
							j++
						}
					}
					else{
						fim[i]=lido[j];
						j++;
					}
				}
				var string='';
				for (var i = 0; fim.lenght; i++) {
					string= string+ fim[i]+'/';
				}
				localStorage.setItem('Difícil', string);
			}
	}
	/*mandar para o menu principal*/
}