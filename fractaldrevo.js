let a = 200;
var slider;

function setup(){
    createCanvas(800,800);
    
    slider = createSlider(0, TWO_PI, QUARTER_PI, 0.01);

}

function draw(){
    background(0);
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
    rotate(slider.value());
    draw2(lenght * 0.66);
    pop();
    push();
    rotate(-(slider.value()));
    draw2(lenght * 0.66);
    pop();
    }
    
}
