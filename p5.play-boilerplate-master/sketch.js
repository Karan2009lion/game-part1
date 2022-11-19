var player1,player1Img
var bg,bgImg
var player2,player2Img


function preload() {
  bgImg=loadImage("bg.png");
}



function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}