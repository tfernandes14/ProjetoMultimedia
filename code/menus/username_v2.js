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
	// console.log("[USERNAME] COOKIE: " + cookie);
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
    console.log(inputBox.value + ' ' + score + ' ' + dificuldade);

    var lido, string, aux, nome, pont, nome0, nome1, pont0, pont1, aux0, aux1, aux2, nome2, pont2;
    switch(dificuldade){
        case('facil'):
            lido = localStorage.getItem('facil');
            if (lido === 'null/'){
                console.log("Não tinha nada lá escrito!!!");
                localStorage.removeItem('facil');
                string = inputBox.value + ' ' + score + '/';
                localStorage.setItem('facil', string);
            }
            else{
                lido = lido.split('/');
                console.log("PRE-POP: " + lido);
                lido.pop();
                console.log("POS-POP: " + lido);
                if (lido.length == 1){
                    aux = lido[0].split(' ');
                    nome = aux[0];
                    pont = aux[1];
                    if (score >= pont){
                        string = inputBox.value + ' ' + score + '/' + nome + ' ' + pont + '/';
                    }
                    else{
                        string = nome + ' ' + pont + '/' + inputBox.value + ' ' + score + '/';
                    }
                }
                else if (lido.length == 2){
                    aux0 = lido[0].split(' ');
                    aux1 = lido[1].split(' ');
                    nome0 = aux0[0];
                    nome1 = aux1[0];
                    pont0 = aux0[1];
                    pont1 = aux1[1];
                    if (score >= pont0 && pont0 >= pont1){
                        string = inputBox.value + ' ' + score + '/' + nome0 + ' ' + pont0 + '/' + nome1 + ' ' + pont1;
                    }
                    else if (score >= pont1 && pont1 >= pont0){
                        string = inputBox.value + ' ' + score + '/' + nome1 + ' ' + pont1 + '/' + nome0 + ' ' + pont0;
                    }
                    else if (pont0 >= score && score >= pont1){
                        string = nome0 + ' ' + pont0 + '/' + inputBox.value + ' ' + score + '/' + nome1 + ' ' + pont1;
                    }
                    else if (pont0 >= pont1 && pont1 >= score){
                        string = nome0 + ' ' + pont0 + '/' + nome1 + ' ' + pont1 + '/' + inputBox.value + ' ' + score;
                    }
                    else if (pont1 >= score && score >= pont0){
                        string = nome1 + ' ' + pont1 + '/' + inputBox.value + ' ' + score + '/' + nome0 + ' ' + pont0;
                    }
                    else if (pont1 >= pont0 && pont0 >= score){
                        string = nome1 + ' ' + pont1 + '/' + nome0 + ' ' + pont0 + '/' + inputBox.value + ' ' + score;
                    }
                }
                else if (lido.length == 3){
                    aux0 = lido[0].split(' ');
                    aux1 = lido[1].split(' ');
                    aux2 = lido[2].split(' ');
                    nome0 = aux0[0];
                    nome1 = aux1[0];
                    nome2 = aux2[0];
                    pont0 = aux0[1];
                    pont1 = aux1[1];
                    pont2 = aux2[1];
                    if (score <= pont2){
                        string = nome0 + ' ' + pont0 + '/' + nome1 + ' ' + pont1 + '/' + nome2 + ' ' + pont2;
                    }
                    else if (score >= pont2 && score <= pont1){
                        string = nome0 + ' ' + pont0 + '/' + nome1 + ' ' + pont1 + '/' + inputBox.value + ' ' + score;
                    }
                    else if (score >= pont2 && score >= pont1 && score <= pont0){
                        string = nome0 + ' ' + pont0 + '/' + inputBox.value + ' ' + score + '/' + nome1 + ' ' + pont1;
                    }
                    else if (score >= pont2 && score >= pont1 && score >= pont0){
                        string = inputBox.value + ' ' + score + '/' + nome0 + ' ' + pont0 + '/' + nome1 + ' ' + pont1;
                    }
                }
                console.log("STRING: " + string);
                localStorage.setItem('facil', string);
            }
            break;
        case('medio'):
            lido = localStorage.getItem('medio');
            if (lido === 'null/'){
                console.log("Não tinha nada lá escrito!!!");
                localStorage.removeItem('medio');
                string = inputBox.value + ' ' + score + '/';
                localStorage.setItem('medio', string);
            }
            else{
                lido = lido.split('/');
                console.log("PRE-POP: " + lido);
                lido.pop();
                console.log("POS-POP: " + lido);
                if (lido.length == 1){
                    aux = lido[0].split(' ');
                    nome = aux[0];
                    pont = aux[1];
                    if (score >= pont){
                        string = inputBox.value + ' ' + score + '/' + nome + ' ' + pont + '/';
                    }
                    else{
                        string = nome + ' ' + pont + '/' + inputBox.value + ' ' + score + '/';
                    }
                }
                else if (lido.length == 2){
                    aux0 = lido[0].split(' ');
                    aux1 = lido[1].split(' ');
                    nome0 = aux0[0];
                    nome1 = aux1[0];
                    pont0 = aux0[1];
                    pont1 = aux1[1];
                    if (score >= pont0 && pont0 >= pont1){
                        string = inputBox.value + ' ' + score + '/' + nome0 + ' ' + pont0 + '/' + nome1 + ' ' + pont1;
                    }
                    else if (score >= pont1 && pont1 >= pont0){
                        string = inputBox.value + ' ' + score + '/' + nome1 + ' ' + pont1 + '/' + nome0 + ' ' + pont0;
                    }
                    else if (pont0 >= score && score >= pont1){
                        string = nome0 + ' ' + pont0 + '/' + inputBox.value + ' ' + score + '/' + nome1 + ' ' + pont1;
                    }
                    else if (pont0 >= pont1 && pont1 >= score){
                        string = nome0 + ' ' + pont0 + '/' + nome1 + ' ' + pont1 + '/' + inputBox.value + ' ' + score;
                    }
                    else if (pont1 >= score && score >= pont0){
                        string = nome1 + ' ' + pont1 + '/' + inputBox.value + ' ' + score + '/' + nome0 + ' ' + pont0;
                    }
                    else if (pont1 >= pont0 && pont0 >= score){
                        string = nome1 + ' ' + pont1 + '/' + nome0 + ' ' + pont0 + '/' + inputBox.value + ' ' + score;
                    }
                }
                else if (lido.length == 3){
                    aux0 = lido[0].split(' ');
                    aux1 = lido[1].split(' ');
                    aux2 = lido[2].split(' ');
                    nome0 = aux0[0];
                    nome1 = aux1[0];
                    nome2 = aux2[0];
                    pont0 = aux0[1];
                    pont1 = aux1[1];
                    pont2 = aux2[1];
                    if (score <= pont2){
                        string = nome0 + ' ' + pont0 + '/' + nome1 + ' ' + pont1 + '/' + nome2 + ' ' + pont2;
                    }
                    else if (score >= pont2 && score <= pont1){
                        string = nome0 + ' ' + pont0 + '/' + nome1 + ' ' + pont1 + '/' + inputBox.value + ' ' + score;
                    }
                    else if (score >= pont2 && score >= pont1 && score <= pont0){
                        string = nome0 + ' ' + pont0 + '/' + inputBox.value + ' ' + score + '/' + nome1 + ' ' + pont1;
                    }
                    else if (score >= pont2 && score >= pont1 && score >= pont0){
                        string = inputBox.value + ' ' + score + '/' + nome0 + ' ' + pont0 + '/' + nome1 + ' ' + pont1;
                    }
                }
                console.log("STRING: " + string);
                localStorage.setItem('medio', string);
            }
            break;
        case('dificil'):
            lido = localStorage.getItem('dificil');
            if (lido === 'null/'){
                console.log("Não tinha nada lá escrito!!!");
                localStorage.removeItem('dificil');
                string = inputBox.value + ' ' + score + '/';
                localStorage.setItem('dificil', string);
            }
            else{
                lido = lido.split('/');
                lido.pop();
                if (lido.length == 1){
                    aux = lido[0].split(' ');
                    nome = aux[0];
                    pont = aux[1];
                    if (score >= pont){
                        string = inputBox.value + ' ' + score + '/' + nome + ' ' + pont + '/';
                    }
                    else{
                        string = nome + ' ' + pont + '/' + inputBox.value + ' ' + score + '/';
                    }
                }
                else if (lido.length == 2){
                    aux0 = lido[0].split(' ');
                    aux1 = lido[1].split(' ');
                    nome0 = aux0[0];
                    nome1 = aux1[0];
                    pont0 = aux0[1];
                    pont1 = aux1[1];
                    if (score >= pont0 && pont0 >= pont1){
                        string = inputBox.value + ' ' + score + '/' + nome0 + ' ' + pont0 + '/' + nome1 + ' ' + pont1;
                    }
                    else if (score >= pont1 && pont1 >= pont0){
                        string = inputBox.value + ' ' + score + '/' + nome1 + ' ' + pont1 + '/' + nome0 + ' ' + pont0;
                    }
                    else if (pont0 >= score && score >= pont1){
                        string = nome0 + ' ' + pont0 + '/' + inputBox.value + ' ' + score + '/' + nome1 + ' ' + pont1;
                    }
                    else if (pont0 >= pont1 && pont1 >= score){
                        string = nome0 + ' ' + pont0 + '/' + nome1 + ' ' + pont1 + '/' + inputBox.value + ' ' + score;
                    }
                    else if (pont1 >= score && score >= pont0){
                        string = nome1 + ' ' + pont1 + '/' + inputBox.value + ' ' + score + '/' + nome0 + ' ' + pont0;
                    }
                    else if (pont1 >= pont0 && pont0 >= score){
                        string = nome1 + ' ' + pont1 + '/' + nome0 + ' ' + pont0 + '/' + inputBox.value + ' ' + score;
                    }
                }
                else if (lido.length == 3){
                    aux0 = lido[0].split(' ');
                    aux1 = lido[1].split(' ');
                    aux2 = lido[2].split(' ');
                    nome0 = aux0[0];
                    nome1 = aux1[0];
                    nome2 = aux2[0];
                    pont0 = aux0[1];
                    pont1 = aux1[1];
                    pont2 = aux2[1];
                    if (score <= pont2){
                        string = nome0 + ' ' + pont0 + '/' + nome1 + ' ' + pont1 + '/' + nome2 + ' ' + pont2;
                    }
                    else if (score >= pont2 && score <= pont1){
                        string = nome0 + ' ' + pont0 + '/' + nome1 + ' ' + pont1 + '/' + inputBox.value + ' ' + score;
                    }
                    else if (score >= pont2 && score >= pont1 && score <= pont0){
                        string = nome0 + ' ' + pont0 + '/' + inputBox.value + ' ' + score + '/' + nome1 + ' ' + pont1;
                    }
                    else if (score >= pont2 && score >= pont1 && score >= pont0){
                        string = inputBox.value + ' ' + score + '/' + nome0 + ' ' + pont0 + '/' + nome1 + ' ' + pont1;
                    }
                }
                console.log("STRING: " + string);
                localStorage.setItem('dificil', string);
            }
            break;
    }
    console.log("[USERNAME] Local Storage - fácil: " + localStorage.getItem('facil'));
    console.log("[USERNAME] Local Storage - medio: " + localStorage.getItem('medio'));
    console.log("[USERNAME] Local Storage - dificil: " + localStorage.getItem('dificil'));
    console.log("[USERNAME] cookie: " + document.cookie);
    window.parent.postMessage("voltar", '*');
}
