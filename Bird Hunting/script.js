//Coded By Vipul Gupta
const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const audio = new Audio("gunshot.mp3");

    const scoreDisplay = document.getElementById('score');
    let score = 0;
    const cursor = { x: canvas.width / 2, y: canvas.height / 2 };
    const birdImage = new Image();
    birdImage.src = 'bird.png';

    //Bird Object
    class Bird {
      constructor() {
        this.width = 50;
        this.height = 50;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height / 2;
        this.speed = Math.random() * 2 + 1;
        this.direction = Math.random() < 0.5 ? 1 : -1; 
      }

      draw() {
        ctx.drawImage(birdImage, this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
      }

      update() {
        this.x += this.speed * this.direction;
        if (this.x > canvas.width || this.x < 0) {
          this.direction *= -1; 
        }
      }
    }

    // Gun object
    class Gun {
      constructor() {
        this.x = canvas.width / 2;
        this.y = canvas.height - 50; 
        this.width = 50;
        this.height = 150;
      }

      draw() {
        const dx = cursor.x - this.x;
        const dy = cursor.y - this.y;
        const angle = Math.atan2(dy, dx);

        // Draw gun base
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(angle);

        // Gun barrel
        ctx.fillStyle = "gray";
        ctx.fillRect(0, -10, this.height, 20);

        // Gun base
        ctx.beginPath();
        ctx.arc(0, 0, 20, 0, Math.PI * 2);
        ctx.fillStyle = "black";
        ctx.fill();

        ctx.restore();
      }
    }

    // Game objects
    const birds = [];
    const gun = new Gun();
    const maxBirds = 10;

    // Add birds periodically
    setInterval(() => {
      if (birds.length < maxBirds) {
        birds.push(new Bird());
      }
    }, 1000);

    // Handle click
    canvas.addEventListener('click', (e) => {
      const clickX = cursor.x;
      const clickY = cursor.y;

      audio.currentTime = 0; 
      audio.play();

      // Check if bird is hit
      for (let i = birds.length - 1; i >= 0; i--) {
        const bird = birds[i];
        const distX = Math.abs(clickX - bird.x);
        const distY = Math.abs(clickY - bird.y);
        if (distX < bird.width / 2 && distY < bird.height / 2) {
          birds.splice(i, 1); // Remove bird from array
          score++;
          scoreDisplay.textContent = `Score: ${score}`;
          break;
        }
      }
    });

    // Update cursor position on mouse move
    canvas.addEventListener('mousemove', (e) => {
      cursor.x = e.clientX;
      cursor.y = e.clientY;
    });

    // Game loop
    function gameLoop() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw birds
      birds.forEach((bird) => {
        bird.update();
        bird.draw();
      });

      // Draw gun
      gun.draw();

      requestAnimationFrame(gameLoop);
    }

    // Start game loop
    birdImage.onload = () => {
      gameLoop();
    };
