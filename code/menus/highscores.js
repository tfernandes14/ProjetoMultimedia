"use strict";

(function(){
	window.addEventListener("load", main);
}());

function main(){
    console.log("----------- highscores -----------");
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#0c6384";
    ctx.font = "100px Showcard Gothic";
    ctx.fillText("Highscores", 93, 160);
    var img = document.getElementById("tabela");
    ctx.drawImage(img, 50, 185);
    var voltarBtn = document.getElementById("voltarBtn");
    voltarBtn.addEventListener("click", listenersButtons);
    var lido;
    var coisaFacil = localStorage.getItem('facil');
    console.log("[HIGHSCORES] coisaFacil: " + coisaFacil);
    var coisaMedio = localStorage.getItem('medio');
    console.log("[HIGHSCORES] coisaMedio: " + coisaMedio);
    var coisaDificil = localStorage.getItem('dificil');
    console.log("[HIGHSCORES] coisaDificil: " + coisaDificil);

    if (coisaFacil !== 'null/'){
        console.log("[HIGHSCORES] Local Storage - fácil: " + coisaFacil);
        lido = coisaFacil.split("/");     // tff 154   fg 150    ca 78
        ctx.fillStyle = "#d6c14d";
        for (let i = 0; i < lido.length; i++){
            console.log((i + 1) + "º lugar: " + lido[i]);
            ctx.font = "50px Myriad Pro";
            ctx.fillText(lido[i], 100, 300 + 80 * i);
        }
    }

    if (coisaMedio !== 'null/'){
        console.log("[HIGHSCORES] Local Storage - médio: " + coisaMedio);
        lido = coisaMedio.split("/");     // tff 154   fg 150    ca 78
        ctx.fillStyle = "#d6c14d";
        for (let i = 0; i < lido.length; i++){
            console.log((i + 1) + "º lugar: " + lido[i]);
            ctx.font = "50px Myriad Pro";
            ctx.fillText(lido[i], 330, 300 + 80 * i);
        }
    }

    if (coisaDificil !== 'null/'){
        console.log("[HIGHSCORES] Local Storage - dificil: " + coisaDificil);
        lido = coisaDificil.split("/");     // tff 154   fg 150    ca 78
        ctx.fillStyle = "#d6c14d";
        for (let i = 0; i < lido.length; i++){
            console.log((i + 1) + "º lugar: " + lido[i]);
            ctx.font = "50px Myriad Pro";
            ctx.fillText(lido[i], 560, 300 + 80 * i);
        }
    }

    function listenersButtons(ev){
        if (ev.currentTarget.id === ("voltarBtn")) {
            window.parent.postMessage("voltar",'*');
        }
    }
}