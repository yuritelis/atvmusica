class Obstacle {
    constructor(x, y, width, height, speed) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
    }

    move() {
        this.x += this.speed;
    }
}

// Obtenha o elemento canvas e o contexto 2D
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const obstacles = [];

// Defina as coordenadas iniciais do personagem
let bX = 100;
let bY = 100;
let i = 0;

// Defina uma função para desenhar o personagem
function drawBarco() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "brown";
    ctx.fillRect(bX, bY, 40, 40);
}

// Adicione event listeners para os botões de controle
document.getElementById("moveLeft").addEventListener("click", () => {
    bX -= 40; // Mova o personagem para a esquerda
    drawBarco(); // Redesenhe o personagem
});
document.getElementById("moveRight").addEventListener("click", () => {
    bX += 40; // Mova o personagem para a direita
    drawBarco(); // Redesenhe o personagem
});
document.getElementById("moveUp").addEventListener("click", () => {
    bY -= 40; // Mova o personagem para a cima
    drawBarco(); // Redesenhe o personagem
});
document.getElementById("moveDown").addEventListener("click", () => {
    bY += 40; // Mova o personagem para a baixo
    drawBarco(); // Redesenhe o personagem
});

function generateObstacles() {
    // Defina a posição inicial dos obstáculos e a velocidade
    const startX = 0;
    const startY = 100; // Ajuste a posição vertical conforme necessário
    const speed = 2; // Ajuste a velocidade conforme necessário

    // Crie um novo obstáculo e adicione-o ao array
    const obstacle = new Obstacle(startX, startY, 50, 30, speed);
    obstacles.push(obstacle);
}

// Defina uma função para atualizar o jogo
function updateGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < obstacles.length; i++) {
        const obstacle = obstacles[i];
        obstacle.move();
        ctx.fillStyle = "red"; // Cor dos carros (você pode ajustar isso)
        ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
    }

    drawBarco(); // Desenhe o barco

    // Verifique se o personagem chegou à meta (pode ser uma linha superior)

    // Verifique colisões com obstáculos

    requestAnimationFrame(updateGame); // Chame a função novamente para atualizar
}

// Chame generateObstacles a cada 2 segundos
setInterval(generateObstacles, 2000);

// Inicie o loop de jogo
updateGame();