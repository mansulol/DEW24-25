// Game logic
let bricks = [
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
];

let frames = 60;
let delayBrick = 2000;

// Variables
let widthBoard = 600;
let heightBoard = 500;

let widthBrick = widthBoard/bricks.length -2;
let heightBrick = heightBoard/bricks[0].length -2;

// DOM Elements
let contentImgNatural = document.querySelector("#contenedor-fondo");
let contentBricks = document.querySelector("#contenedor-brick");

let containerBricks = document.createElement("div");
containerBricks.className = "container-bricks"


function play() {
  contentImgNatural.style.width = widthBoard + "px";
  contentImgNatural.style.height = heightBoard + "px";

  contentBricks.style.width = widthBoard + 2 + "px";
  contentBricks.style.height = heightBoard + "px";

  showBricks();
}

function showBricks() {
  containerBricks.remove();
  containerBricks = document.createElement("div");
  containerBricks.className = "container-bricks"
  
  for (let i = 0; i < bricks.length; i++) {
    for (let j = 0; j < bricks.length; j++) {
      let brick = document.createElement("img");
      brick.className = 'brick'
      brick.style.width = widthBrick + "px";
      brick.style.height = heightBrick + "px";
      
      brick.addEventListener("click", () => removeBrick(i, j));
      
      if (bricks[i][j] == 1) {
        brick.src = "./img/brick.png";
      }
      if (bricks[i][j] == 0) {
        brick.src = "./img/no_brick.png";
      }
      
      containerBricks.appendChild(brick);
    }
  }
  contentBricks.appendChild(containerBricks);
}

function removeBrick(x, y) {
  bricks[x][y] = 0;
  console.log(bricks);
  showBricks();

  setInterval(() => appearbricks(), delayBrick);
}

function appearbricks() {

  for (let i = 0; i < bricks.length; i++) {
    for (let j = 0; j < bricks.length; j++) {
      if (bricks[i][j] == 0) {
        bricks[i][j] = 1;
        showBricks()
        console.log(bricks)
        break;
      }
    }
  }
}
