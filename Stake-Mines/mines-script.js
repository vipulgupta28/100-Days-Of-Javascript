// Coded By Vipul Gupta
const boardSize = 5;
let mineCount = 5;
let minePositions = [];

function startGame() {
    mineCount = parseInt(document.getElementById('mineCount').value);
    initGame();
    generateGrid();
}

function initGame() {
    minePositions = generateMinePositions();
}

function generateMinePositions() {
    const positions = new Set();
    while (positions.size < mineCount) {
        const pos = Math.floor(Math.random() * boardSize * boardSize);
        positions.add(pos);
    }
    return [...positions];
}

function generateGrid() {
    const minesGrid = document.getElementById('minesGrid');
    minesGrid.innerHTML = ''; // Clear the grid
    for (let row = 0; row < boardSize; row++) {
        for (let col = 0; col < boardSize; col++) {
            const button = document.createElement('button');
            button.id = `cell-${row}-${col}`;
            button.onclick = function() { handleClick(button); };
            minesGrid.appendChild(button);
        }
    }
}

function handleClick(button) {
    const id = button.id.split('-');
    const row = parseInt(id[1]);
    const col = parseInt(id[2]);
    const index = row * boardSize + col;
    
    if (minePositions.includes(index)) {
        button.style.backgroundImage = "url('images/mine.png')";
        button.style.backgroundSize = "cover";
        alert('Game Over!');
        revealMines();
    } else {
        button.style.backgroundImage = "url('./file (2).png')";
        button.style.backgroundSize = "cover";
        button.disabled = true;
        button.style.backgroundColor = '#414774';
    }
}

function revealMines() {
    minePositions.forEach(pos => {
        const row = Math.floor(pos / boardSize);
        const col = pos % boardSize;
        const button = document.getElementById(`cell-${row}-${col}`);
        button.style.backgroundImage = "url('images/mine.png')";
        button.style.backgroundSize = "cover";
        button.style.backgroundColor = 'red';
    });
}

document.addEventListener('DOMContentLoaded', startGame);
