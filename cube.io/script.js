// Coded By Vipul Gupta
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');

    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const player = {
      x: canvas.width / 2 - 15,
      y: canvas.height - 60,
      width: 30,
      height: 30,
      speed: 7,
      dx: 0
    };

    const obstacles = [];
    const obstacleFrequency = 90;
    let frames = 0;
    let gameOver = false;

    function drawPlayer() {
      ctx.fillStyle = 'cyan';
      ctx.fillRect(player.x, player.y, player.width, player.height);
    }

    function createObstacle() {
      const obstacleWidth = Math.random() * 100 + 20;
      const obstacleX = Math.random() * (canvas.width - obstacleWidth);
      obstacles.push({
        x: obstacleX,
        y: 0,
        width: obstacleWidth,
        height: 20,
        speed: 3
      });
    }

    function drawObstacles() {
      ctx.fillStyle = 'red';
      obstacles.forEach(obstacle => {
        ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
      });
    }

    function moveObstacles() {
      obstacles.forEach(obstacle => {
        obstacle.y += obstacle.speed;
      });
      obstacles.filter(obstacle => obstacle.y < canvas.height);
    }

    function checkCollision() {
      obstacles.forEach(obstacle => {
        if (
          player.x < obstacle.x + obstacle.width &&
          player.x + player.width > obstacle.x &&
          player.y < obstacle.y + obstacle.height &&
          player.y + player.height > obstacle.y
        ) {
          gameOver = true;
        }
      });
    }

    function movePlayer() {
      player.x += player.dx;

      if (player.x < 0) player.x = 0;
      if (player.x + player.width > canvas.width) player.x = canvas.width - player.width;
    }

    function handleInput() {
      document.addEventListener('keydown', e => {
        if (e.key === 'ArrowRight') player.dx = player.speed;
        if (e.key === 'ArrowLeft') player.dx = -player.speed;
      });

      document.addEventListener('keyup', e => {
        if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') player.dx = 0;
      });
    }

    function gameLoop() {
      if (gameOver) {
        ctx.fillStyle = 'white';
        ctx.font = '30px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Game Over', canvas.width / 2, canvas.height / 2);
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drawPlayer();
      drawObstacles();
      movePlayer();
      moveObstacles();
      checkCollision();

      frames++;
      if (frames % obstacleFrequency === 0) {
        createObstacle();
      }

      requestAnimationFrame(gameLoop);
    }

    handleInput();
    gameLoop();
