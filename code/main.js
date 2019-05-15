"use strict";

(function(){
    document.cookie = "mu sica=On%som=On;path=/";
	window.addEventListener("load", main);
}());

function main() {
	var iframe = document.getElementById("iframe");
    var nomes = ["html/menus/menu_principal.html", "html/menus/dificuldade.html", "html/menus/opcoes.html", "html/menus/creditos.html", "html/floppyEagle/index.html", "html/memGame/memGame.html", "html/quizz/questionario.html"] ;
    showPage(iframe, nomes[0]);

    var musica = new Audio("./resources/menus/musica_menu_principal.mp3");
    var som = new Audio("./resources/menus/sons.mp3");
    console.log(som);
    musica.loop = true;
    som.loop = true;
    musica.volume = 0.1;
    som.volume = 0;
    musica.play();
    som.play();

    window.addEventListener("message", auxMensagem);
    function auxMensagem(ev) {
        if (ev.data == "jogar"){
            showPage(iframe, nomes[1], musica, som);
        }
        else if (ev.data == "highscores"){
            console.log("HIGHSCORES");
        }
        else if (ev.data == "opcoes"){
            showPage(iframe, nomes[2], musica, som);
        }
        else if (ev.data == "creditos"){
            showPage(iframe, nomes[3], musica, som);
        }
        else if (ev.data == "facil"){
            if (musica.muted && som.muted){
                document.cookie = "musica=Off%som=Off$dificuldade=facil;path=/";
            }
            else if (musica.muted && !som.muted){
                document.cookie = "musica=Off%som=On$dificuldade=facil;path=/";
            }
            else if (!musica.muted && som.muted){
                document.cookie = "musica=On%som=Off$dificuldade=facil;path=/";
            }
            else if (!musica.muted && !som.muted){
                document.cookie = "musica=On%som=On$dificuldade=facil;path=/";
            }
            showPage(iframe, nomes[4], musica, som);
        }
        else if (ev.data == "medio"){
            if (musica.muted && som.muted){
                document.cookie = "musica=Off%som=Off$dificuldade=medio;path=/";
            }
            else if (musica.muted && !som.muted){
                document.cookie = "musica=Off%som=On$dificuldade=medio;path=/";
            }
            else if (!musica.muted && som.muted){
                document.cookie = "musica=On%som=Off$dificuldade=medio;path=/";
            }
            else if (!musica.muted && !som.muted){
                document.cookie = "musica=On%som=On$dificuldade=medio;path=/";
            }
            showPage(iframe, nomes[4], musica, som);
        }
        else if (ev.data == "dificil"){
            if (musica.muted && som.muted){
                document.cookie = "musica=Off%som=Off$dificuldade=dificil;path=/";
            }
            else if (musica.muted && !som.muted){
                document.cookie = "musica=Off%som=On$dificuldade=dificil;path=/";
            }
            else if (!musica.muted && som.muted){
                document.cookie = "musica=On%som=Off$dificuldade=dificil;path=/";
            }
            else if (!musica.muted && !som.muted){
                document.cookie = "musica=On%som=On$dificuldade=dificil;path=/";
            }
            showPage(iframe, nomes[4], musica, som);
        }
        else if (ev.data == "voltar"){
            showPage(iframe, nomes[0], musica, som);
        }
        else if (ev.data == "musicaOff"){
            musica.muted = false;
        }
        else if (ev.data == "musicaOn"){
            musica.muted = true;
        }
        else if (ev.data == "somOff"){
            som.muted = false;
        }
        else if (ev.data == "somOn"){
            som.muted = true;
        }
        else if (ev.data == "memoria"){
            showPage(iframe, nomes[5], musica, som);
        }
        else if (ev.data == "quizz"){
            showPage(iframe, nomes[6], musica, som);
        }
    }
}

function showPage(iframe, nomes, musica, som) {
    iframe.src = nomes;
    if (nomes == "html/menus/opcoes.html"){
        if (musica.muted && som.muted){
            document.cookie = "musica=Off%som=Off;path=/";
        }
        else if (musica.muted && !som.muted){
            document.cookie = "musica=Off%som=On;path=/";
        }
        else if (!musica.muted && som.muted){
            document.cookie = "musica=On%som=Off;path=/";
        }
        else if (!musica.muted && !som.muted){
            document.cookie = "musica=On%som=On;path=/";
        }
    }
}
