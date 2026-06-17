function setup() {
  createCanvas(600, 600);
  noStroke(); 
}

function draw() {
  background('#3F51B5'); 
  fill('#FFFFFF'); 

  for (let x = 0; x <= 600; x = x + 30) {
  for (let y = 0; y <= 600; y = y + 30) {

 let d = dist(x, y, mouseX, mouseY);
 let dotSize = d / 10; 
 if (dotSize > 40) {
  dotSize = 40; 
}
 circle(x, y, dotSize);
  }
 }
}