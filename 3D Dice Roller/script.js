const canvasContainer = document.getElementById("canvas-container");
const rollButton = document.getElementById("roll-button");
const addDieButton = document.getElementById("add-die-button");
const removeDieButton = document.getElementById("remove-die-button");
const resultDisplay = document.getElementById("result");

// Set up Three.js scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight * 0.8);
canvasContainer.appendChild(renderer.domElement);

camera.position.z = 10;

const dice = [];
let diceResults = [];

// Create a die
function createDie() {
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const materials = [
    new THREE.MeshBasicMaterial({ color: 0xff0000 }),
    new THREE.MeshBasicMaterial({ color: 0x00ff00 }),
    new THREE.MeshBasicMaterial({ color: 0x0000ff }),
    new THREE.MeshBasicMaterial({ color: 0xffff00 }),
    new THREE.MeshBasicMaterial({ color: 0xff00ff }),
    new THREE.MeshBasicMaterial({ color: 0x00ffff }),
  ];
  const die = new THREE.Mesh(geometry, materials);
  die.userData = { value: Math.ceil(Math.random() * 6) };
  dice.push(die);
  scene.add(die);
  return die;
}

// Roll dice with random rotations
function rollDice() {
  diceResults = [];
  dice.forEach((die) => {
    const randomX = Math.random() * 360;
    const randomY = Math.random() * 360;
    die.rotation.x += THREE.MathUtils.degToRad(randomX);
    die.rotation.y += THREE.MathUtils.degToRad(randomY);
    die.userData.value = Math.ceil(Math.random() * 6);
    diceResults.push(die.userData.value);
  });
  resultDisplay.textContent = `Total: ${diceResults.reduce((a, b) => a + b, 0)}`;
}

// Add a die
addDieButton.addEventListener("click", () => {
  const die = createDie();
  die.position.set(dice.length - 1, 0, 0);
});

// Remove a die
removeDieButton.addEventListener("click", () => {
  if (dice.length > 0) {
    const die = dice.pop();
    scene.remove(die);
  }
});

// Roll button listener
rollButton.addEventListener("click", rollDice);

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();
