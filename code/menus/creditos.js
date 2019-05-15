"use strict";

(function(){
	window.addEventListener("load", main);
}());

function main() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var sairBtn = document.getElementById("sairBtn");
    ctx.fillStyle = "#0c6384";
    ctx.font = "100px Showcard Gothic";
    ctx.fillText("Créditos", 164, 160);
    ctx.fillStyle = "#a35221";
    ctx.font = "30px Myriad Pro";
    ctx.fillText("Este projeto foi realizado no âmbito da cadeira", 160-45, 225, 664);
    ctx.fillText("de Multimédia da Licenciatura em Engenharia", 162-45, 270+5, 664);
    ctx.fillText("Informática pelos alunos:", 267-25, 315+10, 664);
    ctx.fillText("- Carlos Abegão", 320-25, 360+15, 664);
    ctx.fillText("- Francisco Guerra", 308-25, 405+20, 664);
    ctx.fillText("- Tiago Fernandes", 308-25, 450+25, 664);
    sairBtn.addEventListener("click", botaoVoltar);
}


function botaoVoltar(ev) {
    if (ev.currentTarget.id == "sairBtn"){
        window.parent.postMessage("voltar", "*");
    }
}