//console.log("Hello?");
var w = 800;
var h = 600;

var mySound;
var curVol = 0.5;

var mySounds = [];

function preload(){
	mySound = loadSound("technology.mp4");
	mySound.playMode('restart');
}

function setup(){
	createCanvas(w,h);
	background(0,0,255);
	rectMode(CENTER);
}

var posX = 0;
var posY = h/2;
var speedX = 5;
var speedY = 3;

function draw(){
	background(0,0,255);

	mySound.setVolume(curVol);

	if(posX > width || posX < 0){
		speedX = speedX * -1;
		//mySound.play();
	}
	posX = posX + speedX;

	if(posY > height || posY < 0){
		speedY = speedY * -1;
		//mySound.play();
	}
	posY = posY + speedY;

	rect(posX,posY,100,100);

	fill(0,255,0);
	ellipse(100,100,100);

	if (mouseIsPressed){
		//do stuff
		if (!mySound.isPlaying()){
			mySound.play();
		}
	}
	else{
		mySound.play(0,0.9);
		mySound.pause();
	}
}

function mousePressed(){
	fill(255,0,0);
	//mySound.play();
}

function keyPressed(){
	if (keyCode == LEFT_ARROW && curVol > 0){
		curVol = curVol - 0.1;
	}
	else if (keyCode == RIGHT_ARROW && curVol < 1){
		curVol = curVol + 0.1;
	}
}