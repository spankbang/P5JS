function setup() {
    createCanvas(900, 900)
    // background(99)
    /*
        here the backgroudn color will executes  only once and
        pictures on canvas will be drawn again an again !
    */

}

// function draw() {
//     background(99)

// }

/*
    The setup() function weill execute once you run or refresh the page
    Once the setup() function executes then after the draw() function will
    execute and it will do loop and loop infinetely !

    The draw() function will executes again and again so that drewen picture on 
    canvas will appear static to us !

*/


function draw() {

    rect(mouseX, mouseY, 15, 15, 50)
    // the mouseX and mouseY are predefined variables in p5.js
    // They follow the mouse's X position and mouse's Y postion and
    // literally follows it , as you can see it in the browser !
}

function mousePressed() {
    background(250,250,100)
}