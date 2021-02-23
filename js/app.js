function setup() {


    createCanvas(600, 600)
    
    // It will just create the canvas where we can draw/create games
    // as we want ! 600x600 are the pixel number 
    // createCanvas(pixe_of_x (width), pixel_of_y (height))

    // By default if you remove the createCanvas() byDefault there 
    // createCanvas(400,300) of 400px wide and 300px height will be there !
    
}

function draw() {



    background(74, 96, 221)

    rect(100, 50, 25, 75)
    // this means draw the rectangel
    // the (0,0) of rectangllle in 2D space will be at LEFT-TOP-CORNER !
    // 100 => X position from (0,0)  
    // 50 =>  Y position from (0,0)
    // 25 => Width of the rectangle
    // 70 => height of the rectangle 
   

    rect(30, 20, 55, 55, 20);
    // Draw a rectangle with rounded corners, each having a radius of 20.

     
    rect(30, 20, 55, 55, 20, 15, 10, 5);
    // Draw a rectangle with rounded corners having the following radii:
    // top-left = 20, top-right = 15, bottom-right = 10, bottom-left = 5.

    // rect(x, y, w, [h], [tl], [tr], [br], [bl])
    // x                    Number: x - coordinate of the rectangle.
    // y                    Number: y - coordinate of the rectangle.
    // w                    Number: width of the rectangle.
    // h                    Number: height of the rectangle.(Optional)
    // tl                   Number: optional radius of top - left corner.(Optional)
    // tr                   Number: optional radius of top - right corner.(Optional)
    // br                   Number: optional radius of bottom - right corner.(Optional)
    // bl                   Number: optional radius of bottom - left corner.(Optional)
    // detailX Integer:     number of segments in the x - direction(
    //                      for WebGL mode)(Optional)
    // detailY Integer:     number of segments in the y - direction(
    //                      for WebGL mode)(Optional)


    line(30, 20, 85, 75);


    // line(x1, y1, z1, x2, y2, z2)

    // x1       Number: the x - coordinate of the first point
    // y1       Number: the y - coordinate of the first point
    // x2       Number: the x - coordinate of the second point
    // y2       Number: the y - coordinate of the second point
    // z1       Number: the z - coordinate of the first point
    // z2       Number: the z - coordinate of the second point

    

}


// setup() ois the place where we create the canvas, first function called is nothing but setup()
// i.e. at the begining we are going to setup our canvas !
// draw() is the place wehre i put my stuff for drawing !   

// LAYRING OF THE SHAPES WHAT APPERS ON TOP OR BEHHIND HAS TO DO WITH THE ORDER OF LINES OF THE CODE !



// you can also use the rectMode() to center the things !