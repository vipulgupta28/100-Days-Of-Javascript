const board = document.getElementById('game-board');
const scoreDisplay = document.getElementById('score');
const startButton = document.getElementById('start-btn');

const rows = 20;
const cols = 10;
const boardArray = Array.from({ length: rows }, () => Array(cols).fill(0));

const tetrominoes = [
    [[1, 1, 1, 1]],                 // I shape
    [[1, 1], [1, 1]],               // O shape
    [[0, 1, 0], [1, 1, 1]],         // T shape
    [[1, 1, 0], [0, 1, 1]],         // Z shape
    [[0, 1, 1], [1, 1, 0]],         // S shape
    [[1, 0, 0], [1, 1, 1]],         // L shape
    [[0, 0, 1], [1, 1, 1]],         // J shape
];

let currentPiece = null;
let position = { x: 3, y: 0 };
let score = 0;
let gameInterval;

function createBoard() {
    board.innerHTML = '';
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            if (boardArray[r][c] === 1) {
                cell.style.backgroundColor = '#00ff00'; // Tetromino color
            }
            board.appendChild(cell);
        }
    }
}

function drawPiece(piece, offsetX = 0, offsetY = 0) {
    piece.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value) {
                boardArray[position.y + y + offsetY][position.x + x + offsetX] = 1;
            }
        });
    });
}

function clearPiece(piece, offsetX = 0, offsetY = 0) {
    piece.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value) {
                boardArray[position.y + y + offsetY][position.x + x + offsetX] = 0;
            }
        });
    });
}

function isCollision(piece, offsetX = 0, offsetY = 0) {
    return piece.some((row, y) =>
        row.some((value, x) => {
            if (
                value &&
                (boardArray[position.y + y + offsetY]?.[position.x + x + offsetX] === undefined ||
                    boardArray[position.y + y + offsetY]?.[position.x + x + offsetX] === 1)
            ) {
                return true;
            }
        })
    );
}

function spawnPiece() {
    const randomIndex = Math.floor(Math.random() * tetrominoes.length);
    currentPiece = tetrominoes[randomIndex];
    position = { x: 3, y: 0 };

    if (isCollision(currentPiece)) {
        alert('Game Over!');
        clearInterval(gameInterval);
    }
}

function movePiece(offsetX, offsetY) {
    clearPiece(currentPiece);
    position.x += offsetX;
    position.y += offsetY;

    if (isCollision(currentPiece)) {
        position.x -= offsetX;
        position.y -= offsetY;
    }

    drawPiece(currentPiece);
    createBoard();
}

function rotatePiece() {
    clearPiece(currentPiece);
    const rotatedPiece = currentPiece[0].map((_, index) =>
        currentPiece.map((row) => row[index]).reverse()
    );

    if (!isCollision(rotatedPiece)) {
        currentPiece = rotatedPiece;
    }

    drawPiece(currentPiece);
    createBoard();
}

function clearLines() {
    for (let r = rows - 1; r >= 0; r--) {
        if (boardArray[r].every((cell) => cell === 1)) {
            boardArray.splice(r, 1);
            boardArray.unshift(Array(cols).fill(0));
            score += 10;
        }
    }
    scoreDisplay.textContent = score;
}

function gameLoop() {
    clearPiece(currentPiece);
    position.y++;
    if (isCollision(currentPiece)) {
        position.y--;
        drawPiece(currentPiece);
        clearLines();
        spawnPiece();
    }
    drawPiece(currentPiece);
    createBoard();
}

startButton.addEventListener('click', () => {
    score = 0;
    scoreDisplay.textContent = score;
    boardArray.forEach((row) => row.fill(0));
    spawnPiece();
    createBoard();
    clearInterval(gameInterval);
    gameInterval = setInterval(gameLoop, 500);
});

document.addEventListener('keydown', (e) => {
    if (!currentPiece) return;
    if (e.key === 'ArrowLeft') movePiece(-1, 0);
    if (e.key === 'ArrowRight') movePiece(1, 0);
    if (e.key === 'ArrowDown') movePiece(0, 1);
    if (e.key === 'ArrowUp') rotatePiece();
});
