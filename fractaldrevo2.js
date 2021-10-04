let a = 200;

function setup(){
    createCanvas(800,800);
    background(0);
    frameRate(20);
}

function draw(){
    translate(400,800);
    stroke(255);
    strokeWeight(3);
    draw2(a);
}

function draw2(lenght){

    line(0,0,0,-lenght);
    translate(0,-lenght);
    if(lenght>4)
    {
    push();
    rotate(QUARTER_PI*1.3);
    draw2(lenght * 0.66);
    pop();
    push();
    rotate(-(QUARTER_PI*0.5));
    draw2(lenght * 0.66);
    pop();
    }
    
}
