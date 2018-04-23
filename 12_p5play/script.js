let ball;

preload = () =>{
}


setup = () =>{
let cnv = createCanvas(windowWidth, windowHeight);
// cnv.position(0, 0);

 ball = createSprite(200, 200, 200, height-200);

 ball.addAnimation("floating", "sphere0001.png", "sphere0011.png");
 ball.setCollider("circle", 0, 0, 200);

 //scale affects the size of the collider
ball.scale = random(0.5, 1);
//mass determines the force exchange in case of bounce
ball.mass = ball.scale;

ball.debug = true;
}


draw = () =>{
  background(255, 255, 255);

  ball.attractionPoint(.005, mouseX, mouseY);

  drawSprites();

}
