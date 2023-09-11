class Perso {
    constructor(altura, largura, posicao)
    this.altura = altura;
    this.largura = largura;
    this.posicao = posicao;
}

var canvas = document.getElementById('canvas');
var perso = canvas.getContext('2d');

canvas.width = window.innerWidth
canvas.height = window.innerHeight

//personagem do jogador
perso.beginPath();
perso.fillStyle = "#53261C";
perso.fillRect(1700, 450, 110, 80);

//inimigo da parte superior
perso.beginPath();
perso.fillStyle = "#391C53";
perso.fillRect(0, 50, 80, 80);

//inimigo do meio
perso.beginPath();
perso.fillStyle = "#391C53";
perso.fillRect(0, 430, 80, 80);

//inimigo da parte inferior
perso.beginPath();
perso.fillStyle = "#391C53";
perso.fillRect(0, 800, 80, 80);

