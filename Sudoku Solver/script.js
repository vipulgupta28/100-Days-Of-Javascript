const grid = document.getElementById("sudoku-grid");

// Initialize grid
function createGrid() {
    for (let i = 0; i < 81; i++) {
        const cell = document.createElement("input");
        cell.type = "number";
        cell.classList.add("cell");
        cell.min = 1;
        cell.max = 9;
        grid.appendChild(cell);
    }
}

// Check if placing a number is valid
function isValid(board, row, col, num) {
    for (let i = 0; i < 9; i++) {
        if (board[row][i] === num || board[i][col] === num || 
            board[3 * Math.floor(row / 3) + Math.floor(i / 3)][3 * Math.floor(col / 3) + (i % 3)] === num) {
            return false;
        }
    }
    return true;
}

// Solve the Sudoku using backtracking
function solveSudoku(board) {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (board[row][col] === 0) {
                for (let num = 1; num <= 9; num++) {
                    if (isValid(board, row, col, num)) {
                        board[row][col] = num;
                        if (solveSudoku(board)) return true;
                        board[row][col] = 0;
                    }
                }
                return false;
            }
        }
    }
    return true;
}

// Extract board from input elements
function getBoard() {
    const cells = Array.from(document.querySelectorAll(".cell"));
    const board = [];
    for (let i = 0; i < 81; i += 9) {
        board.push(cells.slice(i, i + 9).map(cell => Number(cell.value) || 0));
    }
    return board;
}

// Fill the solved board into the grid
function setBoard(board) {
    const cells = Array.from(document.querySelectorAll(".cell"));
    for (let i = 0; i < 81; i++) {
        cells[i].value = board[Math.floor(i / 9)][i % 9] || "";
    }
}

// Solve button event listener
document.getElementById("solve-btn").addEventListener("click", () => {
    const board = getBoard();
    if (solveSudoku(board)) {
        setBoard(board);
    } else {
        alert("No solution exists!");
    }
});

// Reset button event listener
document.getElementById("reset-btn").addEventListener("click", () => {
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => (cell.value = ""));
});

// Initialize grid on page load
createGrid();
