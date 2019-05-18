"use strict";

(function(){
	window.addEventListener("load", main);
}());

function main(){
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#0c6384";
    ctx.font = "100px Showcard Gothic";
    ctx.fillText("Highscores", 93, 160);
    var img = document.getElementById("tabela");
    ctx.drawImage(img, 50, 185);
    var voltarBtn = document.getElementById("voltarBtn");
    voltarBtn.addEventListener("click", listenersButtons);

    if (localStorage.getItem('facil') === null){
        console.log("[OPÇOES] Local Storage - fácil: vazio");
    }
    else{
        console.log("[OPÇOES] Local Storage - fácil: " + localStorage.getItem('facil'));
    }

    if (localStorage.getItem('medio') === null){
        console.log("[OPÇOES] Local Storage - médio: vazio");
    }
    else{
        console.log("[OPÇOES] Local Storage - médio: " + localStorage.getItem('medio'));
    }

    if (localStorage.getItem('dificil') === null){
        console.log("[OPÇOES] Local Storage - difícil: vazio");
    }
    else{
        console.log("[OPÇOES] Local Storage - difícil: " + localStorage.getItem('dificil'));
    }

    function listenersButtons(ev){
        if (ev.currentTarget.id === ("voltarBtn")) {
            window.parent.postMessage("voltar",'*');
        }
    }
}