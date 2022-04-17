// Array to store all Bubble objects
let bubbles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  noStroke();
  // Set color mode to HSB
  colorMode(HSB, 360, 100, 100, 100);
}

function draw() {

  background(255, 10);

  // Move and display all Bubble objects in bubbles array
  for (let i = 0; i < bubbles.length; i++) {
    let bubble = bubbles[i];
    bubble.move();
    bubble.display();
  }

  // Separately, check if Bubble object is done, if so, remove Bubble object from bubbles array
  for (let i = 0; i < bubbles.length; i++) {
    let bubble = bubbles[i];

    if (bubble.done === true) {
      // splice array method removes a number of elements (given as second argument) in the array at specified location (given as first argument)
      bubbles.splice(i, 1);
    }
  }

  // Every 30 frames
  if (frameCount % 30 === 0) {
    // Add new Bubble object to bubbles array
    bubbles.push(new Bubble(random(width), random(height)));
  }
}

// Define Bubble class
class Bubble {
  // Constructor function runs when an instance of the Bubble class is created
  // Two arguments are given when Bubble object is created, used for x and y position
  constructor(x, y) {
    this.x = x;
    this.y = y;

    // Randomly set the hue value
    this.hue = random(30, 50);

    this.size = 0;
    // Randomly set max size
    this.maxSize = random(width / 5, width / 2);

    // Randomly set pulseSpeed, used to decide the speed of the size of the circle pulsing
    this.pulseSpeed = random(0.01, 0.05);

    // Initialize done to false
    this.done = false;
    // Start life at full
    this.life = 1;

    // Randomly set lifeSpeed, used to decide the speed of Bubble fading
    this.lifeSpeed = random(0.001, 0.005);
  }

  move() {
    // Randomly move y position of Bubble up between 1 to 5 pixels
    this.y -= random(1, 5);

    // If y position is less than 0
    if (this.y < 0) {
      // Bring y position of bubble back down to the bottom of canvas
      this.y = height;
    }

    // Fluctuate size of circle using sin() function
    this.size = this.maxSize * sin(frameCount * this.pulseSpeed);

    // Decrement life value by lifeSpeed
    this.life -= this.lifeSpeed;

    // If life is less than 0, we need to remove this Bubble object from array
    if (this.life < 0) {
      this.done = true;
    }
  }

  display() {
    // display Bubble using the randomly selected hue and using life value for transparency
    fill(this.hue, 80, 100, 30 * this.life);
    circle(this.x, this.y, this.size);
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
