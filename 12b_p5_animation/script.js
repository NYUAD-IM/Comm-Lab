let frames = [];

let number_of_frames = 11;

let current_frame = 0;

let timer = 125
let start_time = 0

preload = () => {
  for(let i = 0; i < number_of_frames; i++){
    frames[i] = loadImage('sphere-'+i+'.png')
  }
}

setup = () => {
  createCanvas(600, 600);

    console.log(frames)
}

draw = () => {
  background(255);
  image(frames[current_frame], 100, 100)

  if(millis() - start_time > timer){
    current_frame++
    start_time = millis()

    if(current_frame == number_of_frames){
      current_frame = 0
    }
  }
}
