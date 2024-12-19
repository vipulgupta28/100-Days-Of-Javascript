// Coded By Vipul gupta
const canvas = document.getElementById('gameCanvas');
        const ctx = canvas.getContext('2d');

        // Game variables
        let playerX = canvas.width / 2;
        const playerWidth = 100;
        const playerHeight = 20;
        const playerSpeed = 7;

        let fallingObjectX = Math.random() * (canvas.width - 20);
        let fallingObjectY = 0;
        const objectSize = 20;
        const objectSpeed = 3;

        let score = 0;
        let gameOver = false;

        // Key controls
        let leftPressed = false;
        let rightPressed = false;

        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') leftPressed = true;
            if (e.key === 'ArrowRight') rightPressed = true;
        });

        document.addEventListener('keyup', (e) => {
            if (e.key === 'ArrowLeft') leftPressed = false;
            if (e.key === 'ArrowRight') rightPressed = false;
        });

        function drawPlayer() {
            ctx.fillStyle = '#0288d1';
            ctx.fillRect(playerX, canvas.height - playerHeight - 10, playerWidth, playerHeight);
        }

        function drawFallingObject() {
            ctx.fillStyle = '#d32f2f';
            ctx.fillRect(fallingObjectX, fallingObjectY, objectSize, objectSize);
        }

        function drawScore() {
            ctx.fillStyle = '#000';
            ctx.font = '20px Arial';
            ctx.fillText(`Score: ${score}`, 10, 20);
        }

        function update() {
            if (leftPressed && playerX > 0) playerX -= playerSpeed;
            if (rightPressed && playerX < canvas.width - playerWidth) playerX += playerSpeed;

            fallingObjectY += objectSpeed;

            // Check collision
            if (
                fallingObjectY + objectSize >= canvas.height - playerHeight - 10 &&
                fallingObjectX + objectSize > playerX &&
                fallingObjectX < playerX + playerWidth
            ) {
                score++;
                resetFallingObject();
            }

            // Check if object falls out of bounds
            if (fallingObjectY > canvas.height) {
                gameOver = true;
            }
        }

        function resetFallingObject() {
            fallingObjectX = Math.random() * (canvas.width - objectSize);
            fallingObjectY = 0;
        }

        function drawGameOver() {
            ctx.fillStyle = '#000';
            ctx.font = '40px Arial';
            ctx.textAlign = 'center';
            ctx.fillText('Game Over', canvas.width / 2, canvas.height / 2);
            ctx.font = '20px Arial';
            ctx.fillText(`Final Score: ${score}`, canvas.width / 2, canvas.height / 2 + 40);
        }

        function gameLoop() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            if (!gameOver) {
                drawPlayer();
                drawFallingObject();
                drawScore();
                update();
                requestAnimationFrame(gameLoop);
            } else {
                drawGameOver();
            }
        }

        gameLoop();
