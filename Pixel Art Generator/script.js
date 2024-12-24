const pixelArtBoard = document.getElementById('pixelArtBoard');
const clearButton = document.getElementById('clearButton');
const colorPicker = document.getElementById('colorPicker');

// Set the size of the grid (16x16 by default)
const gridSize = 16;
let selectedColor = colorPicker.value;

// Create the grid
function createGrid() {
    for (let i = 0; i < gridSize * gridSize; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.addEventListener('click', colorSquare);
        pixelArtBoard.appendChild(square);
    }
}

// Color a square based on selected color
function colorSquare(event) {
    event.target.style.backgroundColor = selectedColor;
}

// Event listener for the color picker
colorPicker.addEventListener('input', (e) => {
    selectedColor = e.target.value;
});

// Clear the board
clearButton.addEventListener('click', () => {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.style.backgroundColor = '#ffffff';
    });
});

// Initialize the grid
createGrid();
