let bricks = [
    [ {life: 0},{life: 0},{life: 0},{life: 0} ], //this line with life: 0 means empty space
    [ {life: 1},{life: 1},{life: 1},{life: 1} ],
    [ {life: 2},{life: 2},{life: 2},{life: 2} ],
    [ {life: 3},{life: 3},{life: 3},{life: 3} ],
]

let collisions = []

let stage = document.querySelector('.stage')


function renderBlocks(){
    
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

function getCollisionswithBricks(){
    
    for(let i=0; i<stage.children.length; i++){
        for(let j=0; j<stage.children.length; j++){
            console.log(stage.children[i].offsetTop, stage.children[i].offsetLeft)
        }
    }
    
    // let collisionsRow = []
    
    // collisionsRow.push({
    //     x: brick.offsetLeft,
    //     y: brick.offsetTop
    // })

    // collisions.push(collisionsRow)
}

function getCollisionsWalls(){
    if( ballPosY ==  0){
        console.log('Pared arriba', ballPosY, ballPosY)
    }
}


