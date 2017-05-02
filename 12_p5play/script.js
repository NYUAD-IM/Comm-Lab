var ball;

function preload(){
}


function setup(){
 createCanvas(windowWidth, windowHeight);
 ball=createSprite(200, 200, 200, height-200);
	ball.addAnimation("floating", "sphere0001.png", "sphere0011.png");
}


function draw(){
  background(255, 255, 255);

  ball.attractionPoint(.2, mouseX, mouseY);
  drawSprites();

}
