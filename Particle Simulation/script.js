// script.js

// Canvas setup
const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Resize canvas dynamically
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  initParticles();
});

// Particle class
class Particle {
  constructor(x, y, radius, color, velocity) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.velocity = velocity;
    this.opacity = 1; // For fade-out effects
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.opacity})`;
    ctx.fill();
    ctx.closePath();
  }

  update() {
    this.x += this.velocity.x;
    this.y += this.velocity.y;

    // Bounce off walls
    if (this.x - this.radius < 0 || this.x + this.radius > canvas.width) {
      this.velocity.x *= -1;
    }
    if (this.y - this.radius < 0 || this.y + this.radius > canvas.height) {
      this.velocity.y *= -1;
    }

    this.draw();
  }
}

// Utility function for random values
function random(min, max) {
  return Math.random() * (max - min) + min;
}

// Generate random colors
function randomColor() {
  return {
    r: Math.floor(random(50, 255)),
    g: Math.floor(random(50, 255)),
    b: Math.floor(random(50, 255)),
  };
}

// Particle array and initialization
let particles = [];
function initParticles() {
  particles = [];
  const particleCount = 100; // Number of particles

  for (let i = 0; i < particleCount; i++) {
    const radius = random(3, 6);
    const x = random(radius, canvas.width - radius);
    const y = random(radius, canvas.height - radius);
    const velocity = {
      x: random(-2, 2),
      y: random(-2, 2),
    };
    const color = randomColor();

    particles.push(new Particle(x, y, radius, color, velocity));
  }
}

// Animate particles
function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((particle) => {
    particle.update();
  });

  connectParticles();
  requestAnimationFrame(animateParticles);
}

// Draw connections between particles
function connectParticles() {
  const maxDistance = 120;

  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < maxDistance) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / maxDistance})`;
        ctx.lineWidth = 1;
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
        ctx.closePath();
      }
    }
  }
}

// Initialize and start animation
initParticles();
animateParticles();
