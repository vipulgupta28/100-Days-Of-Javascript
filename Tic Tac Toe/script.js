// Coded By Vipul Gupta
const board = document.getElementById('board');
        const status = document.getElementById('status');
        let currentPlayer = 'X';
        let gameActive = true;
        const cells = Array(9).fill(null);

        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        // Create the board dynamically
        function createBoard() {
            board.innerHTML = '';
            cells.forEach((_, index) => {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                cell.setAttribute('data-index', index);
                cell.addEventListener('click', handleCellClick);
                board.appendChild(cell);
            });
        }

        // Handle cell click
        function handleCellClick(event) {
            const index = event.target.getAttribute('data-index');

            if (!gameActive || cells[index]) return;

            cells[index] = currentPlayer;
            event.target.textContent = currentPlayer;
            event.target.classList.add('taken');

            if (checkWin()) {
                status.textContent = `Player ${currentPlayer} wins!`;
                gameActive = false;
                return;
            }

            if (cells.every(cell => cell)) {
                status.textContent = 'It\'s a draw!';
                gameActive = false;
                return;
            }

            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            status.textContent = `Player ${currentPlayer}'s turn`;
        }

        // Check if there's a winner
        function checkWin() {
            return winningCombinations.some(combination => {
                return combination.every(index => cells[index] === currentPlayer);
            });
        }

        // Restart the game
        function restartGame() {
            currentPlayer = 'X';
            gameActive = true;
            cells.fill(null);
            status.textContent = `Player X's turn`;
            createBoard();
        }

        // Initialize the game
        createBoard();
