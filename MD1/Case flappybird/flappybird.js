let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

let bird = new Image();
let bg = new Image();
let fg = new Image();
let pipeNorth = new Image();
let pipeSouth = new Image();
bird.src = "images/bird.png";
bg.src = "images/bg.png";
fg.src = "images/fg.png";
pipeNorth.src = "images/pipeNorth.png";
pipeSouth.src = "images/pipeSouth.png";

let fly = new Audio();
let scor = new Audio();
fly.src = "sounds/sounds_fly.mp3";
scor.src = "sounds/sounds_score.mp3";

let gap = 115;
let constant;

let bX = 10;
let bY = 150;

let gravity = 1.5;

let score = 0;
document.addEventListener("keydown", moveUp);

function moveUp() {
    bY -= 35;
    fly.play();
}

let pipe = [];
pipe[0] = {
    x: canvas.width,
    y: 0
}

function draw() {
    context.drawImage(bg, 0, 0);
    for (let i = 0; i < pipe.length; i++) {
        constant = pipeNorth.height + gap;
        context.drawImage(pipeNorth, pipe[i].x, pipe[i].y);
        context.drawImage(pipeSouth, pipe[i].x, pipe[i].y + constant);
        pipe[i].x--;
        if (pipe[i].x == 125) {
            pipe.push({
                x: canvas.width,
                y: Math.floor(Math.random() * pipeNorth.height) - pipeNorth.height
            });

        }
        if (bX + bird.width >= pipe[i].x && bX <= pipe[i].x + pipeNorth.width && (bY <= pipe[i].y + pipeNorth.height || bY + bird.height >= pipe[i].y + constant) || bY + bird.height >= canvas.height - fg.height) {
            window.location.reload();
        }

        if (pipe[i].x == 5) {
            score++;
            scor.play();
        }
    }
    context.drawImage(fg,0,canvas.height-fg.height);
    context.drawImage(bird,bX,bY);
    bY += gravity;
    context.fillStyle = "#000";
    context.font = "20px Verdana";
    context.fillText("Score:"+score,10,canvas.height-20);
    requestAnimationFrame(draw);
}
draw();
setTimeout(()=>{
    document.getElementById("myaudio").play()
},100)

