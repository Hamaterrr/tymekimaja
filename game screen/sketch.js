let ballX = 300;
let ballY = 10; 
let ballSpeedX = 6;
let ballSpeedY = 6;

function setup() {
  createCanvas(600, 600);
  rectMode(CENTER); 
}

function draw() {
  
  background('#1A1A1A'); 
  fill('#5234D9');       
  noStroke();
  triangle(0, 0, 600, 0, 0, 600); 
  
  fill('#E6F51D'); 
  noStroke();
  rect(constrain(mouseX, 40, 550), 550, 100, 15); 
  
  fill('#E6F51D');
  circle(ballX, ballY, 40);
  
  ballY = ballY + ballSpeedY;
  ballX = ballX + ballSpeedX;
 
  if (ballX < 10 || ballX > 590) {
    ballSpeedX = ballSpeedX * -1;
  }
  if (ballY < 10) {
    ballSpeedY = ballSpeedY * -1;
  }
  
  if (dist(ballX, ballY, mouseX, 550) < 40) {
    ballSpeedY = ballSpeedY * -1;
  }
  
  if (ballY > 600) {
    ballX = 300;
    ballY = 10;
    ballSpeedY = 6; 
    ballSpeedX = 6; 
  }
}