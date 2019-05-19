"use strict";

(function(){
	window.addEventListener("load", main);
}());

function main() {
    var musicBtn = document.getElementById("musicBtn");
    var soundBtn = document.getElementById("soundBtn");
    var sairBtn = document.getElementById("sairBtn");
    var cookie = document.cookie;	/* musica=Off % som=Off $ dificuldade=facil % tentativas=1 % score=0;path=/ */
	console.log("------------ opções ------------");
	console.log("[OPÇOES] COOKIE: " + cookie);
	var auxCookie = cookie.split("$");  // musica=Off%som=Off     dificuldade=facil%tentativas=1%score=0
	var auxCookie2 = auxCookie[0].split("%");	// musica=Off     som=Off
	var auxCookie4 = auxCookie2[0].split("=");	// musica     Off
	var auxCookie5 = auxCookie2[1].split("=");	// som     Off
	var musicaCookie = auxCookie4[1];
	var somCookie = auxCookie5[1];
	var musica, som;
	console.log("[OPÇOES] Cookie musica: " + musicaCookie);
	console.log("[OPÇOES] Cookie som: " + somCookie);
    if (musicaCookie == "On"){
        musicBtn.innerHTML = "<img src='../../resources/menus/soundOnBtn.png'>";
        musica = 0;
    }
    else{
        musicBtn.innerHTML = "<img src='../../resources/menus/soundOffBtn.png'>";
        musica = 1;
    }
    if (somCookie == "On"){
        soundBtn.innerHTML = "<img src='../../resources/menus/soundOnBtn.png'>";
        som = 0;
    }
    else {
        soundBtn.innerHTML = "<img src='../../resources/menus/soundOffBtn.png'>";
        som = 1;
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
    console.log("[OPÇOES] musica: " + musica);
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