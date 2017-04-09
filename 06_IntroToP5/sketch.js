// p5js automatically recognizes two functions: setup() and draw()
// any webpage including p5js should have these two functions, even if they are left empty

// the setup function is called once, when the webpage is loaded.
// it's useful to set the initial layout of your sketch (initial positions, initial colors, etc.)
function setup(){
  console.log('this is called once!');

  // this line allows us to create a HTML <canvas> element, on which we can draw.
  // in this case, the canvas will be 300px wide, and 300 pixel tall
  createCanvas(300, 300);

  // we decide to set the background color to dark red.
  background(20, 4, 6);
}


// the draw function is called over and over again.
// think of it as a camera that plays an image, after an image, after an image, to create the illusion of motion (a movie)
function draw(){
  console.log('this is called over and over!');
}
