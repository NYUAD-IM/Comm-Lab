let offsetAmount = 50;
let alphaAmount = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  noStroke();
}

function draw() {
  // Set background to white with transparency
  background(255, 30);

  // Draw grid with nested for-loops
  for(let x = 0; x < width; x += 50){
    for(let y = 0; y < height; y += 50){

      // Calculate offset of size using the noise() function and animate it using the frameCount built-in variable
      // The sizeOffset will range between 0 and 50
      sizeOffset = noise(x + frameCount * 0.01, y + frameCount * 0.01) * offsetAmount;
      // Calculate alpha using the noise() function and animate it using the frameCount built-in variable
      // The alpha will range between 0 and 100
      alpha = noise(x + frameCount * 0.02, y + frameCount * 0.02) * alphaAmount;

      // Fill the squares in yellow
      fill(255, 200, 100, alpha);
      // Draw squares along the grid
      square(x, y, 30 + sizeOffset);
    }
  }
}

// Resize canvas whenever browser window is resized
function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}