"use strict";

(function(){
	window.addEventListener("load", main);
}());
/*perguntas das dificuldades*/
const Facil= "Homero foi um poeta... /  Grego /  Romano /  Persa /  Inca /  Grego /,Comecamos a usar telemoveis na decada de... /  60 /  70 /  80 /  90 /  90 /,Qual destes compositores era surdo? /  Bach /  Verdi /  Beethoven /  Richard Strauss /  Beethoven /,Em que modalidade se destaca a atleta Naide Gomes? /  Salto em comprimento /  Maratona /  Natacao /  Salto em altura /  Salto em comprimento /,Quantos metros de comprimento tem uma piscina olimpica? /  25 /  50 /  75 /  100 /  50 /,Qual destas cidades e a capital da Austria? /  Viena /  Bruxelas /  Copenhaga /  Kiev /  Viena /,Como se chamava a mascote da Expo-98? /  Gil /  Marco /  Quinas /  Vasco /  Gil /,A que pais chegaram os portugueses em 1498? /  Brasil /  India /  Marrocos /  Macau /  India /,No total os Acores e a Madeira tem quantos distritos? /  2 /  3 /  4 /  5 /  4 /,Qual foi o nome dado a primeira ovelha clonada? /  Miracle /  Dolly /  Angel /  First /  Dolly /,Qual destas cidades Portuguesas e considerada o berco da nacionalidade? /  Guimaraes /  Porto /  Lisboa /  Chaves /  Guimaraes /,A mascote do Euro 2004 chamava-se... /  Gil /  Marco /  Quinas /  Vasco /  Quinas /,Qual destes rios escavou o Grand Canyon? /  Nilo /  Colorado /  Reno /  Douro /  Colorado /,Segundo a Mitologia Grega o Pegaso e um... /  Boi /  Cao /  Touro /  Cavalo /  Cavalo /,Em que clube espanhol fez carreira Paulo Futre? /  Atletico Madrid /  Valencia /  Barcelona /  Real Madrid /  Atletico Madrid /,Quem e que o ogre vai conhecer no Shrek 2? /  O Papa /  Os sogros /  O rei /  A bruxa /  Os sogros   /,Uma parte do refrao da musica de Nelly Furtado Forca e uma forca que ninguem pode... /  parar /  cantar /  matar /  imitar /  parar /,O Quimono e um traje tradicional de que pais? /  China /  Japao /  India /  Macau /  Japao /,Catarina de Braganca foi rainha de qual destes paises? /  Portugal /  Espanha /  Franca /  Inglaterra /  Inglaterra /,Onde nasceu o futebolista Pauleta? /  Acores /  Madeira /  Porto /  Lisboa /  Acores /,O programa Batatoon e protagonizado por... /  um cao /  um palhaco /  um super heroi /  um boneco /  um palhaco /,De que pai o Canguru e um animal caracteristico? /  Canada /  Australia /  Africa /  Madagascar /  Australia /,A banda desenhada Japonesa designa-se por... /  Kishi /  Manga /  Kimba /  Kushi /  Manga /,Um rio gelado e chamado de... /  Aurora Boreal /  Tundra /  Glaciar /  Calipo /  Glaciar /,Qual destas artes Charles Chaplin melhor dominava? /  Danca /  Mimica /  Canto /  Teatro /  Mimica";
const Medio= "A rainha D.Estefania casou com... /  D.Pedro V /  D.Joao II /  D.Dinis /  D.Manuel I /  D.Pedro V /,Julio Verne foi um dos pioneiros da... /  Ficcao Cientifica /  Romance Historio /  Comedia /  Pintura /  Ficcao Cientifica /,Qual a nacionalidade de Joao Havelange presidente da FIFA entre 1974 e 1998? /  Portuguesa /  Italiana /  Espanhola /  Brasileira /  Brasileira /,Tania Ribas de Oliveira e... /  Modelo /  Pintora /  Cantora /  Apresentadora de televisao /  Apresentadora de televisao /,A India tornou-se independente em que ano? /  1914 /  1947 /  1998 /  1985 /  1947 /,O sueco Bjorn Borg foi um famoso... /  Piloto /  Tenista /  Futebolista /  Cantor /  Tenista /,O estilo Barroco surgiu em que seculo? /  XV /  XVII /  XVIII /  XIX /  XVII /,A Emissora Nacional foi a primeira estacao de radio portugues. Em que ano foi criada? /  1935 /  1942 /  1953 /  1975 /  1935 /,Em que ano abriu o primeiro restaurante McDonalds? /  1955 /  1967 /  1979 /  1984 /  1955 /,O fundador da Cruz Vermelha era de que nacionalidade? /  Alemao /  Ingles /  Suico /  Frances /  Suico /,A Eslovenia fez parte que que imperio? /  Inca /  Romano /  Grego /  Persa /  Romano /,Quantas corridas planas fazem parte do decatlo? /  Duas /  Tres /  Quatro /  Cinco /  Tres /,Qual destas cidades e a capital do Canada? /  Otawa /  Toronto /  Montreal /  Regina /  Otawa /,Em 2004 George Michael lancou o album...? /  Wham /  Patience /  Music /  Cleopetra /  Patience /,A Micronesia e um conjunto de ilhas situado no oceano... /  Pacifico /  Atlantico /  Indico /  Artico /  Pacifico /,Antes de ter voltado a ser governada pela China Hong Kong era uma colonia... /  Holandesa /  Alema /  Portuguesa /  Britanica /  Britanica /,Quem inventou a semana com sete dias? /  Os Gregos /  Os Babilonios /  Os Romanos /  Os Persas /  Os Babilonios /,Os Judeus rezam num... /  Templo /  Mesquita /  Sinagoga /  Igreja /  Sinagoga /,O Muro de Berlim foi derrubado em que ano? /  1976 /  1984 /  1989 /  1980 /  1989 /,Que atriz portuguesa entrou no filme O Amor Acontece? /  Lucia Moniz /  Lidia Franco /  Beatriz Batarda /  Alexandra Lecanstre /  Lucia Moniz /,Em que ano ocorreu o ataque a Pearl Harbor? /  1941 /  1945 /  1938 /  1944 /  1941 /,A Indonesia tem cerca de quantas ilhas? /  4 mil /  9 mil /  11 mil /  13 mil /  13 mil /,De que pais e originaria a Valsa? /  Irlanda /  Austria /  Alemanha /  Republica Checa /  Austria /,A que estilo de arquitetura pertence o Palacio de Versalhes? ... /  Gotico /  Manuelino /  Barroco /  Contemporaneo /  Barroco /,O hino nacional Frances chama-se... /  A Francesinha /  A Marselhesa /  A Parisiense /  A Lyonesa /  A Marselhesa";
const Dificil= "Salvador Allende foi chefe de estado em que pais sul americano? /  Panama /  Chile /  Peru /  Argentina /  Chile /,Como se chamava o conhecido comandante do navio Calypso que ajudou a inventar o escafandro? /  Cousteau /  Beauvoir /  Sagan /  Francis Drake /  Cousteau /,Quem foi a primeira mulher a ganhar um premio Nobel pelo estudo da radiotavidade? /  Mary Quant /  Marie Curie /  Simeone de Beauvoir /  Herta Muller /  Marie Curie /,Qual destes paises ja se chamou Ceilao? /  Tailandia /  Sri Lanka /  Vietname /  Macau /  Sri Lanka /,Qual destes arquitetos portugueses desenhou o Centro Cultural de Belem? /  Siza Vieira /  Souto Moura /  Manuel Salgado /  Raul Ferreira /  Manuel Salgado /,Kylie Minogue ja foi casada quantas vezes? /  Zero /  Uma /  Duas /  Tres /  Zero /,Que dois paises foram oponentes na crise de Cuba? /  EUA e URSS /  EUA e Inglaterra /  Cuba e Franca /  URSS e Inglaterra /  EUA e URSS /,Durante muitos anos Antonio Sala deu voz as manhas de que radio? /  Radio Renascenca /  Radio Comercial /  Radio Cidade /  Radio Sim /  Radio Renascenca /,O Capitolio foi o centro politico e religioso de que imperio? /  Inca /  Romano /  Persa /  Fenicio /  Romano /,Em que seculo James Cook tomou posse da Australia em nome da Gra-Bretanha? /  XIII /  XV /  XVI /  XVIII /  XVIII /,Michael Doohan foi diversas vezes campeao do mundo em que modalidade? /  Tenis /  Golfe /  Motociclismo /  Automobilismo /  Motociclismo /,Em que ano ocorreu a Grande Depressao nos EUA? /  1901 /  1918 /  1929 /  1932 /  1929 /,Qual e a nacionalidade do clube de futebol Ferencvaros? /  Hungara /  Romena /  Russa /  Polaca /  Hungara /,Quem comeCou a comercializar a pastilha elastica? /  Thomas Adams /  John Douglas /  Charles Gum /  Peter Franklin /  Thomas Adams /,Que arquiteto desenhou o Pavilhao de Portugal na Expo 98? /  Siza Vieira /  Souto Moura /  Frank Lloyd Wright /  Joseph Marcus /  Siza Vieira /,O primeiro estudio de cinema de Hollywood nasceu em que ano? /  1911 /  1926 /  1934 /  1922 /  1911 /,Augusto Comte ficou conhecido como o pai do... /  Racionalismo /  Positivismo /  Psicanalise /  Behaviorismo /  Positivismo /,Quantos metros tem o AirBus A380? /  cerca de 63 /  cerca de 73 /  cerca de 83 /  cerca de 93 /  cerca de 73 /,Quantas viagens de circum-navegacao fez o ingles James Cook? /  Uma /  Duas /  Tres /  Quatro /  Duas /,Quantos milhoes de iPods foram vendidos em 2004? /  2 /  5 /  7 /  10 /  10 /,Quantos metros de comprimento tinha o Titanic? /  173 /  269 /  315 /  231 /  269 /,Que cidade portuguesa se chamou Pax Julia? /  Aveiro /  Chaves /  Beja /  Portalegre /  Beja /,Que atriz fez de pugilista no filme Million Dollar Baby? /  Angelina Jolie /  Hilarie Swank /  Jenifer Lawrence /  Jessica Palma /  Hilarie Swank /,O Coliseu de Roma tinha lugar para quantos espectadores? /  20 mil /  50 mil /  70 mil /  100 mil /  100 mil /,Qual destas atrizes foi a Chinatown? /  Faye Dunaway /  Meryl Streep /  Vanessa Redgrave /  Scarlett Jonhson /  Faye Dunaway /,Que cantora foi Evita no filme de Alan Parker? /  Madonna /  Britney Spears /  Jennifer Lopez /  Scarlett Jonhson /  Madonna";



const tempoJogo=31000; //31 segundos
const transformaTempo= 1000; //para passar de milisegundos para segundos



function main(){
	var carr=0;
	var botoes= new Array(6);
	var imgfundo=new Image();
	imgfundo.addEventListener("load", drawfundo);
	imgfundo.src='fundoPerguntas.png';
	var imgOptn= new Image();
	imgOptn.addEventListener("load", select);
	imgOptn.src= 'opt.png';
	var img5050= new Image();
	img5050.addEventListener("load", f5050);
	img5050.src= '5050.png';
	var imgtroca= new Image();
	imgtroca.addEventListener("load", ftroca);
	imgtroca.src='troca.png';
	var imgSel= new Image();
	imgSel.addEventListener("load", loading);
	imgSel.src= 'selecionado.png';
	var imgCerto= new Image();
	imgCerto.addEventListener("load", loading);
	imgCerto.src= 'certo.png';
	var imgErrado= new Image();
	imgErrado.addEventListener("load", loading);
	imgErrado.src= 'errado.png';
	var use5050=new Image();
	use5050.addEventListener("load", loading);
	use5050.src= '5050B.png';
	var useTroca= new Image();
	useTroca.addEventListener("load", inicia);
	useTroca.src= 'trocaB.png';
	

	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");

	function select(ev){
		carr=carr+1;
		for (var i = 0; i < 4; i++) {
			botoes[i]=new Botao(50,320+(70*i),ev.target.naturalWidth - 50,ev.target.naturalHeight,ev.target, true);
			botoes[i].draw(ctx);
		}
	}

	function ftroca(ev){
		carr=carr+1
		botoes[5]= new Botao(450,15,ev.target.naturalWidth/2, ev.target.naturalHeight/2,ev.target, true);
		botoes[5].draw(ctx);
	}
	function f5050(ev){
		carr=carr+1
		botoes[4]= new Botao(350,15,ev.target.naturalWidth/2, ev.target.naturalHeight/2,ev.target, true);
		botoes[4].draw(ctx);
	}
	function drawfundo(ev){
		ctx.drawImage(ev.target,0,0)
	}
	function loading(ev){
		carr=carr+1
	}
	function inicia(ev){
		while(carr<7){

		}
		var game= new GameEnv(botoes[0], botoes[1],botoes[2],botoes[3], botoes[4], botoes[5],null, null, ctx, imgSel,imgCerto, imgErrado, use5050, ev.target, Facil, null);
		game.carregaPergunta1();
		game.loopTempo(0);
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


function atualizacao(tempoPassado, tempoEcra, loopID){ // atualizar o tempo do ecra
	if (tempoPassado< tempoJogo){
		var texto= document.getElementById("Tempo");
		tempoEcra= Math.floor((tempoJogo - tempoPassado)/transformaTempo);
		texto.innerHTML= "Tempo: "+ tempoEcra+ " seg";
	}
	else{
		window.cancelAnimationFrame(loopID);




		/*----------------------------------------------------------dar um som----------------------------------------*/
		
	}
	return tempoEcra;
}


