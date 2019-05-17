"use strict";

class GameEnv{

	constructor(botaoA, botaoB, botaoC, botaoD, b5050, btroca,perguntas, perguntaSel, ctx, imgSel, imgCerto, imgErrado,imgOptn, use5050,useTroca, dificuldade, loopID, canvas, parar, som){
		this.botaoA= botaoA;
		this.botaoB= botaoB;
		this.botaoC= botaoC;
		this.botaoD= botaoD;
		this.b5050= b5050;
		this.btroca= btroca;
		this.perguntas= perguntas;
		this.perguntaSel= perguntaSel;
		this.ctx= ctx;
		this.imgSel= imgSel;
		this.imgErrado= imgErrado;
		this.imgCerto= imgCerto;
		this.use5050= use5050;
		this.useTroca= useTroca;
		this.dificuldade= dificuldade;
		this.loopID= loopID;
		this.canvas= canvas;
		this.parar= parar;
		this.imgOptn= imgOptn;
		this.fim = false;
		this.certas = 0;
		this.som = som;
	}

	carregaPergunta1(){ //carrega a primeira pergunta
	    var aux = this.dificuldade.split(',');
	    var str;
	    var perguntas= new Array(aux.length); 
	    
	    for (var i = 0; i < aux.length; i++) {
	    	str=aux[i];
	    	str= str.split('/');
	    	perguntas[i]= new Pergunta(str[0].trim(),str[1].trim(),str[2].trim(),str[3].trim(),str[4].trim(),str[5].trim());      
	    }
	 
		var num_escolha= Math.round(Math.random()* (perguntas.length-1));
		var escolha = shuffle(perguntas[num_escolha]);
		perguntas[num_escolha]= perguntas[perguntas.length-1];
		perguntas.pop();

		this.perguntas=perguntas;
		this.perguntaSel=escolha;

	    //carrethisnto da pergunta para canvas
	    var perg= document.getElementById('Pergunta');
	    var hipoteseA = document.getElementById('HipoteseA'); 
		var hipoteseB = document.getElementById('HipoteseB');
		var hipoteseC = document.getElementById('HipoteseC');
		var hipoteseD = document.getElementById('HipoteseD');
		var textTempo = document.getElementById('Tempo');

		textTempo.innerHTML = "Tempo: 30 seg";

		perg.innerHTML = escolha.pergunta;
		hipoteseA.innerHTML = "  A) " + this.perguntaSel.opA;
		hipoteseB.innerHTML = "  B) " + this.perguntaSel.opB;
		hipoteseC.innerHTML = "  C) " + this.perguntaSel.opC;
		hipoteseD.innerHTML = "  D) " + this.perguntaSel.opD;
	}


	loopTempo(tempoPassado, canvas){
		var loopTime = function(time){
			this.loopTempo(time, canvas);
		};
		this.loopID = window.requestAnimationFrame(loopTime.bind(this));
		if (tempoPassado==0){
			var tempoEcra=0;
		}
		tempoEcra = this.atualizacao(tempoPassado,tempoEcra, this.loopID, canvas, this.parar);
	}

	atualizacao(tempoPassado, tempoEcra, loopID,canvas,parar){ // atualizar o tempo do ecra
		if ((tempoPassado< tempoJogo) && parar){
			var texto = document.getElementById("Tempo");
			tempoEcra = Math.floor((tempoJogo - tempoPassado)/transformaTempo);
			texto.innerHTML = "Tempo: "+ tempoEcra+ " seg";
		}
		else if(!(tempoPassado < tempoJogo)){

			window.cancelAnimationFrame(loopID);
			var ev = new Event("acabou_o_tempo");
			console.log("para entrar no evento");
			console.log(canvas);
			canvas.dispatchEvent(ev);
			this.fim = true;
			/*----------------------------------------------------------dar um som----------------------------------------*/
			
		}
		return tempoEcra;
	}

	carregaCanvas(ev){
		var res= resposta_correta(this.perguntaSel);
		if((res== 0 && ev.target.id== "HipoteseA") || (res== 1 && ev.target.id== "HipoteseB")|| (res== 2 && ev.target.id== "HipoteseC") || (res== 3 && ev.target.id== "HipoteseD")){
			console.log("certo");
			this.certo(ev);
		}
		else{
			console.log("errado");
			this.errado(ev);
		}
	}

	certo(ev){
		switch(ev.target.id){
			case ("HipoteseA"):
				this.botaoA.clear(this.ctx);
				this.botaoA.img= this.imgCerto;
				this.botaoA.draw(this.ctx);
				break;
			case ("HipoteseB"):
				this.botaoB.clear(this.ctx);
				this.botaoB.img= this.imgCerto;
				this.botaoB.draw(this.ctx);
				break;
			case ("HipoteseC"):
				this.botaoC.clear(this.ctx);
				this.botaoC.img= this.imgCerto;
				this.botaoC.draw(this.ctx);
				break;
			case ("HipoteseD"):
				this.botaoD.clear(this.ctx);
				this.botaoD.img= this.imgCerto;
				this.botaoD.draw(this.ctx);
				break;
		}
		this.certas++;
		var certa = new Audio("../../resources/quizz/crisCerta.mp3");
		if (this.som != "Off"){
			certa.play();
		}
		setTimeout(this.carregaProximaPergunta.bind(this),1100);
	}

	errado(ev){
		switch(ev.target.id){
			case ("HipoteseA"):
				this.botaoA.clear(this.ctx);
				this.botaoA.img= this.imgErrado;
				this.botaoA.draw(this.ctx);
				break;
			case ("HipoteseB"):
				this.botaoB.clear(this.ctx);
				this.botaoB.img= this.imgErrado;
				this.botaoB.draw(this.ctx);
				break;
			case ("HipoteseC"):
				this.botaoC.clear(this.ctx);
				this.botaoC.img= this.imgErrado;
				this.botaoC.draw(this.ctx);
				break;
			case ("HipoteseD"):
				this.botaoD.clear(this.ctx);
				this.botaoD.img= this.imgErrado;
				this.botaoD.draw(this.ctx);
				break;
		}
		var errado = new Audio("../../resources/quizz/respostaErrada.mp3");
		if (this.som != "Off"){
			errado.play();
		}
		setTimeout(this.carregaProximaPergunta.bind(this),500);
	}

	trocaPergunta(){
		var num_escolha= Math.round(Math.random()* (this.perguntas.length-1));
		var escolha = shuffle(this.perguntas[num_escolha]);
		this.perguntas[num_escolha]= this.perguntas[this.perguntas.length-1];
		this.perguntas.pop();

		
		this.perguntaSel=escolha;

	    //carrethisnto da pergunta para canvas
	    var perg= document.getElementById('Pergunta');
	    var hipoteseA = document.getElementById('HipoteseA'); 
		var hipoteseB = document.getElementById('HipoteseB');
		var hipoteseC = document.getElementById('HipoteseC');
		var hipoteseD = document.getElementById('HipoteseD');
		

		perg.innerHTML = escolha.pergunta;
		hipoteseA.innerHTML = "  A) " + this.perguntaSel.opA;
		hipoteseB.innerHTML = "  B) " + this.perguntaSel.opB;
		hipoteseC.innerHTML = "  C) " + this.perguntaSel.opC;
		hipoteseD.innerHTML = "  D) " + this.perguntaSel.opD;

	}


	carregaProximaPergunta(){
		this.botaoA.clear(this.ctx);
		this.botaoA.img= this.imgOptn;
		this.botaoA.draw(this.ctx);
		this.botaoB.clear(this.ctx);
		this.botaoB.img= this.imgOptn;
		this.botaoB.draw(this.ctx);
		this.botaoC.clear(this.ctx);
		this.botaoC.img= this.imgOptn;
		this.botaoC.draw(this.ctx);
		this.botaoD.clear(this.ctx);
		this.botaoD.img= this.imgOptn;
		this.botaoD.draw(this.ctx);
		console.log("Proxima perguntas");
		this.trocaPergunta();
		iniciajogo(this, this.canvas);
	}
}