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

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const obstacles = [];

let bX = 100;
let bY = 100;
let i = 0;

// função para desenhar o personagem do jogador
function drawBarco() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "brown";
    ctx.fillRect(bX, bY, 40, 40);
}

// event listeners para a movimentação do personagem
document.getElementById("moveLeft").addEventListener("click", () => {
    bX -= 40;
    drawBarco();
});
document.getElementById("moveRight").addEventListener("click", () => {
    bX += 40;
    drawBarco();
});
document.getElementById("moveUp").addEventListener("click", () => {
    bY -= 40;
    drawBarco();
});
document.getElementById("moveDown").addEventListener("click", () => {
    bY += 40;
    drawBarco();
});

// função de geração dos inimigos
function generateObstacles() {
    const startX = 0;
    const startY = 100;
    const speed = 2;

    const obstacle = new Obstacle(startX, startY, 50, 30, speed);
    obstacles.push(obstacle);
}

function updateGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < obstacles.length; i++) {
        const obstacle = obstacles[i];
        obstacle.move();
        ctx.fillStyle = "red";
        ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
    }

    drawBarco(); // desenha o barco

    requestAnimationFrame(updateGame); // chama a função de atualização de novo
}

// chama o gerador dos inimigos a cada 2 segundos
setInterval(generateObstacles, 2000);

// loop de jogo
updateGame();