const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const resetButton = document.getElementById("reset-button");
const downloadButton = document.getElementById("download-button");

canvas.width = window.innerWidth * 0.8;
canvas.height = window.innerHeight * 0.6;

let stars = [];
let isDrawing = false;

// Draw a star at a given position
function drawStar(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, 5, 0, Math.PI * 2);
  ctx.fillStyle = "#f0f0f0";
  ctx.fill();
}

// Draw a line between two points
function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = "#a9d6e5";
  ctx.lineWidth = 2;
  ctx.stroke();
}

// Handle canvas click to add stars
canvas.addEventListener("click", (event) => {
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  drawStar(x, y);

  if (stars.length > 0) {
    const [lastX, lastY] = stars[stars.length - 1];
    drawLine(lastX, lastY, x, y);
  }

  stars.push([x, y]);
});

// Reset the canvas
resetButton.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  stars = [];
});

// Download the canvas as an image
downloadButton.addEventListener("click", () => {
  const link = document.createElement("a");
  link.download = "constellation.png";
  link.href = canvas.toDataURL("image/png");
  link.click();
});
