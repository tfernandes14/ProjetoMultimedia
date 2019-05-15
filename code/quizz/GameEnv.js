"use strict";

class GameEnv{

	constructor(botaoA, botaoB, botaoC, botoaD, b5050, btroca,perguntas, perguntaSel, ctx, imgSel, imgCerto, imgErrado, use5050,useTroca, dificuldade, loopID){
		this.botaoA= botaoA;
		this.botaoB= botaoB;
		this.botaoC= botaoC;
		this.botoaD= botoaD;
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
		perguntas[perguntas.length-1]= escolha;

		this.perguntas=perguntas;
		this.perguntaSel=escolha;

	    //carregamento da pergunta para canvas
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


	loopTempo(tempoPassado){
		var loopTime = function(time){
			this.loopTempo(time);
		}
		this.loopID = window.requestAnimationFrame(loopTime.bind(this));
		if (tempoPassado==0){
			var tempoEcra=0;
		}
		tempoEcra = atualizacao(tempoPassado,tempoEcra, this.loopID);
	}


}