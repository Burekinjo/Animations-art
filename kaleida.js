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
  
    rotate(radians(frameCount*125));
  
    ellipse(0, 0, 100, 800); 

    stroke (101,209,63,255);
    fill(255, 0);
  
    rotate(radians(frameCount*100));
  

    ellipse(0, 0, 100, 800); 

    stroke (228,203,181,255);
    fill(255, 0);
  
    rotate(radians(frameCount*150));
  
    ellipse(0, 0, 100, 800); 

    stroke (170,209,126,255);
    fill(255, 0);
  
    rotate(radians(frameCount*170));
  
    ellipse(0, 0, 100, 800);

    

    
  }
