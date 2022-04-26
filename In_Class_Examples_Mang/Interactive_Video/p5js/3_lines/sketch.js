// Array to store all Line objects
let lines = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // Create 100 Lines objects and push them to lines array
  for(let i = 0; i < 100; i++){
    lines.push(new Lines());
  }
  
  background(230);
}

function draw() {
  
  // Update and display all Line objects in lines array
  for(let i = 0; i < lines.length; i++){
    lines[i].update();
    lines[i].display();
  }
}

// Define Lines class
class Lines{
  // Constructor function runs when an instance of the Lines class is created
  constructor(){
    this.x = random(width);
    this.y = random(height);
    this.prevX = this.x;
    this.prevY = this.y;
    
    this.xSpeed = random(-5, 5);
    this.ySpeed = random(-5, 5);
    
    this.gray = random(255);
    this.len = random(10, 150);
    
    this.xOffset = random(0.001, 0.01);
    this.yOffset = random(0.001, 0.01);
  }
  
  update(){
    this.prevX = this.x;
    this.prevY = this.y;
    
    // increment x and y position by noise. The combination of calculation is quite arbitrary. Feel free to experiment!
    this.x += noise((this.x + frameCount) * this.xOffset, this.y * 0.01) * this.xSpeed;
    this.y += noise(this.x * 0.01, (this.y + frameCount) * this.yOffset) * this.ySpeed;
    
    if(this.x > width){
      this.x = 0;
    }
    
    if(this.x < 0){
      this.x = width;
    }
    
    if(this.y > height){
      this.y = 0;
    }
    
    if(this.y < 0){
      this.y = height;
    }
  }
  
  display(){
    strokeWeight(2);
    stroke(this.gray, 70);
    
    // Calculating the angle of direction to rotate the line towards the direction it is travelling towards. Super math-y
    let dx = this.x - this.prevX;
    let dy = this.y - this.prevY;

    this.angle = atan2(dx, dy) + PI / 2;
    
    this.nextX = this.x - cos(this.angle) * this.len;
    this.nextY = this.y - sin(this.angle) * this.len;
    
    push();
    translate(this.nextX, this.nextY);
    rotate(this.angle);
    line(0, 0, this.len, 0);
    pop();
  } 
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}