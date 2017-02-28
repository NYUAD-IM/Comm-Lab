var myAudio;

function playMyAudio(){
  myAudio = document.getElementById('player');

  myAudio.play();
}

function adjustVolume(value){
  console.log(value);
  myAudio.volume = value;
}

//
// function setup(){
//   console.log('this runs once');
//
//   createCanvas(windowWidth, windowHeight);
//   background(250, 79, 63);
// }
//
// function draw(){
//   console.log('this runs for ever');
//   background(250, 79, 63, 10);
//
//   noStroke();
//
//   fill(255, 100, 10);
//   ellipse(mouseX, mouseY, 20, 20);
//
//   fill(10, 100, 255);
//   ellipse(mouseX + 30, mouseY, 20, 20);
// }
