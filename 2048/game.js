// coded By Vipul Gupta

document.addEventListener("DOMContentLoaded", () => {
    const gridContainer = document.getElementById("grid-container");
    const resetButton = document.getElementById("reset-button");
    const gridSize = 4;
    let grid = [];

    function initializeGame() {
        grid = Array(gridSize).fill().map(() => Array(gridSize).fill(0));
        addNewTile();
        addNewTile();
        renderGrid();
    }

    function addNewTile() {
        const emptyTiles = [];
        for (let r = 0; r < gridSize; r++) {
            for (let c = 0; c < gridSize; c++) {
                if (grid[r][c] === 0) emptyTiles.push({ r, c });
            }
        }
        if (emptyTiles.length > 0) {
            const { r, c } = emptyTiles[Math.floor(Math.random() * emptyTiles.length)];
            grid[r][c] = Math.random() < 0.9 ? 2 : 4;
        }
    }

    function renderGrid() {
        gridContainer.innerHTML = "";
        grid.forEach(row => {
            row.forEach(value => {
                const tile = document.createElement("div");
                tile.className = "tile";
                if (value > 0) {
                    tile.textContent = value;
                    tile.setAttribute("data-value", value);
                }
                gridContainer.appendChild(tile);
            });
        });
    }

    function slideRow(row) {
        const filteredRow = row.filter(value => value);
        const missing = gridSize - filteredRow.length;
        return [...Array(missing).fill(0), ...filteredRow];
    }

    function combineRow(row) {
        for (let i = gridSize - 1; i > 0; i--) {
            if (row[i] === row[i - 1] && row[i] !== 0) {
                row[i] *= 2;
                row[i - 1] = 0;
            }
        }
        return row;
    }

    function handleMove(direction) {
        let rotatedGrid;
        if (["ArrowUp", "ArrowDown"].includes(direction)) {
            rotatedGrid = rotateGrid(grid);
        } else {
            rotatedGrid = [...grid];
        }

        rotatedGrid.forEach((row, idx) => {
            if (["ArrowRight", "ArrowDown"].includes(direction)) {
                row = slideRow(row);
                row = combineRow(row);
                rotatedGrid[idx] = slideRow(row);
            } else {
                row.reverse();
                row = slideRow(row);
                row = combineRow(row);
                row = slideRow(row);
                rotatedGrid[idx] = row.reverse();
            }
        });

        if (["ArrowUp", "ArrowDown"].includes(direction)) {
            grid = rotateGrid(rotatedGrid, true);
        } else {
            grid = rotatedGrid;
        }

        addNewTile();
        renderGrid();
        checkGameOver();
    }

    function rotateGrid(matrix, reverse = false) {
        return reverse
            ? matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex])).reverse()
            : matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]).reverse());
    }

    function checkGameOver() {
        for (let r = 0; r < gridSize; r++) {
            for (let c = 0; c < gridSize; c++) {
                if (grid[r][c] === 0) return; // There are still empty tiles.
                if (r > 0 && grid[r][c] === grid[r - 1][c]) return; // Can combine vertically.
                if (c > 0 && grid[r][c] === grid[r][c - 1]) return; // Can combine horizontally.
            }
        }
        alert("Game Over!");
    }

    resetButton.addEventListener("click", initializeGame);
    window.addEventListener("keydown", e => {
        if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
            handleMove(e.key);
        }
    });

    initializeGame();
});
