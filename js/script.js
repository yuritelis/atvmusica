const canvas = document.getElementById('canvas');
const perso = canvas.getContext('2d');

canvas.width = window.innerWidth
canvas.height = window.innerHeight

perso.beginPath();
perso.fillStyle = "#53261C";
perso.fillRect(1700, 450, 110, 80);

perso.beginPath();
perso.fillStyle = "#391C53";
perso.fillRect(0, 50, 80, 80);

perso.beginPath();
perso.fillStyle = "#391C53";
perso.fillRect(0, 430, 80, 80);

perso.beginPath();
perso.fillStyle = "#391C53";
perso.fillRect(0, 800, 80, 80);