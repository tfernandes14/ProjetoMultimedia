var canvas = new Canvas();
var snakeRei;
var comida;
var stopAnimation;

var cookie = document.cookie;	/* musica=Off % som=Off $ dificuldade=facil % tentativas=1 % score=0;path=/ */
console.log("------------quizz ------------");
console.log("[QUIZZ] COOKIE: " + cookie);
var auxCookie = cookie.split("$");  // musica=Off%som=Off     dificuldade=facil%tentativas=1%score=0
var auxCookie2 = auxCookie[0].split("%");	// musica=Off     som=Off
var auxCookie3 = auxCookie[1].split("%");	// dificuldade=facil     tentativas=1     score=0
var auxCookie4 = auxCookie2[0].split("=");	// musica     Off
var auxCookie5 = auxCookie2[1].split("=");	// som     Off
var auxCookie6 = auxCookie3[0].split("=");	// dificuldade     facil
var auxCookie7 = auxCookie3[1].split("=");	// tentativas     1
var auxCookie8 = auxCookie3[2].split("="); // score     0
var musica = auxCookie4[1];
var som = auxCookie5[1];
var dificuldade = auxCookie6[1];
var tentativas = auxCookie7[1];
var score = auxCookie8[1];
console.log("[QUIZZ] Cookie musica: " + musica);
console.log("[QUIZZ] Cookie som: " + som);
console.log("[QUIZZ] Cookie dificuldade: " + dificuldade);
console.log("[QUIZZ] Cookie tentativas: " + tentativas);
console.log("[QUIZZ] Cookie score: " + score);

//Classe CANVAS
canvas.element = document.getElementById('myCanvas');
canvas.ctx = canvas.element.getContext('2d');
canvas.width = canvas.element.getAttribute('width'); //Vai buscar a largura da canvas criada no HTML
canvas.height = canvas.element.getAttribute('height'); //Vai buscar o comprimento da canvas criada no HTML
canvas.unidade = 20; //Altura e largura de cada quadradinho

canvas.reset(); //Vai desenhar a canvas original

var jogo = new Jogo();//Cria nova classe jogo
if (dificuldade == "facil"){
	jogo.fps = 10;	//fps, aka velocidade da snake
}
else if (dificuldade == "medio"){
	jogo.fps = 12.5;
}
else if (dificuldade == "dificil"){
	jogo.fps = 15;
}
jogo.pontos = 0;

//CALL INICIAL PARA COMEÇAR O JOGO
jogo.start();
jogo.loop();

//Teclado funcionar
document.onkeydown = function(event) {
	if(typeof snakeRei !== 'undefined'){
		var key = (event.keyCode ? event.keyCode : event.which);
		var td;
		if (snakeRei.pd.length) {
			td = snakeRei.pd[snakeRei.pd.length - 1];
		} else {
			td = snakeRei.direction;
		}
		if(key == "37" && td != 'right') {
			snakeRei.pd.push('left');
		} else if(key == "38" && td != 'down') {
			snakeRei.pd.push('up');
		} else if(key == "39" && td != 'left') {
			snakeRei.pd.push('right');
		} else if(key == "40" && td != 'up') {
			snakeRei.pd.push('down');
		} else if(key == "32"){ //ESPAÇO
			jogo.restart();	//Restart do jogo
		} else if(key == '46'){ //DELETE
			jogo.pontos++; //adiciona 1 ponto (saltar rapido o jogo)
		}
	}
};
