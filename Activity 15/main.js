// var intro;
//       function handleMouseMove(event) {
//         var x = event.clientX;
//         var y = event.clientY;
//         $(".brick").removeClass("hightlight");
//         $(".row").each(function () {
//           var bounds = this.getBoundingClientRect();
//           if (bounds.bottom >= y && bounds.top <= y) {
//             $(this)
//               .children(".brick")
//               .each(function () {
//                 var bounds = this.getBoundingClientRect();
//                 if (bounds.left <= x && bounds.right >= x) {
//                   $(this).addClass("hightlight");
//                 }
//               });
//           }
//         });
//       }
//       document.onmousemove = handleMouseMove;


let ballPosX = 0
let ballPosY = 0

let velocityX = 8
let velocityY = -10

let vausPosX = 0

let ballWidth = 30
let ballHeight = 30

let vausWidth = 200
let vausHeight = vausWidth/10

let brickWidth = 250
let brickHeight = 50

let ball = document.querySelector('.ball')
let vaus = document.querySelector('.vaus')

let frames = 1/60

document.addEventListener('DOMContentLoaded', () => start())

function start(){
    // ball.style.top = "90%"
    // ball.style.left = "50%"
    // ball.style.transform = "translateX(-50%)";

    //My balls
    ball.style.width = ballWidth+"px"
    ball.style.height = ballHeight+"px"

    ballPosX = ball.offsetLeft
    ballPosY = ball.offsetTop

    // Vaus styles
    vaus.style.width = vausWidth+"px"
    vaus.style.height = vausHeight+"px"

    vausPosX = vaus.offsetLeft

    // Brick Styles
    // brick.style.width = "100px";
    // brick.style.height = "20px";

    
    renderBlocks()
    //play()
    // console.log(collisions)
    getCollisionsWalls()
}

function play(){
    setInterval(() => {

        console.log(ballPosX, ballPosY)

        velocityY -= 0.4

        ballPosY += velocityY
        
        if (ballPosY <= 0) {
            velocityY *= -1
        }
        
        actualizarGui()
    
    }, frames)
}    

function actualizarGui(){
    ball.style.left = ballPosX+"px"
    ball.style.top = ballPosY+"px"
}