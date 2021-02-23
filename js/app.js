function setup() {
    createCanvas(600, 600)
}

function draw() {

    background(99)


    rectMode(CENTER)
    fill(255, 0, 0)
    stroke(255,255,255)
    rect(200, 150, 150, 150)
    
    // background(a,b,c) => a=red,b=>green,c=>blue
    // background(g) => grey scale colore and it is equivalent to
    // this => background(g,g,g)
    

    
    /*
        Mainly , the color functions are , 
            1) background() 
            2) fill()
            3) stroke()
    
            Here, fill() will describe the interior of that particular shape
            stroke() describes the outline of the shape ! 
            Default stroke of the outline is black and default fill of the shape is white !

            ===>>>>> IMP
            Whenever you want to apply any fill() or stroke() to shape
            then you need to call the function just before the shape() is declared !
            order is very very important !
        
    */
    

    fill(160, 0, 96)
    stroke(255, 5, 255)
    rect(400, 150, 150, 150)

    fill(150, 50, 6) //  stroke(255, 5, 255)
    noStroke() // simply remove the default stroke !
    rect(300, 400, 150, 150)
    
    // for RGB color system , there is also the RGBA where A stands for alpha !

    fill(160, 0, 96, 50) // 50 is nothing but the alpha and you can see it in the browser !
    stroke(255, 5, 255)
    rect(450, 150, 150, 150)


    // we can also increase the stroke by using the strokeWeight() function !
    fill(255, 0, 0)
    stroke(255, 255, 255)
    strokeWeight(2) // here we are increasin the stroke !
    rect(500, 350, 150, 150)

}
