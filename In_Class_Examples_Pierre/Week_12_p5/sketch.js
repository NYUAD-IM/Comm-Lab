let positions = []
let myPitOfLava

function preload(){
  myPitOfLava = loadImage("lava.png")
}

function setup(){ //happens once
  createCanvas(windowWidth, windowHeight)

  //for loop
}

function draw(){ //happens every frame

  background(120, 230, 210)

  imageMode(CENTER)
  image(myPitOfLava, width/2, height/2)

  if(mouseIsPressed){

    let distance_from_pit = dist(mouseX, mouseY, width/2, height/2)

    if(distance_from_pit < 150){
      let myNewVector = createVector(mouseX, mouseY)
      positions.push(myNewVector)
    }
  }

  for(let i = 0; i < positions.length; i += 1){
    ellipse(positions[i].x, positions[i].y, 20, 20)
  }
}













/**/
