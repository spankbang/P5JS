var spot = {
    x: 100,
    y:50
}

var col = {
    r: 255,
    g: 0,
    b: 0
}

function setup() {
    createCanvas(600, 600)
    background(0)
}

function draw() { 


    col.r = random(100, 255);
    col.g = random(100, 255);
    col.b = random(100, 255);


    spot.x = random(0, width);
    spot.y = random(0,height)

    fill(col.r, col.g, col.b,100    );
    noStroke()
    ellipse(spot.x, spot.y, 24, 24);

}
