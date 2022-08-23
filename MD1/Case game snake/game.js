let snake, food;

function setup() {
    createCanvas(Width, Height);
    newGame();
}

function draw() {
    background(0);
    drawSnake();

}

function drawSnake() {
    if(frameCount % Snake_speed == 0){
        snake.update();
    }
    snake.disPlay();
    food.disPlay();
}

function newGame() {
    snake = new Snake();
}

function keyPressed() {
    if (keyCode == Up_Arrow && snake.vel.y != 1) {
        snake.vel.y = -1;
        snake.vel.x = 0;
    } else if (keyCode == DOWN_ARROW && snake.vel.y != -1) {
        snake.vel.y = 1;
        snake.vel.x = 0;
    } else if (keyCode == LEFT_ARROW && snake.vel.x != 1) {
        snake.vel.y = 0;
        snake.vel.x = -1;
    } else if (keyCode == RIGHT_ARROW && snake.vel.x != -1) {
        snake.vel.y = 0;
        snake.vel.x = 1;
    }
}
