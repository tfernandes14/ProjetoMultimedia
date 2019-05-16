"use strict";

(function(){
	window.addEventListener("load", main);
}());

function main() {
    var cookie = document.cookie;
    var musicBtn = document.getElementById("musicBtn");
    var soundBtn = document.getElementById("soundBtn");
    var sairBtn = document.getElementById("sairBtn");
    var dois = cookie.split("%");
    var musicaCookie = dois[0].split("=");
    var auxSomCookie = dois[1].split("$");
    var somCookie = auxSomCookie[0].split("=");
    var musica;
    var som;
    if (musicaCookie[1] == "On"){
        musicBtn.innerHTML = "<img src='../../resources/menus/soundOnBtn.png'>";
        musica = 1;
    }
    else{
        musicBtn.innerHTML = "<img src='../../resources/menus/soundOffBtn.png'>";
        musica = 0;
    }
    if (somCookie[1] == "On"){
        soundBtn.innerHTML = "<img src='../../resources/menus/soundOnBtn.png'>";
        som = 1;
    }
    else {
        soundBtn.innerHTML = "<img src='../../resources/menus/soundOffBtn.png'>";
        som = 0;
    }
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#0c6384";
    ctx.font = "100px Showcard Gothic";
    ctx.fillText("Opções", 215, 160);
    ctx.fillStyle = "#a35221";
    ctx.font = "50px Myriad Pro";
    ctx.fillText("Música", 184, 272);
    ctx.fillText("Sons", 184, 434);

    function listenersButtons(ev){
        switch (ev.currentTarget.id) {
            case("sairBtn"):
                window.parent.postMessage("voltar",'*');
                break;
            case("musicBtn"):
                if (musica == 0){
                    window.parent.postMessage("musicaOn",'*');
                    musicBtn.innerHTML = "<img src='../../resources/menus/soundOffBtn.png'>";
                    musica = 1;
                }
                else if (musica == 1){
                    window.parent.postMessage("musicaOff",'*');
                    musicBtn.innerHTML = "<img src='../../resources/menus/soundOnBtn.png'>";
                    musica = 0;
                }
                break;
            case("soundBtn"):
                if (som == 0){
                    window.parent.postMessage("somOn",'*');
                    soundBtn.innerHTML = "<img src='../../resources/menus/soundOffBtn.png'>";
                    som = 1;
                }
                else if (som == 1) {
                    window.parent.postMessage("somOff", '*');
                    soundBtn.innerHTML = "<img src='../../resources/menus/soundOnBtn.png'>";
                    som = 0;
                }
                break;
        }
    }
    musicBtn.addEventListener("click", listenersButtons);
    soundBtn.addEventListener("click", listenersButtons);
    sairBtn.addEventListener("click", listenersButtons);
}