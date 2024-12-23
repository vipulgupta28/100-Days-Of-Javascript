

const canvas = document.getElementById('gasCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 600;

// Particle properties
const particles = [];
const particleCount = 100;
const particleRadius = 5;

// Temperature settings
let temperature = 1;

// Helper function to generate random numbers
function random(min, max) {
  return Math.random() * (max - min) + min;
}

// Particle class
class Particle {
  constructor(x, y, vx, vy, color) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.color = color;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, particleRadius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  update() {
    this.x += this.vx * temperature;
    this.y += this.vy * temperature;

    // Collision with walls
    if (this.x - particleRadius < 0 || this.x + particleRadius > canvas.width) {
      this.vx *= -1;
    }
    if (this.y - particleRadius < 0 || this.y + particleRadius > canvas.height) {
      this.vy *= -1;
    }

    // Collision with other particles
    particles.forEach((other) => {
      if (other !== this) {
        const dx = this.x - other.x;
        const dy = this.y - other.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < particleRadius * 2) {
          // Elastic collision logic
          const angle = Math.atan2(dy, dx);
          const speed = Math.sqrt(this.vx ** 2 + this.vy ** 2);

          this.vx = speed * Math.cos(angle);
          this.vy = speed * Math.sin(angle);

          other.vx = -speed * Math.cos(angle);
          other.vy = -speed * Math.sin(angle);
        }
      }
    });
  }
}

// Initialize particles
for (let i = 0; i < particleCount; i++) {
  const x = random(particleRadius, canvas.width - particleRadius);
  const y = random(particleRadius, canvas.height - particleRadius);
  const vx = random(-1, 1);
  const vy = random(-1, 1);
  const color = `hsl(${random(0, 360)}, 100%, 50%)`;
  particles.push(new Particle(x, y, vx, vy, color));
}

// Animation loop
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Update and draw particles
  particles.forEach((particle) => {
    particle.update();
    particle.draw();
  });

  requestAnimationFrame(animate);
}

// Event listener for temperature slider
const temperatureSlider = document.getElementById('temperatureSlider');
const temperatureValue = document.getElementById('temperatureValue');

temperatureSlider.addEventListener('input', (event) => {
  temperature = parseFloat(event.target.value);
  temperatureValue.textContent = temperature.toFixed(1);
});

// Start simulation
animate();
