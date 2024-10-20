let bricks = [
    [ {life: 0},{life: 0},{life: 0},{life: 0} ], //this line with life: 0 means empty space
    [ {life: 1},{life: 1},{life: 1},{life: 1} ],
    [ {life: 2},{life: 2},{life: 2},{life: 2} ],
    [ {life: 3},{life: 3},{life: 3},{life: 3} ],
]

let collisions = []

let hitbox = 5

let stage = document.querySelector('.stage')
let screen = document.getElementsByTagName('body')[0]

function renderBlocks(){
    stage.innerHTML=""
    
    for(let i=0; i<bricks.length; i++) {
        let row = document.createElement('div')
        row.className="row"

        
        for(let j=0; j<bricks[i].length; j++){
            
            let brick = document.createElement('div')
            brick.className="brick"
            
            brick.style.width = brickWidth+"px"
            brick.style.height = brickHeight+"px"
            
            if( bricks[i][j].life === 0 ){
                brick.style.backgroundColor = "#ff0000";
            }else if( bricks[i][j].life === 1 ){
                brick.style.backgroundColor = "#ffff00";
            }else if( bricks[i][j].life === 2 ){
                brick.style.backgroundColor = "#ff8000";
            }else if( bricks[i][j].life === 3 ){
                brick.style.backgroundColor = "#00ff00";
            }
            
            row.appendChild(brick)
        }
        stage.appendChild(row)
    }
}

function getCollisionsBricks(){
    
    // let lastRow = bricks[bricks.length-1]

    // for(let i=0; i<lastRow.length; i++){
    //     let brickLastRow = lastRow[i]

    //     console.log(brickLastRow, brickLastRow)
    // }

    let bricksDOM = stage.children

    for(let i=0; i<bricksDOM.length; i++){
        let brickLastRow = bricksDOM[i]

        console.log( brickLastRow.getBoundingClientRect().x + brickWidth/2, brickLastRow.getBoundingClientRect().y  + brickHeight/2 )
    }
    
    // let collisionsRow = []
    
    // collisionsRow.push({
    //     x: brick.offsetLeft,
    //     y: brick.offsetTop
    // })

    // collisions.push(collisionsRow)
}

function collisionVaus(){
    return ballPosY + vausHeight/2 + hitbox >= vausPosY &&
            ballPosX <= vausPosX + vausWidth/2 &&
            ballPosX >= vausPosX - vausWidth/2
    ? true
    : false
}

