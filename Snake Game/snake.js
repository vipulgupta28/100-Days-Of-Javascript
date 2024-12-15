//Coded By Vipul Gupta
const gameBoard = document.getElementById('gameBoard');
const ctx = gameBoard.getContext("2d");
const scoreText = document.getElementById('scoreText');
const resetBtn = document.getElementById('resetBtn');

const width = gameBoard.width;
const height = gameBoard.height;

const boardBackground = "#2b2d42";  
const snakeColor = "#A8D5BA";      
const snakeBorder = "#A8D5BA";      
const foodColor = "#FF0000";        

const unitSize = 25;
let running = false;
let xVelocity = unitSize;
let yVelocity = 0;
let foodX;
let foodY;
let score = 0;

let snake = [
    
    {x:unitSize * 3, y:0},
    {x:unitSize * 2, y:0},
    {x:unitSize, y:0},
    {x:0, y:0}
];

window.addEventListener("keydown", changeDirection);
resetBtn.addEventListener("click", resetGame);

gameStart();

function gameStart(){
    running = true;
    scoreText.textContent = score;
    createFood();
    drawFood();
    nextTick();
}

function nextTick(){
    if(running){
        setTimeout(() => {
            clearBoard();
            drawFood();
            moveSnake();
            drawSnake();
            checkGameOver();
            nextTick();
        }, 100);
    } else {
        displayGameOver();
    }
}

function clearBoard(){
    ctx.fillStyle = boardBackground;
    ctx.fillRect(0, 0, width, height);
}

function createFood(){
    foodX = Math.floor(Math.random() * (width / unitSize)) * unitSize;
    foodY = Math.floor(Math.random() * (height / unitSize)) * unitSize;
}

function drawFood(){
    ctx.fillStyle = foodColor;
    ctx.fillRect(foodX, foodY, unitSize, unitSize);
    
    
}

function moveSnake(){
    const head = {x: snake[0].x + xVelocity, y: snake[0].y + yVelocity};
    snake.unshift(head);
    if(snake[0].x == foodX && snake[0].y == foodY) {
        score += 10;
        scoreText.textContent = `${score}`;
        createFood();
    } else {
        snake.pop();
    }
}

function drawSnake(){
    ctx.fillStyle = snakeColor;
    ctx.strokeStyle = snakeBorder;
    snake.forEach(snakePart => {
        ctx.fillRect(snakePart.x, snakePart.y, unitSize, unitSize);
        ctx.strokeRect(snakePart.x, snakePart.y, unitSize, unitSize);
    });
}

function changeDirection(event){
    const keyPressed = event.keyCode;
    const LEFT = 37;
    const RIGHT = 39;
    const UP = 38;
    const DOWN = 40;

    const goingUP = (yVelocity == -unitSize);
    const goingDown = (yVelocity == unitSize);
    const goingLeft = (xVelocity == -unitSize);
    const goingRight = (xVelocity == unitSize);

    switch(true){
        case(keyPressed == LEFT && !goingRight):
            xVelocity = -unitSize;
            yVelocity = 0;
            break;
        case(keyPressed == UP && !goingDown):
            xVelocity = 0;
            yVelocity = -unitSize;
            break;
        case(keyPressed == RIGHT && !goingLeft):
            xVelocity = unitSize;
            yVelocity = 0;
            break;
        case(keyPressed == DOWN && !goingUP):
            xVelocity = 0;
            yVelocity = unitSize;
            break;
    }
}

function checkGameOver(){
    switch(true){
        case (snake[0].x < 0):
        case (snake[0].x >= width):
        case (snake[0].y < 0):
        case (snake[0].y >= height):
            running = false;
            break;
    }

    for (let i = 1; i < snake.length; i++) {
        if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
            running = false;
        }
    }
}

function displayGameOver(){
    ctx.font = "50px Segoe UI";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.fillText("GAME OVER", width / 2, height / 2);
    running = false;
}

function resetGame(){
    score = 0;
    xVelocity = unitSize;
    yVelocity = 0;
    snake = [
        {x:unitSize * 4, y:0},
        {x:unitSize * 3, y:0},
        {x:unitSize * 2, y:0},
        {x:unitSize, y:0},
        {x:0, y:0}
    ];
    gameStart();
}
