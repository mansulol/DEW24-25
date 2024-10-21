let ballPosX = 0;
let ballPosY = 0;

let velocityBallX = 6;
let velocityBallY = -6;

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
let fps = 1000 / 60;

document.addEventListener("DOMContentLoaded", () => start());

function start() {
  ball.style.width = ballWidth + "px";
  ball.style.height = ballHeight + "px";

  ball.style.top = "90%";
  ball.style.left = "50%";
  ball.style.transform = "translateX(-50%)";

  ballPosX = ball.offsetLeft;
  ballPosY = ball.offsetTop;

  // Vaus styles
  vaus.style.width = vausWidth + "px";
  vaus.style.height = vausHeight + "px";

  vaus.style.left = "50%";
  vaus.style.transform = "translateX(-50%)";

  vausPosX = vaus.offsetLeft;
  vausPosY = vaus.offsetTop;

  renderBlocks();
}

function play() {
  document.onmousemove = handleMouseMove;

  let timer = setInterval(() => {
    ballPosY += velocityBallY;
    ballPosX += velocityBallX;

    if (ballPosY - ballWidth / 2 <= 0) {
      velocityBallY *= -1;
    }

    if (ballPosX - ballWidth / 2 <= 0) {
      velocityBallX *= -1;
    }

    if (ballPosX + ballWidth / 2 >= window.innerWidth) {
      velocityBallX *= -1;
    }

    if (ballPosY + ballHeight / 2 >= window.innerHeight) {
      clearInterval(timer);
      gameOver();
    }

    // Colisión con el vaus
    if (collisionVaus()) {
      velocityBallY *= -1;
    }

    getCollisionsBricks();
    actualizarGui();
  }, fps);
}

function actualizarGui() {
  ball.style.left = ballPosX + "px";
  ball.style.top = ballPosY + "px";

  renderBlocks();
}

function handleMouseMove(e) {
  vausPosX = e.clientX - vausWidth / 2;
  vaus.style.left = vausPosX + "px";
}

// Press space to play
document.addEventListener("keyup", (e) => {
  let menu = document.querySelector(".menu");
  menu.remove();

  setTimeout(() => {
    if (e.code == "Space") start(), play();
  }, 200);
});

function gameOver() {
  alert("Game Over!");
  let retry = document.querySelector(".retry");
  retry.style.visibility = "visible"

  retry.addEventListener("click", () => {
    start()
    play()

    retry.style.visibility = "hidden"
  });
}
