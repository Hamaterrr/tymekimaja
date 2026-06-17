function preload(){
  bgImage=loadImage("bg.jpg")
  paramountFont = loadFont("Paramount Mountain v5.ttf");
}
function setup() {
  createCanvas(600, 600);
  textAlign(CENTER,CENTER)
}

function draw() {
  noStroke()
  background(bgImage)
  strokeWeight(3)
  stroke(250)
  fill('#233580')
  textFont(paramountFont)
  textSize(100);
  text("Need a Break?",300,144)
  noStroke()
  fill('#233580');
  //shadow first
  circle(165, 350, 100); circle(125, 360, 90); circle(205, 360, 75); circle(165, 370, 80);
  //shadow second
  circle(475, 360, 90);circle(395, 360, 75); circle(435, 370, 80); circle(435, 350, 100);
  
  fill('#88AFE9')
  //first 
   circle(165, 345, 100); circle(125, 355, 90); circle(205, 355, 75); circle(165, 365, 80);
  //second
  circle(435, 345, 100); circle(475, 355, 90); circle(395, 355, 75); circle(435, 365, 80); 
  
  fill('#fFFFFF');
  textSize(65)
  text('game',160,340)
  text('art',440,340)
}
