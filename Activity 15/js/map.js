let bricks = [
  [{ life: 0 }, { life: 0 }, { life: 0 }, { life: 0 }], //this line with life: 0 means empty space
  [{ life: 1 }, { life: 1 }, { life: 1 }, { life: 1 }],
  [{ life: 2 }, { life: 2 }, { life: 2 }, { life: 2 }],
  [{ life: 3 }, { life: 3 }, { life: 3 }, { life: 3 }],
];

let collisions = [];

let hitbox = 20;

let stage = document.querySelector(".stage");
let screen = document.getElementsByTagName("body")[0];

function renderBlocks() {
  stage.innerHTML = "";

  for (let i = 0; i < bricks.length; i++) {
    let row = document.createElement("div");
    row.className = "row";

    for (let j = 0; j < bricks[i].length; j++) {
      let brick = document.createElement("div");
      brick.className = "brick";

      brick.style.width = brickWidth + "px";
      brick.style.height = brickHeight + "px";

      if (bricks[i][j].life < 0) {
      } else {
        if (bricks[i][j].life === 0) {
          brick.style.backgroundColor = "#ff431c";
        } else if (bricks[i][j].life === 1) {
          brick.style.backgroundColor = "#9a74ff";
        } else if (bricks[i][j].life === 2) {
          brick.style.backgroundColor = "#919600";
        } else if (bricks[i][j].life === 3) {
          brick.style.backgroundColor = "#004784";
        }
        row.appendChild(brick);
      }
    }
    stage.appendChild(row);
  }
}

function getCollisionsBricks() {
  let stageDOM = document.querySelector(".stage").children;

  for (let i = 0; i < stageDOM.length; i++) {
    let rowDOM = stageDOM[i].children;

    for (let j = 0; j < rowDOM.length; j++) {
      let brickDOM = rowDOM[j];
      let brickRect = brickDOM.getBoundingClientRect();

      if (
        ballPosX + ballWidth / 2 >= brickRect.left &&
        ballPosX - ballWidth / 2 <= brickRect.right &&
        ballPosY + ballHeight / 2 >= brickRect.top &&
        ballPosY - ballHeight / 2 <= brickRect.bottom
      ) {
        bricks[i][j].life--;

        velocityBallY *= -1;
        return;
      }
    }
  }
}

function collisionVaus() {
  return ballPosY + (ballHeight/2) + hitbox >= vausPosY &&
    ballPosX + ballWidth/2 < vausPosX + vausWidth/2 &&
    ballPosX - ballWidth/2 > vausPosX - vausWidth/2
    ? true
    : false;
}
