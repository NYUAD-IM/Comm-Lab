var posX = 0;
var speed = 5;

var theSound;

function preload(){
	theSound = loadSound("technology.mp4");
	theSound.playMode('restart');
}

//Called once
function setup(){
	createCanvas(800,600);
	background(0,0,255);
}

//Called infinitely- 60x per second
function draw(){
	background(0,0,255);

	fill(0,255,0);
	ellipse(mouseX,mouseY,120);
	fill(255,0,0);
	rect(posX, height/2, 100,100);

	if(posX > width-80 || posX < -20){
		// theSound.play();
		speed = speed * -1;
	}
	posX = posX + speed;
}

function mousePressed(){
	theSound.play();
}