//p5 Video Example for COMM LAB

var droneVideo;
var showExtraRow = false;

function setup() {
  createCanvas(480, 270);
  
  //once we've create our canvas, we load a video through p5
  droneVideo = createVideo('drone.mov', function(){
		console.log("We're ready!");
  });

	//the way p5 works is that it doesn't actually play a video
	//but rather renders the frames to a <canvas> element
	//so we just need to specify it to loop and then to hide the actual <video>
	//otherwise we will see two output
	droneVideo.loop();
	droneVideo.hide();
}


//below are three ways to display video
//1 basic is just a regular image on the canvas
//2 is separating in two rows
//3 is creating a grid of videos
//comment and un-comment each to see how it looks!
function draw() {
  background(255);

  /*---------- Video Basic ----------*/
  image(droneVideo,0,0,width,height);


  /*---------- Video Multiple ----------*/
  /*
	image(droneVideo,0,0,width/2,height/2);
	image(droneVideo,width/2,0,width/2,height/2);

	if (showExtraRow){
		image(droneVideo,0,height/2, width/2, height/2);
		image(droneVideo,width/2, height/2, width/2,height/2);
	}
	*/
 
  /*---------- Video Grid ----------*/
  /*
  var gridSize = 20;
  var curMouseX = constrain(mouseX,0, windowWidth);

  var vidWidth = map(curMouseX,0,windowWidth,0,width/gridSize);
  var vidHeight = map(curMouseX,0,windowWidth,0,height/gridSize);
  var droneVol = map(curMouseX,0,windowWidth,1,0);

	for (var y = 0; y < gridSize; y++){
		for (var x = 0; x < gridSize; x++){
			var curX = x * width/gridSize;
			var curY = y * height/gridSize;
			image(droneVideo, curX, curY, vidWidth,vidHeight);
		}
	}
	droneVideo.volume(droneVol);
  */
}

function mousePressed(){
	showExtraRow = !showExtraRow;
}
