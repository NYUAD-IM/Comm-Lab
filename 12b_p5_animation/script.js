let frames = [];
let number_of_frames = 11;
let current_frame = 0;

preload = () => {
  for(let i = 0; i < number_of_frames; i++){
    frames[i] = loadImage('sphere-'+i+'.png')
  }
}

setup = () => {
  createCanvas(600, 600);
}

draw = () => {
  background(255);
  image(frames[current_frame], 100, 100)

  //current_frame = (current_frame + 1) % number_of_frames
}
