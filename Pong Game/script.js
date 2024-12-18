// Coded By Vipul Gupta
// Select the canvas and get its context
const canvas = document.createElement('canvas');
document.body.appendChild(canvas);
canvas.width = 800;
canvas.height = 400;
const ctx = canvas.getContext('2d');

// Game objects
const paddleWidth = 10;
const paddleHeight = 100;
const ballSize = 10;

const player = { x: 0, y: canvas.height / 2 - paddleHeight / 2, score: 0 };
const computer = { x: canvas.width - paddleWidth, y: canvas.height / 2 - paddleHeight / 2, score: 0 };
const ball = { x: canvas.width / 2, y: canvas.height / 2, speedX: 4, speedY: 4 };

// Controls
let playerMove = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp') playerMove = -7;
    else if (e.key === 'ArrowDown') playerMove = 7;
});

document.addEventListener('keyup', () => {
    playerMove = 0;
});

// Draw objects
function drawRect(x, y, width, height, color = 'white') {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
}

function drawCircle(x, y, radius, color = 'white') {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
}

function drawText(text, x, y, size = 20, color = 'white') {
    ctx.fillStyle = color;
    ctx.font = `${size}px Arial`;
    ctx.fillText(text, x, y);
}

// Reset the ball
function resetBall() {
    ball.x = canvas.width / 2;
    ball.y = canvas.height / 2;
    ball.speedX = -ball.speedX;
    ball.speedY = (Math.random() * 6 - 3); // Randomize initial angle
}

// Update game objects
function update() {
    // Move player paddle
    player.y += playerMove;

    // Constrain player paddle within bounds
    if (player.y < 0) player.y = 0;
    if (player.y > canvas.height - paddleHeight) player.y = canvas.height - paddleHeight;

    // Move computer paddle
    const computerSpeed = 5;
    if (ball.y < computer.y + paddleHeight / 2) computer.y -= computerSpeed;
    else if (ball.y > computer.y + paddleHeight / 2) computer.y += computerSpeed;

    // Constrain computer paddle within bounds
    if (computer.y < 0) computer.y = 0;
    if (computer.y > canvas.height - paddleHeight) computer.y = canvas.height - paddleHeight;

    // Move ball
    ball.x += ball.speedX;
    ball.y += ball.speedY;

    // Ball collision with top and bottom walls
    if (ball.y < 0 || ball.y > canvas.height - ballSize) ball.speedY = -ball.speedY;

    // Ball collision with paddles
    if (
        ball.x < player.x + paddleWidth &&
        ball.y > player.y &&
        ball.y < player.y + paddleHeight
    ) {
        ball.speedX = -ball.speedX;
    }

    if (
        ball.x > computer.x - paddleWidth &&
        ball.y > computer.y &&
        ball.y < computer.y + paddleHeight
    ) {
        ball.speedX = -ball.speedX;
    }

    // Ball out of bounds
    if (ball.x < 0) {
        computer.score++;
        resetBall();
    }

    if (ball.x > canvas.width) {
        player.score++;
        resetBall();
    }
}

// Render game objects
function render() {
    // Clear canvas
    drawRect(0, 0, canvas.width, canvas.height, 'black');

    // Draw paddles
    drawRect(player.x, player.y, paddleWidth, paddleHeight);
    drawRect(computer.x, computer.y, paddleWidth, paddleHeight);

    // Draw ball
    drawCircle(ball.x, ball.y, ballSize);

    // Draw scores
    drawText(player.score, canvas.width / 4, 50);
    drawText(computer.score, (canvas.width * 3) / 4, 50);
}

// Main game loop
function gameLoop() {
    update();
    render();
    requestAnimationFrame(gameLoop);
}

// Start the game
resetBall();
gameLoop();


