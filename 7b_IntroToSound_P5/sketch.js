// p5js automatically recognizes two functions: setup() and draw()
// any webpage including p5js should have these two functions, even if they are left empty

var mySound;


// p5 also gives a function called preload.
// in preload, we write all the code that relates to loading external assets (sound, fonts, images)
// preload will be called first, then once everything is loaded, then setup is called, then draw is called ad vitam eternam
function preload(){

  //here we load my sound -it is located in the same folder as sketch.js
  mySound = loadSound('technology.mp4');
}

// the setup function is called once, when the webpage is loaded.
// it's useful to set the initial layout of your sketch (initial positions, initial colors, etc.)
function setup(){
  console.log('this is called once!');

  // this line allows us to create a HTML <canvas> element, on which we can draw.
  // in this case, the canvas will be 300px wide, and 300 pixel tall
  createCanvas(300, 300);
}


// the draw function is called over and over again.
// think of it as a camera that plays an image, after an image, after an image, to create the illusion of motion (a movie)
function draw(){
  console.log('this is called over and over!');

  // we decide to set the background color to dark red.
  background(200, 4, 6);

  fill(0, 0, 200);
  ellipse(0, 0, 10, 10);
}


// another function p5 gives us is mousePressed()
// anything written in here happens whenever the mouse is pressed once
function mousePressed(){
  mySound.play();
}
