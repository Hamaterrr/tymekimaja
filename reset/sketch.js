let currentScreen = "home"; 
let bgImage;
let ballX = 2048;
let ballY = 100; 
let ballSpeedX = 35;
let ballSpeedY = 35;
let ballSize = 250;
let paddleWidth = 600;
let paddleHeight = 90;
let paddleY = 2100; 

function preload() {
  bgImage = loadImage("background1.png"); 
}
function setup() {
  createCanvas(4096, 2304);  
  textAlign(CENTER, CENTER);
  rectMode(CENTER); 
}
function draw() {
  if (currentScreen === "home") {
    drawHomeScreen();
  } else if (currentScreen === "art") {
    drawArtScreen(); 
  } else if (currentScreen === "game") {
    drawGameScreen(); 
  }
}

function drawHomeScreen() {
  noStroke();
  background(bgImage); 
  
  textFont("Helvetica Neue");
  textStyle(BOLD);
  
  textSize(230); 
  fill('#000000');
  text("NEED A", 1473, 546); 
  fill('#df61fd');
  text("RESET?", 2617, 744);
  
  textSize(230);
  fill('#df61fd');
  text('ART', 1475, 1716);
  fill('#000000');
  text('GAME', 2625, 1716); 
}

function drawArtScreen() {
  noStroke();
  background('#1A1A1A'); 
  fill('#EE5814'); 

for (let x = 0; x <= width; x = x + 30) {
for (let y = 0; y <= height; y = y + 30) {
let d = dist(x, y, mouseX, mouseY);
let dotSize = d / 25;
if (dotSize > 40) {
        dotSize = 40; 
      }
      circle(x, y, dotSize);
    }
  }
 
  fill('#FFFFFF');
  textSize(120);
  text("HOME", 350, 200); 
}

function drawGameScreen() {
  background('#1A1A1A'); 
  fill('#5234D9');       
  noStroke();
  triangle(0, 0, 4096, 0, 0, 2304); 
  
  fill('#E6F51D'); 
  noStroke();
  rect(constrain(mouseX, paddleWidth / 2, width - (paddleWidth / 2)), paddleY, paddleWidth, paddleHeight); 
  
  fill('#E6F51D');
  circle(ballX, ballY, ballSize);
  
  ballY = ballY + ballSpeedY;
  ballX = ballX + ballSpeedX;
  
  if (ballX < ballSize / 2 || ballX > width - (ballSize / 2)) {
    ballSpeedX = ballSpeedX * -1;
  }
  if (ballY < ballSize / 2) {
    ballSpeedY = ballSpeedY * -1;
  }
  
  if (dist(ballX, ballY, mouseX, paddleY) < (ballSize + paddleWidth) / 3) {
    if (ballSpeedY > 0) {
      ballSpeedY = ballSpeedY * -1;
    }
  }
  
  if (ballY > height + ballSize) {
    ballX = width / 2;
    ballY = 100;
    ballSpeedY = 35; 
    ballSpeedX = 35; 
  }
  
  fill('#FFFFFF');
  textSize(120);
  text("HOME", 350, 200); 
}

function mousePressed() {
  
  if (currentScreen === "home") {
  
  if (mouseX > 1100 && mouseX < 1850 && mouseY > 1500 && mouseY < 1900) {
      currentScreen = "art"; 
    }
    
   if (mouseX > 2250 && mouseX < 3000 && mouseY > 1500 && mouseY < 1900) {
      currentScreen = "game"; 
       
    ballX = 2048;
    ballY = 100;
    ballSpeedX = 35;
    ballSpeedY = 35;
    }
  } 
  else if (currentScreen === "art" || currentScreen === "game") {
    
    if (mouseX > 100 && mouseX < 600 && mouseY > 50 && mouseY < 350) {
      currentScreen = "home"; 
    }
    
  }
}
