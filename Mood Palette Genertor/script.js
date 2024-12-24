const moodInput = document.getElementById("mood-input");
const generateButton = document.getElementById("generate-button");
const paletteContainer = document.getElementById("palette-container");

// Mood-to-color mapping
const moodColors = {
  happy: ["#FFD700", "#FF8C00", "#FFDAB9", "#FFFFE0", "#FFA07A"],
  calm: ["#87CEEB", "#4682B4", "#B0E0E6", "#ADD8E6", "#5F9EA0"],
  energetic: ["#FF4500", "#DC143C", "#FF6347", "#FFD700", "#FF1493"],
  sad: ["#708090", "#778899", "#2F4F4F", "#1C1C1C", "#A9A9A9"],
  creative: ["#9370DB", "#8A2BE2", "#6A5ACD", "#483D8B", "#BA55D3"],
  default: ["#D3D3D3", "#A9A9A9", "#808080", "#696969", "#2F4F4F"],
};

// Generate color palette
function generatePalette(mood) {
  const colors = moodColors[mood.toLowerCase()] || moodColors.default;

  // Clear existing palette
  paletteContainer.innerHTML = "";

  // Create new palette
  colors.forEach((color) => {
    const colorDiv = document.createElement("div");
    colorDiv.classList.add("palette-color");
    colorDiv.style.backgroundColor = color;
    colorDiv.textContent = color.toUpperCase();
    paletteContainer.appendChild(colorDiv);
  });
}

// Event listener
generateButton.addEventListener("click", () => {
  const mood = moodInput.value.trim();
  if (!mood) {
    alert("Please enter your mood!");
    return;
  }
  generatePalette(mood);
});
