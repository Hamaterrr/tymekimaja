function preload(){
  bgImage=loadImage("ping.jpg")
}

let ballX = 300;
let ballY = 200; 
let ballSpeedX = 6;
let ballSpeedY = 6;

function setup() {
  createCanvas(600, 600);
  rectMode(CENTER); 
}
  function draw() {
  background( bgImage );
  
  fill('#F7FBD8'); 
  noStroke();

 rect(constrain(mouseX, 40, 550), 550, 100, 10); 
    fill('#F2EE56');
    circle(ballX,ballY,25);
    ballY=ballY+ballSpeedY;
    ballX=ballX+ballSpeedX;
    if (ballX<10 || ballX>590 ) {
      ballSpeedX=ballSpeedX * -1
    }
    if (ballY<10) {
      ballSpeedY=ballSpeedY * -1
    }
    if (dist(ballX,ballY,mouseX,550) < 20) {
      ballSpeedY=ballSpeedY* -1
    }
    
     if (ballY > 600) {
    ballX = 300;
    ballY = 200;
    ballSpeedY = 6; 
    ballSpeedX = 6; 
       
     }
    }
