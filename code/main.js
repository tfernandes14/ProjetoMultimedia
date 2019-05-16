"use strict";

(function(){
    document.cookie = "musica=On%som=On;path=/";
	window.addEventListener("load", main);
}());

function main() {
	var iframe = document.getElementById("iframe");
    var nomes = ["html/menus/menu_principal.html", "html/menus/dificuldade.html", "html/menus/opcoes.html", "html/menus/creditos.html", "html/floppyEagle/index.html", "html/memGame/memGame.html", "html/quizz/questionario.html", "html/menus/highscores.html"] ;
    showPage(iframe, nomes[0]);
    var score = 0;

    var musica = new Audio("./resources/menus/musica_menu_principal.mp3");
    var som = new Audio("./resources/menus/sons.mp3");
    musica.loop = true;
    musica.autoplay = true;
    som.loop = true;
    som.autoplay = true;
    musica.volume = 0;
    som.volume = 1;
    musica.play();
    som.play();

    window.addEventListener("message", auxMensagem);
    function auxMensagem(ev) {
        if (ev.data == "jogar"){
            showPage(iframe, nomes[1], musica, som);
        }
        else if (ev.data == "highscores"){
            showPage(iframe, nomes[7], musica, som);
        }
        else if (ev.data == "opcoes"){
            showPage(iframe, nomes[2], musica, som);
        }
        else if (ev.data == "creditos"){
            showPage(iframe, nomes[3], musica, som);
        }
        else if (ev.data == "facil"){
            if (musica.muted && som.muted){
                score = 0;
                document.cookie = "musica=Off%som=Off$dificuldade=facil%tentativas=1%score=0;path=/";
            }
            else if (musica.muted && !som.muted){
                score = 0;
                document.cookie = "musica=Off%som=On$dificuldade=facil%tentativas=1%score=0;path=/";
            }
            else if (!musica.muted && som.muted){
                score = 0;
                document.cookie = "musica=On%som=Off$dificuldade=facil%tentativas=1%score=0;path=/";
            }
            else if (!musica.muted && !som.muted){
                score = 0;
                document.cookie = "musica=On%som=On$dificuldade=facil%tentativas=1%score=0;path=/";
            }
            showPage(iframe, nomes[4], musica, som);
        }
        else if (ev.data == "medio"){
            if (musica.muted && som.muted){
                score = 0;
                document.cookie = "musica=Off%som=Off$dificuldade=medio%tentativas=1%score=0;path=/";
            }
            else if (musica.muted && !som.muted){
                score = 0;
                document.cookie = "musica=Off%som=On$dificuldade=medio%tentativas=1%score=0;path=/";
            }
            else if (!musica.muted && som.muted){
                score = 0;
                document.cookie = "musica=On%som=Off$dificuldade=medio%tentativas=1%score=0;path=/";
            }
            else if (!musica.muted && !som.muted){
                score = 0;
                document.cookie = "musica=On%som=On$dificuldade=medio%tentativas=1%score=0;path=/";
            }
            showPage(iframe, nomes[4], musica, som);
        }
        else if (ev.data == "dificil"){
            if (musica.muted && som.muted){
                score = 0;
                document.cookie = "musica=Off%som=Off$dificuldade=dificil%tentativas=1%score=0;path=/";
            }
            else if (musica.muted && !som.muted){
                score = 0;
                document.cookie = "musica=Off%som=On$dificuldade=dificil%tentativas=1%score=0;path=/";
            }
            else if (!musica.muted && som.muted){
                score = 0;
                document.cookie = "musica=On%som=Off$dificuldade=dificil%tentativas=1%score=0;path=/";
            }
            else if (!musica.muted && !som.muted){
                score = 0;
                document.cookie = "musica=On%som=On$dificuldade=dificil%tentativas=1%score=0;path=/";
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
        else if (ev.data.startsWith("memoria")){
            var aux = ev.data;
            var pontos = aux.split("$");
            score += pontos[1];
            console.log("PONTUAÇÃO ATUAL: " + score);
            var cookie = document.cookie;	/* musica=Off % som=Off $ dificuldade=facil % tentativas=1 % score=0;path=/ */
            console.log("[memoria] COOKIE: " + cookie);
            var auxCookie = cookie.split("$");  // musica=Off%som=Off     dificuldade=facil%tentativas=1%score=0
            var auxCookie2 = auxCookie[0].split("%");	// musica=Off     som=Off
            var auxCookie3 = auxCookie[1].split("%");	// dificuldade=facil     tentativas=1     score=0
            var auxCookie4 = auxCookie2[0].split("=");	// musica     Off
            var auxCookie5 = auxCookie2[1].split("=");	// som     Off
            var auxCookie6 = auxCookie3[0].split("=");	// dificuldade     facil
            var auxCookie7 = auxCookie3[1].split("=");	// tentativas     1
            musica = auxCookie4[1];
            som = auxCookie5[1];
            var dificuldade = auxCookie6[1];
            var tentativas = auxCookie7[1];
            document.cookie = "musica=" + musica + "%som=" + som + "$dificuldade=" + dificuldade + "%tentativas=" + tentativas + "%score=" + score + ";path=/";
            /*console.log("Cookie musica: " + musica);
            console.log("Cookie som: " + som);
            console.log("Cookie dificuldade: " + dificuldade);
            console.log("Cookie tentativas: " + tentativas);
            console.log("Cookie score: " + score);*/
            showPage(iframe, nomes[5], musica, som);
        }
        else if (ev.data.startsWith("quizz")){
            var aux = ev.data;
            var pontos = aux.split("$");
            score = parseInt(score) + parseInt(pontos[1]);
            console.log("PONTUAÇÃO ATUAL: " + score);

            var cookie = document.cookie;	/* musica=Off % som=Off $ dificuldade=facil % tentativas=1 % score=0;path=/ */
            console.log("[quizz] COOKIE: " + cookie);
            var auxCookie = cookie.split("$");  // musica=Off%som=Off     dificuldade=facil%tentativas=1%score=0
            var auxCookie2 = auxCookie[0].split("%");	// musica=Off     som=Off
            var auxCookie3 = auxCookie[1].split("%");	// dificuldade=facil     tentativas=1     score=0
            var auxCookie4 = auxCookie2[0].split("=");	// musica     Off
            var auxCookie5 = auxCookie2[1].split("=");	// som     Off
            var auxCookie6 = auxCookie3[0].split("=");	// dificuldade     facil
            var auxCookie7 = auxCookie3[1].split("=");	// tentativas     1
            musica = auxCookie4[1];
            som = auxCookie5[1];
            var dificuldade = auxCookie6[1];
            var tentativas = auxCookie7[1];
            document.cookie = "musica=" + musica + "%som=" + som + "$dificuldade=" + dificuldade + "%tentativas=" + tentativas + "%score=" + score + ";path=/";
            console.log("Cookie musica: " + musica);
            console.log("Cookie som: " + som);
            console.log("Cookie dificuldade: " + dificuldade);
            console.log("Cookie tentativas: " + tentativas);
            console.log("Cookie score: " + score);

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
