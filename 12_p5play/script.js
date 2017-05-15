var ball;
var ball2;

function preload(){
}


function setup(){
var cnv = createCanvas(windowWidth, windowHeight);
// cnv.position(0, 0);

 ball = createSprite(200, 200, 200, height-200);

 ball.addAnimation("floating", "sphere0001.png", "sphere0011.png");
 ball.setCollider("circle", -100, 100, 50);

 ball2 = createSprite(200, 200, 200, height-200);

 ball2.addAnimation("floating", "sphere0001.png", "sphere0011.png");
 ball2.setCollider("circle", -100, 100, 50);

 //scale affects the size of the collider
ball.scale = random(0.5, 1);
//mass determines the force exchange in case of bounce
ball.mass = ball.scale;

ball2.scale = random(0.5, 1);
//mass determines the force exchange in case of bounce
ball2.mass = ball2.scale;

ball.debug = true;
}


function draw(){
  background(255, 255, 255);

  ball.attractionPoint(.05, mouseX, mouseY);
  ball2.attractionPoint(.1, mouseX, mouseY);


ball.bounce(ball2);

  drawSprites();

}
