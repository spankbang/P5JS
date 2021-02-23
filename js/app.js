var circleX
function setup() {
    createCanvas(1920, 1080)
    background(196)
    circleX = 50
}

function draw() {
    ellipse(circleX, 100, 50, 100)
    circleX = circleX + 10
}   