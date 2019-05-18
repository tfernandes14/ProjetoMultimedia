"use strict";

(function(){
    window.addEventListener("load", main);
}());

function main() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var button = document.getElementById("nameBtn");
    button.addEventListener("click", auxClicked);
    ctx.fillStyle = "#0c6384";
    ctx.font = "100px Showcard Gothic";
    ctx.fillText("Parabéns!", 134, 160);
    ctx.fillStyle = "#a35221";
    ctx.font = "50px Myriad Pro";
    ctx.fillText("Como se chama?", 220,280);
    var cookie = document.cookie;	/* musica=Off % som=Off $ dificuldade=facil % tentativas=1 % score=0;path=/ */
	console.log("------------ username ------------");
	console.log("[USERNAME] COOKIE: " + cookie);
	var auxCookie = cookie.split("$");  // musica=Off%som=Off     dificuldade=facil%tentativas=1%score=0
	var auxCookie3 = auxCookie[1].split("%");	// dificuldade=facil     tentativas=1     score=0
	var auxCookie6 = auxCookie3[0].split("=");	// dificuldade     facil
    var auxCookie8 = auxCookie3[2].split("="); // score     0
	var dificuldade = auxCookie6[1];
	var score = auxCookie8[1];
	/*console.log("[USERNAME] Cookie dificuldade: " + dificuldade);
	console.log("[USERNAME] Cookie score: " + score);*/
	function auxClicked(ev) {
        clicked(ev, dificuldade, score);
    }
}

function clicked(ev, dificuldade, score){
    var inputBox = document.getElementById("inputBox");
    console.log(inputBox.value);

    if (localStorage.length == 0){
        localStorage.setItem('facil','null');
        localStorage.setItem('medio','null');
        localStorage.setItem('dificil','null');
    }

    var lido, string, i, j, fim, escolhido;
    switch(dificuldade){
        case('facil'):
            lido = localStorage.getItem('facil');
            if (lido === 'null'){
                localStorage.removeItem('facil');
                localStorage.setItem('facil', inputBox.value + '' + score +'/');
            }
            else{
                lido= lido.split('/');
                if (lido.length != 3){
                    fim = new Array(lido.length +1 );
                }
                else{
                    fim = new Array(3);
                }
                j=0;
                for (i = 0; i < fim.length; i++) {
                    escolhido= lido[j];
                    escolhido.split('/');
                    if (score > parseInt(escolhido[1])){
                        fim[i]= inputBox.value + ' '+ score;
                        for ( i = i+1 ;i <fim.length ; i++ ) {
                            fim[i]= lido[j];
                            j++
                        }
                    }
                    else{
                        fim[i]=lido[j];
                        j++;
                    }
                }
                string = '';
                for (i = 0; fim.length; i++) {
                    string = string + fim[i]+'/';
                }
                localStorage.setItem('Fácil', string);
            }
        case('medio'):
            lido= localStorage.getItem('medio');
            if (lido=== 'null'){
                localStorage.removeItem('medio');
                localStorage.setItem('medio', inputBox.value+ '' + score +'/');
            }
            else{
                lido= lido.split('/');
                if (lido.length != 3){
                    fim = new Array(lido.length +1 );
                }
                else{
                    fim = new Array(3);
                }
                j=0;
                for (i = 0; i < fim.length; i++) {
                    escolhido= lido[j];
                    escolhido.split('/');
                    if (score > parseInt(escolhido[1])){
                        fim[i]= inputBox.value + ' ' + score;
                        for ( i = i+1 ;i <fim.length ; i++ ) {
                            fim[i]= lido[j];
                            j++
                        }
                    }
                    else{
                        fim[i]=lido[j];
                        j++;
                    }
                }
                string = '';
                for (i = 0; fim.length; i++) {
                    string= string+ fim[i]+'/';
                }
                localStorage.setItem('medio', string);
            }
        case('dificil'):
            lido= localStorage.getItem('dificil');
            if (lido=== 'null'){
                localStorage.removeItem('dificil');
                localStorage.setItem('dificil', inputBox.value+ '' + score +'/');
            }
            else{
                lido= lido.split('/');
                if (lido.length != 3){
                    fim = new Array(lido.length +1 );
                }
                else{
                    fim = new Array(3);
                }
                j=0;
                for (i = 0; i < fim.length; i++) {
                    escolhido= lido[j];
                    escolhido.split('/');
                    if (score > parseInt(escolhido[1])){
                        fim[i]= inputBox.value + ' ' + score;
                        for ( i = i+1 ;i <fim.length ; i++ ) {
                            fim[i]= lido[j];
                            j++
                        }
                    }
                    else{
                        fim[i]=lido[j];
                        j++;
                    }
                }
                string='';
                for (i = 0; fim.length; i++) {
                    string= string+ fim[i]+'/';
                }
                localStorage.setItem('dificil', string);
            }
    }
    window.parent.postMessage("voltar", '*');
}