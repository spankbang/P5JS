var circleObject = {
    height: 20,
    width: 20,
}
function setup() {
    createCanvas(1920, 1000)
    background(196)
}

function draw() {
    ellipse(960, 540, circleObject.height, circleObject.width)
    circleObject.height++
     circleObject.width++
    
}   