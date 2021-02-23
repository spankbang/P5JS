var col = 0;
function setup() {
    createCanvas(600,600)
}

function draw() {
    col = map(mouseX, 0, 600, 0, 255);
    background(col)

    fill(250, 118, 222)
    ellipse(mouseX, 200, 64, 64);
}

/**
 
    What does the map function does ?
    => It takes the 5 arguments.
     ex, map(a,b,c,d,e);
     here ,
            a       =>  The value with respect to !
            b ,c    =>  The existed range
            e,f     =>  The range in which we want to output !
    
    see this lecture , 
    https: //youtu.be/nicMAoW6u1g?list=PLglp04UYZK_PrN6xWo_nJ-8kzyXDyFUwi
 
  
 */