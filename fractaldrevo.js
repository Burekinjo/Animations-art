let a = 200;
var slider;

function setup(){
    createCanvas(windowWidth,windowHeight);
    
    slider = createSlider(0, TWO_PI, QUARTER_PI, 0.0001);

}

function draw(){
    background(0);
    translate(windowWidth/2,windowHeight);
    stroke(255);
    strokeWeight(3);
    draw2(windowHeight/4);
}

function draw2(lenght){

    line(0,0,0,-lenght);
    translate(0,-lenght);
    if(lenght>4)
    {
    push();
    rotate(slider.value());
    draw2(lenght * 0.66);
    pop();
    push();
    rotate(-(slider.value()));
    draw2(lenght * 0.66);
    pop();
    }
    
}
