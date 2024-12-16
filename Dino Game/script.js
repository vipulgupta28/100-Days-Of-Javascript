//Coded By Vipul Gupta
const jumpSound = new Audio("blip-131856.mp3");
const dino = document.getElementById("dino");
const game = document.getElementById("game");
const scoreElement = document.getElementById("score");

    
let isJumping = false;
let gravity = 10;
let position = 50; 
let score = 0;


function jump() {
  if (isJumping) return; 
  isJumping = true;

  jumpSound.currentTime = 0; 
  jumpSound.play();

  let upInterval = setInterval(() => {
    if (position >= 200) { 
      clearInterval(upInterval);

     
      let downInterval = setInterval(() => {
        if (position <= 50) {
          clearInterval(downInterval);
          isJumping = false;
          position = 50; 
        }
        position -= gravity;
        if (position < 50) position = 50;
        dino.style.bottom = position + "px";
      }, 20);
    }
    position += 20;
    dino.style.bottom = position + "px";
  }, 20);
}


document.addEventListener("keydown", (e) => {
  if (e.code === "Space" || e.code === "ArrowUp") {
    jump();
  }
});


   
    function createCactus() {
      const cactus = document.createElement("div");
      cactus.classList.add("cactus");
      game.appendChild(cactus);

      let cactusPosition = 1000;
      cactus.style.left = cactusPosition + "px";

      let timer = setInterval(() => {
        if (cactusPosition < -50) {
          clearInterval(timer);
          game.removeChild(cactus);
          score++;
          scoreElement.textContent = "Score: " + score;
        }

        if (
  cactusPosition > 50 && 
  cactusPosition < 100 && 
  position < 100 
) {
  
  clearInterval(timer);
  alert("Game Over! Final Score: " + score);
  location.reload();
}


        cactusPosition -= 10;
        cactus.style.left = cactusPosition + "px";
      }, 20);

      setTimeout(createCactus, Math.random() * 3000 + 1000);
    }

    createCactus();
