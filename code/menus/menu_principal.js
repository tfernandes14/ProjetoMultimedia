"use strict";

(function(){
	window.addEventListener("load", main);
}());

function main() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#0c6384";
    ctx.font = "115px Showcard Gothic";
    ctx.fillText("Frikin'", 203, 140);
    ctx.fillText("Birds", 233, 258);
    var jogarBtn = document.getElementById("jogarBtn");
    var highscoresBtn = document.getElementById("highscoresBtn");
    var opcoesBtn = document.getElementById("opcoesBtn");
    var creditosBtn = document.getElementById("creditosBtn");
    /*var gif = new GIF("../resources/trofeu.gif");
    ctx.drawImage(gif, 300, 200);*/

    function listenersButtons(ev){
        switch (ev.currentTarget.id) {
            case("jogarBtn"):
                window.parent.postMessage("jogar",'*');
                break;
            case("highscoresBtn"):
                window.parent.postMessage("highscores",'*');
                break;
            case("opcoesBtn"):
                window.parent.postMessage("opcoes",'*');
                break;
            case("creditosBtn"):
                window.parent.postMessage("creditos",'*');
                break;
        }
    }

    jogarBtn.addEventListener("click", listenersButtons);
    highscoresBtn.addEventListener("click", listenersButtons);
    opcoesBtn.addEventListener("click", listenersButtons);
    creditosBtn.addEventListener("click", listenersButtons);
}