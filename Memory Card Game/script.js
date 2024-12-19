//Coded By Vipul Gupta
const gameContainer = document.getElementById('gameContainer');

        const cards = [
            'A', 'A', 'B', 'B', 'C', 'C', 'D', 'D',
            'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H'
        ];

        let firstCard = null;
        let secondCard = null;
        let lockBoard = false;

        function shuffle(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }

        function createCardElement(content) {
            const card = document.createElement('div');
            card.classList.add('card');
            card.dataset.value = content;
            card.addEventListener('click', handleCardClick);
            return card;
        }

        function handleCardClick(event) {
            if (lockBoard) return;
            const clickedCard = event.target;

            if (clickedCard === firstCard) return;

            clickedCard.classList.add('flipped');
            clickedCard.textContent = clickedCard.dataset.value;

            if (!firstCard) {
                firstCard = clickedCard;
                return;
            }

            secondCard = clickedCard;
            checkMatch();
        }

        function checkMatch() {
            const isMatch = firstCard.dataset.value === secondCard.dataset.value;
            isMatch ? disableCards() : unflipCards();
        }

        function disableCards() {
            firstCard.classList.add('hidden');
            secondCard.classList.add('hidden');

            resetBoard();
        }

        function unflipCards() {
            lockBoard = true;
            setTimeout(() => {
                firstCard.classList.remove('flipped');
                secondCard.classList.remove('flipped');

                firstCard.textContent = '';
                secondCard.textContent = '';

                resetBoard();
            }, 1000);
        }

        function resetBoard() {
            [firstCard, secondCard, lockBoard] = [null, null, false];
        }

        function initializeGame() {
            shuffle(cards);
            cards.forEach(cardValue => {
                const cardElement = createCardElement(cardValue);
                gameContainer.appendChild(cardElement);
            });
        }

        initializeGame();
