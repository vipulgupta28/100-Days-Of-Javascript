// Coded By Vipul Gupta
const canvas = document.getElementById("bouncingBalls");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const balls = [];
const ballCount = 50; 

function getRandomColor() {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}

class Ball {
    constructor(x, y, size, color, dx, dy) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.dx = dx;
        this.dy = dy;
    }

    // Draw the ball
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    // Update ball position and handle wall collisions
    update() {
        this.x += this.dx;
        this.y += this.dy;

        // Bounce off the walls
        if (this.x + this.size > canvas.width || this.x - this.size < 0) {
            this.dx *= -1;
        }
        if (this.y + this.size > canvas.height || this.y - this.size < 0) {
            this.dy *= -1;
        }

        this.draw();
    }
}

// Initialize the balls
function initBalls() {
    for (let i = 0; i < ballCount; i++) {
        const size = Math.random() * 20 + 10; 
        const x = Math.random() * (canvas.width - size * 2) + size;
        const y = Math.random() * (canvas.height - size * 2) + size;
        const dx = (Math.random() - 0.5) * 4; 
        const dy = (Math.random() - 0.5) * 4; 
        const color = getRandomColor();
        balls.push(new Ball(x, y, size, color, dx, dy));
    }
}

// Animation loop
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    balls.forEach((ball) => ball.update());
    requestAnimationFrame(animate);
}

// Resize canvas on window resize
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    balls.length = 0; 
    initBalls();
});

initBalls();
animate();
