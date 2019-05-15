"use strict";

(function(){
	window.addEventListener("load", main);
}());

function main(){
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#0c6384";
    ctx.font = "100px Showcard Gothic";
    ctx.fillText("Dificuldade", 82, 160);
    var facilBtn = document.getElementById("facilBtn");
    var medioBtn = document.getElementById("medioBtn");
    var dificilBtn = document.getElementById("dificilBtn");
    var voltarBtn = document.getElementById("voltarBtn");
    facilBtn.addEventListener("click", listenersButtons);
    medioBtn.addEventListener("click", listenersButtons);
    dificilBtn.addEventListener("click", listenersButtons);
    voltarBtn.addEventListener("click", listenersButtons);

    function listenersButtons(ev){
        switch (ev.currentTarget.id) {
            case("facilBtn"):
                window.parent.postMessage("facil",'*');
                break;
            case("medioBtn"):
                window.parent.postMessage("medio",'*');
                break;
            case("dificilBtn"):
                window.parent.postMessage("dificil",'*');
                break;
            case("voltarBtn"):
                window.parent.postMessage("voltar",'*');
                break;
        }
    }
}