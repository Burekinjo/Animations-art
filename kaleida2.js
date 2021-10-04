function setup() {
    createCanvas(windowWidth, windowHeight);
  }
  
  function draw() {
    background(0,15);
    rectMode(CENTER);
  
    translate(width/2, height/2);
    rotate(QUARTER_PI);
  
    stroke (249,168,25,255);
    fill(255, 0);
  
    rotate(radians(frameCount*175));
  
    rect(0, 0, 5, 800); 

    stroke (101,209,63,255);
    fill(255, 0);
  }