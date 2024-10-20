let ballPosX = 0;
let ballPosY = 0;

let velocityBallX = 10;
let velocityBallY = -10;

const velocityVausX = 30;

let vausPosX = 0;
let vausPosY = 0;

let ballWidth = 30;
let ballHeight = 30;

let vausWidth = 150;
let vausHeight = 20;

let brickWidth = 250;
let brickHeight = 50;

let ball = document.querySelector(".ball");
let vaus = document.querySelector(".vaus");

// En segundo 60 veces (frames)
let fps = 1/60;

document.addEventListener("DOMContentLoaded", () => start());

function start() {
  // ball.style.top = "90%"
  // ball.style.left = "50%"
  // ball.style.transform = "translateX(-50%)";

  //My balls
  ball.style.width = ballWidth + "px";
  ball.style.height = ballHeight + "px";

  ballPosX = ball.offsetLeft;
  ballPosY = ball.offsetTop;

  // Vaus styles
  vaus.style.width = vausWidth + "px";
  vaus.style.height = vausHeight + "px";

  vausPosX = vaus.offsetLeft;
  vausPosY = vaus.offsetTop;

  // Brick Styles
  // brick.style.width = "100px";
  // brick.style.height = "20px";
  // console.log(collisions)
  renderBlocks();
}

function play() {
  document.onmousemove = handleMouseMove;

  let timer = setInterval(() => {
    console.log(ballPosX, ballPosY);

    console.log();

    // velocityBallY -= 0.4

    ballPosY += velocityBallY;
    ballPosX += velocityBallX;

    if (ballPosY - ballWidth / 2 <= 0) {
      velocityBallY *= -1;
    }

    if (ballPosX + ballWidth / 2 <= 0) {
      velocityBallX *= -1;
    }

    if (ballPosX - ballWidth / 2 >= screen.clientWidth) {
      velocityBallX *= -1;
    }

    if (ballPosY + ballHeight / 2 >= screen.clientHeight) {
      clearInterval(timer);
    }

    // Colision con el vaus
    if (collisionVaus()) {
      velocityBallY *= -1;
      velocityBallX *= 1;
    }

    actualizarGui();
  }, fps);
}

function actualizarGui() {
  ball.style.left = ballPosX + "px";
  ball.style.top = ballPosY + "px";

  renderBlocks();
}

function handleMouseMove(e) {
  vausPosX = e.clientX;
  vaus.style.left = vausPosX + "px";
}

document.addEventListener("keyup", (e) => {
  if (e.code == "Space") play();
});
