function setup(){
    createCanvas(1920,1080);
    noStroke();
    background(228,203,181,255);
}
function draw(){
  
  for (let i = 0; i < width *2 ; i += 75) {
    for (let j = 0; j < height *2 ; j += 75) {
      fill(249,168,25,255);          ;
      rect(i+30, j+30, 50, 50);
    }
  }

    for (let i = 0; i < width *2 ; i += 75) {
        for (let j = 0; j < height *2 ; j += 75) {
          fill (170,209,126,255);          ;
          ellipse(i, j, 50, 50);
        }
      }
}