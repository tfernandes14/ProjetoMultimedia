"use strict";

(function(){
	window.addEventListener("load", main);
}());

function main() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var inputBox = document.getElementById("inputBox");
    ctx.fillStyle = "#0c6384";
    ctx.font = "100px Showcard Gothic";
    ctx.fillText("Créditos", 164, 160);
    /* Meter código aqui */
}