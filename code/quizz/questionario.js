"use strict";

(function(){
	window.addEventListener("load", main);
}());

/*perguntas das dificuldades*/
const Facil = "Homero foi um poeta... /  Grego /  Romano /  Persa /  Inca /  Grego /,Começamos a usar telemóveis na década de... /  60 /  70 /  80 /  90 /  90 /,Qual destes compositores era surdo? /  Bach /  Verdi /  Beethoven /  Richard Strauss /  Beethoven /,Em que modalidade se destaca a atleta Naide Gomes? /  Salto em comprimento /  Maratona /  Natação /  Salto em altura /  Salto em comprimento /,Quantos metros de comprimento tem uma piscina olímpica? /  25 /  50 /  75 /  100 /  50 /,Qual destas cidades é a capital da Áustria? /  Viena /  Bruxelas /  Copenhaga /  Kiev /  Viena /,Como se chamava a mascote da Expo-98? /  Gil /  Marco /  Quinas /  Vasco /  Gil /,A que país chegaram os portugueses em 1498? /  Brasil /  Índia /  Marrocos /  Macau /  Índia /, Os Açores e a Madeira têm quantos distritos no total? /  2 /  3 /  4 /  5 /  4 /,Qual foi o nome dado à primeira ovelha clonada? /  Miracle /  Dolly /  Angel /  First /  Dolly /,Qual destas cidades Portuguesas é considerada o berço da nacionalidade? /  Guimarães /  Porto /  Lisboa /  Chaves /  Guimarães /,A mascote do Euro 2004 chamava-se... /  Gil /  Marco /  Quinas /  Vasco /  Quinas /,Qual destes rios escavou o Grand Canyon? /  Nilo /  Colorado /  Reno /  Douro /  Colorado /,O Pégaso(mitologia grega) é um... /  Boi /  Cão /  Touro /  Cavalo /  Cavalo /,Em que clube espanhol fez carreira Paulo Futre? /  Atlético Madrid /  Valência /  Barcelona /  Real Madrid /  Atlético Madrid /,Quem é que o ogre vai conhecer no 'Shrek 2'? /  O Papa /  Os sogros /  O rei /  A bruxa /  Os sogros   /,Uma parte do refrão da musica de Nelly Furtado 'Força': 'é uma força que ninguém pode...' /  parar /  cantar /  matar /  imitar /  parar /,O Quimono é um traje tradicional de que país? /  China /  Japão /  Índia /  Macau /  Japão /,Catarina de Bragança foi rainha de qual destes países? /  Portugal /  Espanha /  França /  Inglaterra /  Inglaterra /,Onde nasceu o futebolista Pauleta? /  Açores /  Madeira /  Porto /  Lisboa /  Açores /,O programa 'Batatoon' era protagonizado por... /  um cão /  um palhaço /  um super herói /  um boneco /  um palhaço /,O kanguru é um animal característico de que país? /  Canadá /  Austrália /  Angola /  Madagáscar /  Austrália /,A banda desenhada Japonesa designa-se por... /  Kishi /  Manga /  Kimba /  Kushi /  Manga /,Um rio gelado é chamado de... /  Aurora Boreal /  Tundra /  Glaciar /  Calipo /  Glaciar /,Qual destas artes Charles Chaplin melhor dominava? /  Dança /  Mímica /  Canto /  Teatro /  Mímica";
const Medio = "A rainha D.Estefânia casou com... /  D.Pedro V /  D.João II /  D.Dinis /  D.Manuel I /  D.Pedro V /,Júlio Verne foi um dos pioneiros da... /  Ficção Científica /  Romance Histórico /  Comédia /  Pintura /  Ficção Científica /,Qual a nacionalidade de João Havelange (presidente da FIFA entre 1974 e 1998)? /  Portuguesa /  Italiana /  Espanhola /  Brasileira /  Brasileira /,Tânia Ribas de Oliveira é... /  Modelo /  Pintora /  Cantora /  Apresentadora de televisão /  Apresentadora de televisão /,A Índia tornou-se independente em que ano? /  1914 /  1947 /  1998 /  1985 /  1947 /,O sueco Bjorn Borg foi um famoso... /  Piloto /  Tenista /  Futebolista /  Cantor /  Tenista /,O estilo Barroco surgiu em que século? /  XV /  XVII /  XVIII /  XIX /  XVII /,A Emissora Nacional foi a 1ª estação de rádio portuguesa. Em que ano foi criada? /  1935 /  1942 /  1953 /  1975 /  1935 /,Em que ano abriu o primeiro restaurante McDonald's? /  1955 /  1967 /  1979 /  1984 /  1955 /,O fundador da Cruz Vermelha era de que nacionalidade? /  Alemão /  Inglês /  Suíço /  Francês /  Suíço /,A Eslovénia fez parte de que império? /  Inca /  Romano /  Grego /  Persa /  Romano /,Quantas corridas planas fazem parte do decatlo? /  Duas /  Três /  Quatro /  Cinco /  Três /,Qual destas cidades é a capital do Canadá? /  Otawa /  Toronto /  Montreal /  Regina /  Otawa /,George Michael lançou o álbum (2004)...? /  Wham /  Patience /  Music /  Cleopetra /  Patience /,A Micronésia é um conjunto de ilhas situadas no oceano... /  Pacífico /  Atlântico /  Índico /  Ártico /  Pacífico /,Hong Kong era uma cólonia (antes de ter voltado a ser governada pela China)... /  Holandesa /  Alemã /  Portuguesa /  Britânica /  Britânica /,Quem inventou a semana com sete dias? /  Os Gregos /  Os Babilónios /  Os Romanos /  Os Persas /  Os Babilonios /,Os Judeus rezam num(a)... /  Templo /  Mesquita /  Sinagoga /  Igreja /  Sinagoga /,O Muro de Berlim foi derrubado em que ano? /  1976 /  1984 /  1989 /  1980 /  1989 /,Que atriz portuguesa entrou no filme 'O Amor Acontece'? /  Lúcia Moniz /  Lídia Franco /  Beatriz Batarda /  Alexandra Lecanstre /  Lúcia Moniz /,Em que ano ocorreu o ataque a Pearl Harbor? /  1941 /  1945 /  1938 /  1944 /  1941 /,A Indonésia tem cerca de quantas ilhas? /  4 mil /  9 mil /  11 mil /  13 mil /  13 mil /,De que país é originária a Valsa? /  Irlanda /  Áustria /  Alemanha /  República Checa /  Áustria /,A que estilo de arquitetura pertence o Palácio de Versalhes? /  Gótico /  Manuelino /  Barroco /  Contemporâneo /  Barroco /,O hino nacional Francês chama-se... /  A Francesinha /  A Marselhesa /  A Parisiense /  A Lyonesa /  A Marselhesa";
const Dificil = "Salvador Allende foi chefe de estado em que país sul americano? /  Panamá /  Chile /  Peru /  Argentina /  Chile /,Como se chamava o conhecido comandante do navio Calypso que ajudou a inventar o escafandro? /  Cousteau /  Beauvoir /  Sagan /  Francis Drake /  Cousteau /,Quem foi a primeira mulher a ganhar um prémio Nobel pelo estudo da radioatividade? /  Mary Quant /  Marie Curie /  Simeone de Beauvoir /  Herta Muller /  Marie Curie /,Qual destes países já se chamou Ceilão? /  Tailândia /  Sri Lanka /  Vietname /  Macau /  Sri Lanka /,Qual destes arquitetos portugueses desenhou o Centro Cultural de Belém? /  Siza Vieira /  Souto Moura /  Manuel Salgado /  Raul Ferreira /  Manuel Salgado /,Kylie Minogue já foi casada quantas vezes? /  Zero /  Uma /  Duas /  Três /  Zero /,Que dois países foram oponentes na crise de Cuba? /  EUA e URSS /  EUA e Inglaterra /  Cuba e França /  URSS e Inglaterra /  EUA e URSS /,António Sala já deu voz às manhãs de que rádio? /  Rádio Renascença /  Rádio Comercial /  Rádio Cidade /  Rádio Sim /  Rádio Renascença /,O Capitólio foi o centro político e religioso de que império? /  Inca /  Romano /  Persa /  Fenício /  Romano /,Em que século James Cook tomou posse da Austrália em nome da Grã-Bretanha? /  XIII /  XV /  XVI /  XVIII /  XVIII /,Michael Doohan foi diversas vezes campeão do mundo em que modalidade? /  Ténis /  Golfe /  Motociclismo /  Automobilismo /  Motociclismo /,Em que ano ocorreu a Grande Depressão nos EUA? /  1901 /  1918 /  1929 /  1932 /  1929 /,Qual é a nacionalidade do clube de futebol Ferencvaros? /  Húngara /  Romena /  Russa /  Polaca /  Húngara /,Quem começou a comercializar a pastilha elástica? /  Thomas Adams /  John Douglas /  Charles Gum /  Peter Franklin /  Thomas Adams /,Que arquiteto desenhou o Pavilhão de Portugal na Expo '98? /  Siza Vieira /  Souto Moura /  Frank Lloyd Wright /  Joseph Marcus /  Siza Vieira /,O primeiro estúdio de cinema de Hollywood nasceu em que ano? /  1911 /  1926 /  1934 /  1922 /  1911 /,Augusto Comte ficou conhecido como o pai do... /  Racionalismo /  Positivismo /  Psicanálise /  Behaviorismo /  Positivismo /,Quantos metros tem o AirBus A380? /  cerca de 63m /  cerca de 73m /  cerca de 83m /  cerca de 93m /  cerca de 73m /,Quantas viagens de circum-navegação fez o inglês James Cook? /  Uma /  Duas /  Três /  Quatro /  Duas /,Quantos milhões de iPods foram vendidos em 2004? /  2M /  5M /  7M /  10M /  10M /,Quantos metros de comprimento tinha o Titanic? /  173m /  269m /  315m /  231m /  269m /,Que cidade portuguesa se chamou Pax Júlia? /  Aveiro /  Chaves /  Beja /  Portalegre /  Beja /,Que atriz fez de pugilista no filme 'Million Dollar Baby'? /  Angelina Jolie /  Hilarie Swank /  Jenifer Lawrence /  Jessica Palma /  Hilarie Swank /,O Coliseu de Roma tinha lugar para quantos espectadores? /  20 mil /  50 mil /  70 mil /  100 mil /  100 mil /,Qual destas atrizes foi a Chinatown? /  Faye Dunaway /  Meryl Streep /  Vanessa Redgrave /  Scarlett Jonhson /  Faye Dunaway /,Que cantora fez de Evita no filme de Alan Parker? /  Madonna /  Britney Spears /  Jennifer Lopez /  Scarlett Jonhson /  Madonna";

const tempoJogo=31000; //31 segundos
const transformaTempo= 1000; //para passar de milisegundos para segundos

function main(){
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
	var botoes = new Array(6);
	var imgfundo = new Image();
	imgfundo.addEventListener("load", drawfundo);
	imgfundo.src = '../../resources/quizz/fundoPerguntas.png';
	var imgOptn = new Image();
	imgOptn.addEventListener("load", select);
	imgOptn.src = '../../resources/quizz/opt.png';
	var img5050= new Image();
	img5050.addEventListener("load", f5050);
	img5050.src = '../../resources/quizz/5050.png';
	var imgtroca = new Image();
	imgtroca.addEventListener("load", ftroca);
	imgtroca.src = '../../resources/quizz/troca.png';
	var imgSel= new Image();
	imgSel.addEventListener("load", loading);
	imgSel.src = '../../resources/quizz/selecionado.png';
	var imgCerto = new Image();
	imgCerto.addEventListener("load", loading);
	imgCerto.src = '../../resources/quizz/certo.png';
	var imgErrado = new Image();
	imgErrado.addEventListener("load", loading);
	imgErrado.src = '../../resources/quizz/errado.png';
	var use5050 = new Image();
	use5050.addEventListener("load", loading);
	use5050.src = '../../resources/quizz/5050B.png';
	var useTrocar = new Image();
	useTrocar.addEventListener("load", inicia);
	var clock = new Audio("../../resources/quizz/clockTicking.mp3");
	clock.loop = true;
	clock.volume = 0.1;
	if (som != "Off"){
		clock.play();
	}
	useTrocar.src = '../../resources/quizz/trocaB.png';
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");

	var hipoteseA = window.document.getElementById("HipoteseA");
	var hipoteseB = window.document.getElementById("HipoteseB");
	var hipoteseC = window.document.getElementById("HipoteseC");
	var hipoteseD = window.document.getElementById("HipoteseD");
	var pergunta = window.document.getElementById("Pergunta");
	var tempo = window.document.getElementById("Tempo");
	hipoteseA.style.cursor = "pointer";
	hipoteseB.style.cursor = "pointer";
	hipoteseC.style.cursor = "pointer";
	hipoteseD.style.cursor = "pointer";
	pergunta.style.cursor = "default";
	tempo.style.cursor = "default";

	function select(ev){
		for (var i = 0; i < 4; i++) {
			botoes[i]=new Botao(50,320+(70*i),ev.target.naturalWidth - 50,ev.target.naturalHeight,ev.target, true, true);
			botoes[i].draw(ctx);
		}
	}

	function ftroca(ev){
		botoes[5]= new Botao(450,15,ev.target.naturalWidth/2, ev.target.naturalHeight/2,ev.target, true);
		botoes[5].draw(ctx);
	}

	function f5050(ev){
		botoes[4]= new Botao(350,15,ev.target.naturalWidth/2, ev.target.naturalHeight/2,ev.target, true);
		botoes[4].draw(ctx);
	}

	function drawfundo(ev){
		ctx.drawImage(ev.target,0,0)
	}

	function loading(ev){}

	function inicia(ev){
		setTimeout(function(){},10000);
		var game;
		if (dificuldade == "facil"){
			game = new GameEnv(botoes[0], botoes[1],botoes[2],botoes[3], botoes[4], botoes[5],null, null, ctx, imgSel,imgCerto, imgErrado,imgOptn, use5050, ev.target, Facil, null, canvas, true, som);
		}
		else if (dificuldade == "medio"){
			game = new GameEnv(botoes[0], botoes[1],botoes[2],botoes[3], botoes[4], botoes[5],null, null, ctx, imgSel,imgCerto, imgErrado,imgOptn, use5050, ev.target, Medio, null, canvas, true, som);
		}
		else if (dificuldade == "dificil"){
			game = new GameEnv(botoes[0], botoes[1],botoes[2],botoes[3], botoes[4], botoes[5],null, null, ctx, imgSel,imgCerto, imgErrado,imgOptn, use5050, ev.target, Dificil, null, canvas, true, som);
		}
		iniciajogo(game, canvas, som);
		game.carregaPergunta1();
	}
}

function shuffle(pergunta){ // troca a ordem das respostas
	var aux = new Array(4);
	aux[0] = pergunta.opA;
	aux[1] = pergunta.opB;
	aux[2] = pergunta.opC;
	aux[3] = pergunta.opD;
	var guarda;

	var random;

	for(let i=0; i<4 ; i++){
		random = Math.round(Math.random()*3);
		guarda = aux[random];
		aux[random] = aux[i];
		aux[i] = guarda;
	}

	return new Pergunta(pergunta.pergunta , aux[0], aux[1], aux[2], aux[3], pergunta.resposta);
}


function resposta_correta(pergunta){ //método que retorna a posição onde se encontra a resposta correta

	var a = pergunta.opA;
	var b = pergunta.opB;
	var c = pergunta.opC;
	var d = pergunta.opD;
	var r = pergunta.resposta;

	if(r == a)
		return 0;
	else if(r == b)
		return 1;
	else if(r == c)
		return 2;
	else if(r == d)
		return 3;
}

function iniciajogo(game, canvas, som){
	game.parar= true;
	game.loopTempo(0, canvas);
	HipoteseA.addEventListener("click", optnclick);
	HipoteseB.addEventListener("click", optnclick);
	HipoteseC.addEventListener("click", optnclick);
	HipoteseD.addEventListener("click", optnclick);
	canvas.addEventListener("click", handlerclick);
	canvas.addEventListener("acabou_o_tempo", remove);

	function optnclick(ev){
		game.parar= false;
		HipoteseA.removeEventListener("click", optnclick);
		HipoteseB.removeEventListener("click", optnclick);
		HipoteseC.removeEventListener("click", optnclick);
		HipoteseD.removeEventListener("click", optnclick);
		canvas.removeEventListener("click", handlerclick);
		window.cancelAnimationFrame(game.loopID);
		switch(ev.target.id){
			case ("HipoteseA"):
				game.botaoA.clear(game.ctx);
				game.botaoA.img= game.imgSel;
				game.botaoA.draw(game.ctx);
				break;
			case ("HipoteseB"):
				game.botaoB.clear(game.ctx);
				game.botaoB.img= game.imgSel;
				game.botaoB.draw(game.ctx);
				break;
			case ("HipoteseC"):
				game.botaoC.clear(game.ctx);
				game.botaoC.img= game.imgSel;
				game.botaoC.draw(game.ctx);
				break;
			case ("HipoteseD"):
				game.botaoD.clear(game.ctx);
				game.botaoD.img= game.imgSel;
				game.botaoD.draw(game.ctx);
				break;

		}
		var suspense = new Audio("../../resources/quizz/suspanceMusic.mp3");
		if (som != "Off"){
			suspense.play();
		}
		setTimeout(game.carregaCanvas.bind(game), 1750, ev);
	}

	function remove(ev){
		console.log("entrou no evento de remover o click");
		canvas.removeEventListener("acabou_o_tempo", remove);
		HipoteseA.removeEventListener("click", optnclick);
		HipoteseB.removeEventListener("click", optnclick);
		HipoteseC.removeEventListener("click", optnclick);
		HipoteseD.removeEventListener("click", optnclick);
		canvas.removeEventListener("click", handlerclick);
		var msg = "snake$" + game.certas;
		console.log("[QUIZZ] msg: " + msg);
		window.parent.postMessage(msg, "*");
	}

	function handlerclick(ev){
		if (game.b5050.mouseOverBoundingBox(ev) && game.b5050.clickable){
			game.b5050.img= game.use5050;
			game.b5050.draw(game.ctx);
			game.b5050.clickable= false;
			var res = resposta_correta(game.perguntaSel);
			var sel1= Math.round(Math.random()*3);
			do{
				var sel2= Math.round(Math.random()*3);
			}while(sel2 == sel1);
			if (sel1 == res){
				if(sel1+1==sel2){
					if(sel1 +2==4){
						sel1=1;
					}
					else{
						sel1=sel1+2;
					}
				}
				else{
					sel1=sel1 +1;
				}
			}
			else{
				if(sel1 == 4 && res!= 1){
					sel1=1;
				}
				else if (sel1==4 && res==1){
					sel1=1;
					do{
						sel1++;
					}while(sel1 == sel2);
				}

			}
			switch(sel1){
				case 0:
					HipoteseA.innerHTML="";
					HipoteseA.removeEventListener("click", optnclick);
					break;
				case 1:
					HipoteseB.innerHTML="";
					HipoteseB.removeEventListener("click", optnclick);
					break;
				case 2:
					HipoteseC.innerHTML="";
					HipoteseC.removeEventListener("click", optnclick);
					break;
				case 3: 
					HipoteseD.innerHTML="";
					HipoteseD.removeEventListener("click", optnclick);
					break;

			}
			if(sel2 == res){
				if (sel2 +1 == sel1){
					if (sel2+2 ==4){
						sel2=1;
					}
					else{
						sel2= sel2+2;
					}
				}
				else{
					sel2= sel2+1;
				}
			}
			else{
				if(sel2 == 4 && res!= 1){
					sel2=1;
				}
				else if (sel2==4 && res==1){
					sel2=1;
					do{
						sel2++;
					}while(sel1 == sel2);
				}

			}
			switch(sel2){
				case 0:
					HipoteseA.innerHTML="";
					HipoteseA.removeEventListener("click", optnclick);
					break;
				case 1:
					HipoteseB.innerHTML="";
					HipoteseB.removeEventListener("click", optnclick);
					break;
				case 2:
					HipoteseC.innerHTML="";
					HipoteseC.removeEventListener("click", optnclick);
					break;
				case 3: 
					HipoteseD.innerHTML="";
					HipoteseD.removeEventListener("click", optnclick);
					break;
			}
			console.log(sel1 + " "+ sel2);

		}
		else if(game.btroca.mouseOverBoundingBox(ev) && game.btroca.clickable){
				game.btroca.img= game.useTroca;
				game.btroca.draw(game.ctx);
				game.btroca.clickable= false;
				HipoteseA.addEventListener("click", optnclick);
				HipoteseB.addEventListener("click", optnclick);
				HipoteseC.addEventListener("click", optnclick);
				HipoteseD.addEventListener("click", optnclick);
				game.trocaPergunta();
		}
	}
}



